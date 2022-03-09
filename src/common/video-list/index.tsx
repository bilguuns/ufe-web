import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";

class VideoApp extends Component {
  player = {};
  state = {
    video: {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster:
        "https://media.istockphoto.com/videos/retro-80s-style-grid-sun-stars-old-tv-screen-animation-background-video-id1166485097?s=640x640",
    },
  };

  onPlayerReady(player: {}) {
    console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoPlay(duration: any) {
    console.log("Video played at: ", duration);
  }

  onVideoPause(duration: any) {
    console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration: any) {
    console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration: any) {
    console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from: any, to: any) {
    console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd() {
    console.log("Video ended");
  }

  render() {
    return (
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <h2>UFE видео</h2>
          <div
            className="video-player"
            style={{ width: `100%`, height: "auto", display: "flex" }}
          >
            <VideoPlayer
              controls={true}
              src={this.state.video.src}
              poster={this.state.video.poster}
              width="1110"
              height="600"
              onReady={this.onPlayerReady.bind(this)}
              onPlay={this.onVideoPlay.bind(this)}
              onPause={this.onVideoPause.bind(this)}
              onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
              onSeeking={this.onVideoSeeking.bind(this)}
              onSeeked={this.onVideoSeeked.bind(this)}
              onEnd={this.onVideoEnd.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default VideoApp;
