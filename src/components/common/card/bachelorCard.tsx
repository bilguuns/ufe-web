import CustomButton from "../custom-button";
import React from "react";

export default function BachelorCard() {
  return (
    <>
      <div className="card" style={{ width: "18rem", borderRadius: "16px" }}>
        <div className="hover-zoomin">
          <img
            className="card-img-top"
            src="/image/education.png"
            alt="image-alt-text"
            width={350}
            height={200}
            style={{ borderRadius: "16px 16px 0 0" }}
          />
          {/* <Image src={`${imagePath}`} width={500} height={500} /> */}
        </div>
        <div className="card-body">
          <p className="card-title fw-bold hover-underline-animation">Bank</p>
          <p className="card-text">Lorem ipsum ...</p>
          <CustomButton />
        </div>
      </div>
    </>
  );
}
