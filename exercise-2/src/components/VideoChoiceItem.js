import React, { Component } from "react";

class VideoChoiceItem extends Component {
  render() {
    const { video, isSelected } = this.props;
    return (
      <div
        className={ "video-item col " + (isSelected ? "active" : "")}
        onClick={() => this.onClickVideo(video)}
        style={{
          backgroundImage: `url(${video.poster})`
        }}
      >
        <div className="card-img-overlay">
          <h4 className="card-title">{video.name}</h4>
          <h5 className="card-text">{video.year}</h5>
        </div>
      </div>
    );
  }

  onClickVideo = video => {
    this.props.onClickVideo(video);
  };
}

export default VideoChoiceItem;
