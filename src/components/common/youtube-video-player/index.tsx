import YouTube from "react-youtube";
import MoreButton from "../more-button";
import { VideoStyle } from "./style";

export default function YoutubeVideo() {
  return (
    <VideoStyle>
      <section id="video_list" className="video_list section">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1 style={{ fontSize: "40px", lineHeight: "54px" }}>
                UFE Улаансарнай
              </h1>
            </div>
            <div className="col-lg">
              {/* <div className="more-button">
                <MoreButton />
              </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/TGt6ne31uL8`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </section>
    </VideoStyle>
  );
}
