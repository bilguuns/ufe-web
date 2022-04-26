import React from "react";

import CustomButton from "../custom-button";

const CustomCard = ({ name, shortName, imagePath }: any) => (
  <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
    <div className="card">
      <div className="hover-zoomin">
        <a>

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
