import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  const height = props.height - 15;

  return (
    <div className="center-element">
      <nav>
        <ul
          className="col-xl-4 list-group"
          style={{ listStyle: 'none', maxHeight: height }}
        >
          {videoItems}
        </ul>
      </nav>
    </div>
  );
};

export default VideoList;
