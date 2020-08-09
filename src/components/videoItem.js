import React from "react";
import "./videoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const onVideoClick = () => {
    onVideoSelect(video);
  };

  return (
    <div onClick={onVideoClick} className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
