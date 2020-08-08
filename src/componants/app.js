import React from "react";
import SearchBar from "./searchBar";
import Youtube from "../api/youtube";
import VideoList from "./videoList";
import VideoDetails from "./videoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.SearchHandler("React crash curse");
  }

  SearchHandler = async (term) => {
    const KEY = "AIzaSyBne86MIlkfTEmsqpAcL33_wuwj0wm9d-8";
    const response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar SearchHandler={this.SearchHandler} />
        <div className="ui grid">
          <div className="ui row">
            <div class="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
