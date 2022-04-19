import Image from "next/image";
import avatar from "assets/images/avatar.png";
import MoreButton from "../more-button";
import { AvatarCardStyle } from "./style";
import CircleButton from "../circle-button";

const AvatarCard = (props: any) => {
  const { employeeData } = props;
  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;

  const imgSrc =
    employeeData.images[0] && employeeData.images[0].filePath
      ? imgBase + employeeData.images[0].filePath
      : null;

  return (
    <AvatarCardStyle>
      <div className="card m-2" style={{ width: "100%", borderRadius: "16px" }}>
        <img
          className="card-img-top"
          src={`${imgSrc}`}
          alt="image-alt-text"
          style={{ borderRadius: "16px 16px 0 0" }}
        />

        <div className="card-img-overlay d-flex  flex-wrap align-items-end">
          <div className="overlay-content  ">
            <h5 className="h5 card-title text-white   ">
              {employeeData ? employeeData.firstName : "null"}
            </h5>
            <h6 className="h6 card-text text-white ">
              {employeeData ? employeeData.email : "null"}
            </h6>
            <CircleButton />
          </div>
        </div>
      </div>
    </AvatarCardStyle>
  );
};

export default AvatarCard;
