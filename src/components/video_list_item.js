import React, { Component } from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  // const video = props.video;

  const imageURL = video.snippet.thumbnails.default.url;
  var subTitle = video.snippet.title;

  if (subTitle.length > 50) {
    subTitle = subTitle.substring(0, 50) + '...';
  }

  return (
    <li onClick={() => onVideoSelect(video)} className="list-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {subTitle}
          </div>
          <div>
            {video.snippet.channelTitle}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
