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
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
    // <div className="has-bg-img">{/* <Image src={ufe_icon} /> */}</div>
  );
};

export default AppHero;
