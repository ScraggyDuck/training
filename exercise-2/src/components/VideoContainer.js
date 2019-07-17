import React, { Component } from "react";
import axios from "axios";

import VideoPlayer from "./VideoPlayer";
import VideoChoices from "./VideoChoices";

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      videoSelected: {}
    };
  }

  componentWillMount() {
    axios.get(`https://scotch-mvplayer-api.herokuapp.com/api/v1`).then(res => {
      const videos = res.data;
      this.setState({
        videos,
        videoSelected: videos[0]
      });
    });
  }

  onClickVideo = video => {
    this.setState({
      videoSelected: video
    });
  };

  render() {
    const { videos, videoSelected } = this.state;
    return (
      <div className="videos-container">
        <VideoPlayer videoSelected={videoSelected} />
        <VideoChoices
          videoSelected={videoSelected}
          videos={videos}
          onClickVideo={this.onClickVideo}
        />
      </div>
    );
  }
}

export default VideoContainer;
