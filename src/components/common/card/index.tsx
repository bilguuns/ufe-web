import React from "react";
import { CardStyle } from "./style";
import CardImage from "../../../assets/images/card_image.png";
import Image from "next/image";
import CustomButton from "../custom-button";
import MoreButton from "../more-button";
import nextConfig from "../../../../next.config";

const CustomCard = ({ name, shortName, imagePath }: any) => (
  <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
    <div className="card">
      <div className="hover-zoomin">
        <a>
          {/* {imagePath}
          -ddsdsdsd- */}
          {/* <Image
            src={`https://api.ufe.edu.mn/${imagePath}`}
            alt="image-alt-text"
            width={500}
            height={500}
          /> */}
          {/* <Image src={`${imagePath}`} width={500} height={500} /> */}
        </a>
      </div>

      <div className="card_content">
        <p className="fw-bold hover-underline-animation">{shortName}</p>
        <p>{name}</p>
        <CustomButton />
      </div>
    </div>
  </div>
);
export default CustomCard;
