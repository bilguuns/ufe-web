import React from "react";
import { Player, ControlBar, ReplayControl } from "video-react";
import "video-react/dist/video-react.css";
import { HeroStyle } from "./style";

const VideoPlayer = () => {
  return (
    <>
      <HeroStyle>
        <div className="video">
          <Player autoPlay loop muted startTime>
            <source src="/videos/Сургууль хурдан.mp4" type="video/mp4" />
            <ControlBar disableCompletely={true} />
          </Player>
        </div>
        <div className="overlay ">
          <h2>Эрхэм баян Эрдэм</h2>
        </div>
      </HeroStyle>
    </>
  );
};

export default VideoPlayer;
