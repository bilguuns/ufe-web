import Image from "next/image";
import ufe_icon from "../../assets/images/Revolving-Building-Background .png";
import styles from "../footer/style.module.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

const AppHero = () => {
  return (
    <MDBCarouselInner>
      <MDBCarouselItem className="active">
        <MDBCarouselElement
          src="https://i.ibb.co/bW7TXc3/Revolving-Building-Background-1-1.png"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Эрхэм баян Эрдэм</h5>
          <p>
            A subititle for your landing page describing your product or service
            that you provide..
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
    // <div className="has-bg-img">{/* <Image src={ufe_icon} /> */}</div>
  );
};

export default AppHero;
