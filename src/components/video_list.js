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

  return (
    <div className="center-element">
      <ul className="col-xl-4 list-group" style={{ listStyle: 'none' }}>
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;
