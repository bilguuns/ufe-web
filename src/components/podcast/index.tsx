import Image from "next/image";
import podcast from "../../assets/images/podcast.png";
import { PodcastCardStyle } from "./style";

const PodcastCard = () => {
  return (
    <PodcastCardStyle>
      <section id="services" className="services section">
        <div className="container">
          <h1>UFE Poolcast</h1>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="icon-box">
                <Image alt="example" src={podcast} />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="icon-box">
                <Image alt="example" src={podcast} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="icon-box">
                <Image alt="example" src={podcast} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="icon-box">
                <Image alt="example" src={podcast} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PodcastCardStyle>
  );
};

export default PodcastCard;
