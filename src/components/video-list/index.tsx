import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import MoreButton from "../common/more-button";
import Image from "next/image";
import poster from "../../assets/images/video-image.png";
import { VideoStyle } from "./style";

const AppVideo = () => (
  <VideoStyle>
    <section id="video_list" className="video_list section">
      <div className="header-container container">
        <div className="row">
          <div className="col-lg">
            <h1>UFE видео</h1>
          </div>
          <div className="col-lg">
            <div className="more-button">
              <MoreButton />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Player>
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </Player>
      </div>
    </section>
  </VideoStyle>
);

export default AppVideo;
