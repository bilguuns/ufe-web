import YouTube from "react-youtube";
import MoreButton from "../more-button";
import { VideoStyle } from "./style";

export default function Player() {
  const videoOptions = {
    height: "400px",
    width: "400px",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };
  return (
    <VideoStyle>
      <section id="video_list" className="video_list section-bg">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE Poolcast</h1>
            </div>
            <div className="col-lg">
              <div className="more-button">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <YouTube videoId="TGt6ne31uL8" opts={videoOptions} />
            </div>
          </div>
        </div>
      </section>
    </VideoStyle>
  );
}
