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
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <Image width={350} height={452} alt="example" src={podcast} />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <Image width={350} height={452} alt="example" src={podcast} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <Image width={350} height={452} alt="example" src={podcast} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PodcastCardStyle>
  );
};

export default PodcastCard;
