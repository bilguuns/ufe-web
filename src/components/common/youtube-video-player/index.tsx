import YouTube from "react-youtube";
import MoreButton from "../more-button";
import { VideoStyle } from "./style";

export default function YoutubeVideo() {
  const videoOptions = {
    height: "650px",
    width: "1300px",
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
      <section id="video_list" className="video_list section">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE Улаансарнай</h1>
            </div>
            <div className="col-lg">
              <div className="more-button">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <YouTube videoId="TGt6ne31uL8" opts={videoOptions} />
        </div>
      </section>
    </VideoStyle>
  );
}
