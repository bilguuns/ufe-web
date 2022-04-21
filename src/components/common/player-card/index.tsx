import YouTube from "react-youtube";
import MoreButton from "../more-button";
import { VideoStyle } from "./style";
import image from "../../../assets/images/avatar.png";

export default function Player() {
  const poolcasts = {
    poolcasts: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=1PKUc4OlDEY&list=PLqnoOV7X-q8e0Yi7gtSTlQAmz95O-VwHR",
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=H8Mdh8LCf9c&list=PLqnoOV7X-q8e0Yi7gtSTlQAmz95O-VwHR&index=2",
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=2t-3sY-DKLA&list=PLqnoOV7X-q8e0Yi7gtSTlQAmz95O-VwHR&index=3",
      },
      {
        id: 4,
        url: "https://www.youtube.com/watch?v=FxOGgNrI2U0&list=PLqnoOV7X-q8e0Yi7gtSTlQAmz95O-VwHR&index=4",
      },
    ],
  };

  console.log("ffkfkfkfkfkfkfkfkkfkfkf", poolcasts);

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
          <div className="col-md-8">
            <div className={"row"}>
              <div className=" col-12 col-md-6  col-lg-4">
                <div
                  className="card "
                  style={{ width: "100%", borderRadius: "16px" }}
                >
                  <img
                    className="card-img-top"
                    src="/image/podcast.png"
                    alt="image-alt-text"
                    style={{ borderRadius: "16px 16px 0 0" }}
                  />
                  <div className="card-img-overlay d-flex  flex-wrap align-items-end">
                    <div className="overlay-content">
                      {/* <h5 className="h5 card-title text-white"> */}
                      <div>
                        <a href="https://www.youtube.com/watch?v=1PKUc4OlDEY&list=PLqnoOV7X-q8e0Yi7gtSTlQAmz95O-VwHR">
                          <img
                            className="vertical-center"
                            src="/icon/play-fill.svg"
                            alt="image-alt-text"
                          />
                        </a>
                      </div>
                      {/* </h5> */}
                      {/* <h6 className="h6 card-text text-white "> */}
                      <button
                        className="btn btn-primary "
                        style={{ marginBottom: "4px", borderRadius: "6px" }}
                      >
                        “Бэтта” CEO Г. Төгөлдөр
                      </button>
                      <button
                        className="btn btn-warning"
                        style={{
                          borderRadius: "6px",
                        }}
                      >
                        Poolcast Ep. 1
                      </button>
                      {/* </h6> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VideoStyle>
  );
}
