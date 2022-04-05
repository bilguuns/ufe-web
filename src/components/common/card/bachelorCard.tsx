import CustomButton from "../custom-button";
import React from "react";

export default function BachelorCard(props: any) {
  const {data} = props;
  return (
    <>
      <div className="card m-2" style={{ width: "100%", borderRadius: "16px", maxHeight: '452px'}}>
        <div className="hover-zoomin">
          <img
            className="card-img-top"
            src={data.url}
            alt="image-alt-text"
            width={350}
            height={200}
            style={{ borderRadius: "16px 16px 0 0" }}
          />
        </div>
        <div className="card-body">
          <p className="card-title fw-bold hover-underline-animation">{data.name}</p>
          <p className="card-text">{data.description}{data.description}{data.description}{data.description}{data.description}</p>
          <CustomButton />
        </div>
      </div>
    </>
  );
}
