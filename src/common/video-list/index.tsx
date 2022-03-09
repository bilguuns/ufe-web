import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";

class VideoApp extends Component {
  constructor(props: any) {
    super(props);
  }
  player = {};
  state = {
    video: {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster: "http://www.example.com/path/to/video_poster.jpg",
    },
  };

  onPlayerReady(player: any) {
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
      <div>
        <VideoPlayer
          className="video-js-player"
          controls={true}
          height="400px"
          src={this.state.video.src}
          poster={this.state.video.poster}
          onReady={this.onPlayerReady.bind(this)}
          onPlay={this.onVideoPlay.bind(this)}
          onPause={this.onVideoPause.bind(this)}
          onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
          onSeeking={this.onVideoSeeking.bind(this)}
          onSeeked={this.onVideoSeeked.bind(this)}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </div>
    );
  }
}
export default VideoApp;
