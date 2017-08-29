import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-xl-8">
      <div className="embed-video">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
      </div>

      <div className="details">
        <div className="details-title">
          {videoTitle}
        </div>
        <div>
          {videoDescription}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
