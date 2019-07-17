import React, { Component } from "react";
import VideoChoiceItem from "./VideoChoiceItem";

class VideoChoices extends Component {
  render() {
    let { videos } = this.props;
    return (
      <div className="video-choices">
        <div className="container">
          <div className="row">{this.showVideoItem(videos)}</div>
        </div>
      </div>
    );
  }

  showVideoItem = videos => {
    let result = null;
    let { videoSelected, onClickVideo } = this.props;
    if (videos.length > 0) {
      result = videos.map((video, index) => {
        let isSelected = false;
        if (video.name === videoSelected.name) {
          isSelected = true;
        }
        return (
          <VideoChoiceItem
            key={index}
            video={video}
            isSelected={isSelected}
            onClickVideo={onClickVideo}
          />
        );
      });
    }
    return result;
  };
}

export default VideoChoices;
