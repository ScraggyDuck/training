import React, { Component } from "react";

class VideoPlayer extends Component {
  render() {
    const { videoSelected } = this.props;
    return (
      <div className="video-player">
        <iframe
          width="1140"
          height="506"
          src={videoSelected.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="trailer"
        />
      </div>
    );
  }
}

export default VideoPlayer;
