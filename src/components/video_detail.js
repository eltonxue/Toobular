import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { height: 536 };
  }

  componentDidUpdate() {
    if (this.state.height !== this.element.clientHeight) {
      this.props.onHeightChange(this.element.clientHeight);
      this.setState({ height: this.element.clientHeight });
    }
  }

  render() {
    const video = this.props.video;

    if (!video) {
      return <div>Loading...</div>;
    }

    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div
        className="video-detail col-xl-8"
        ref={element => (this.element = element)}
      >
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
  }
}
// const VideoDetail = ({ video }) => {
//   if (!video) {
//     return <div>Loading...</div>;
//   }
//   const videoTitle = video.snippet.title;
//   const videoDescription = video.snippet.description;
//   const videoId = video.id.videoId;
//   const url = `https://www.youtube.com/embed/${videoId}`;
//
//   return (
//     <div className="video-detail col-xl-8">
//       <div className="embed-video">
//         <div className="embed-responsive embed-responsive-16by9">
//           <iframe className="embed-responsive-item" src={url} />
//         </div>
//       </div>
//
//       <div className="details">
//         <div className="details-title">
//           {videoTitle}
//         </div>
//         <div>
//           {videoDescription}
//         </div>
//       </div>
//     </div>
//   );
// };

export default VideoDetail;
