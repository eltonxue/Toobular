// IMPORT REACT CONCEPTS
/*

- Class vs. Functional component:
  Class -> used whenever we want to have STATE
            1. Needs constructor()/render()
  Functinal -> takes some properties, returns some
              JSX (no change in state)


- CALLBACKS to manipulate and pass data between
  parent/child components

- Redux will make this easier

- State belong its own components, very localized
  (changes in Redux)


*/

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch';
// import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAEIJfxeY1V4mxhc9B2XFSdwBEHr3jhqhM';

// Create a new component. This component should produce
// some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      height: 536
    };

    // Get Related Youtube Videos:
    // https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key={YOUR_API_KEY}

    const defaultTerm = 'surfboards';
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      defaultTerm +
      '&type=&maxResults=25&key=' +
      API_KEY;

    // EXAMPLE OF A FETCH (GET)
    const searchVideos = fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(data =>
        this.setState({ videos: data.items, selectedVideo: data.items[0] })
      )
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });

    // YTSearch({ key: API_KEY, term: 'hello' }, videos => {
    //   console.log(videos);
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });

    this.relatedVideos = this.relatedVideos.bind(this);
  }

  relatedVideos(videoId) {
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=' +
      videoId +
      '&type=video&maxResults=25&key=' +
      API_KEY;

    // EXAMPLE OF A FETCH (GET)
    const relVideos = fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(data => this.setState({ videos: data.items }))
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }

  videoSearch(term) {
    const url =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      term +
      '&type=&maxResults=25&key=' +
      API_KEY;

    const searchVideos = fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(data => this.setState({ videos: data.items }))
      .catch(function(ex) {
        console.log('parsing failed', ex);
      });
  }

  videoSelect(selectedVideo) {
    this.setState({ selectedVideo });
    console.log(selectedVideo);
    this.relatedVideos(selectedVideo.id.videoId);

    this.onPlayerHeightChange(this.element.clientHeight);
  }

  onPlayerHeightChange(height) {
    this.setState({ height });
    console.log(height);
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 400);

    return (
      <div>
        <div className="main-title">
          <span>If it's on YouTube, it's here.</span>
        </div>
        <SearchBar onSearchBtnClick={videoSearch} />
        <div>
          <VideoDetail
            onHeightChange={height => {
              this.onPlayerHeightChange(height);
            }}
            video={this.state.selectedVideo}
          />
        </div>
        <VideoList
          onVideoSelect={selectedVideo => {
            this.videoSelect(selectedVideo);
          }}
          height={this.state.height} // Must implement callback into video_list.js
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
