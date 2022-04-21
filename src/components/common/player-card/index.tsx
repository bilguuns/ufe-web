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
          <div className="col-md-12">
            <div className={"row"}>
              {poolcasts?.poolcasts?.map((item: any, index: any) => {
                return (
                  <>
                    {index < 3 && (
                      <div className="col-md-4 ">
                        <div
                          key={item.id}
                          className="card"
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
                              <div>
                                <a href={item.url}>
                                  <img
                                    className="vertical-center"
                                    src="/icon/play-fill.svg"
                                    alt="image-alt-text"
                                  />
                                </a>
                              </div>

                              <button
                                className="btn btn-primary "
                                style={{
                                  marginBottom: "4px",
                                  borderRadius: "6px",
                                }}
                              >
                                “Бэтта” CEO Г. Төгөлдөр
                              </button>
                              <br />
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
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </VideoStyle>
  );
}
