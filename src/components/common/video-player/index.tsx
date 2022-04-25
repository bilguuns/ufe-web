import React from "react";
import { Player, ControlBar, ReplayControl } from "video-react";
import "video-react/dist/video-react.css";
import { HeroStyle } from "./style";

const VideoPlayer = () => {
  return (
    <>
      <HeroStyle>
        <header>
          <div className="box">
            <div className="video">
              <Player autoPlay loop muted startTime>
                <source src="/videos/Сургууль хурдан.mp4" type="video/mp4" />
                <ControlBar disableCompletely={true} />
              </Player>
            </div>
            <div className="container h-100">
              <div className="d-flex h-100 text-left align-items-center">
                <div
                  className="w-100 text-white"
                  style={{ marginBottom: "200px" }}
                >
                  <h1 className="display-3">
                    Санхүү эдийн засгийн их сургууль
                  </h1>
                  <p className="lead mb-0">Эрхэм баян эрдэм</p>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </header>
      </HeroStyle>
    </>
  );
};

export default VideoPlayer;
