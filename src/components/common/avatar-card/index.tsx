import Image from "next/image";
import avatar from "assets/images/avatar.png";
import MoreButton from "../more-button";
import { AvatarCardStyle } from "./style";
import CircleButton from "../circle-button";

const AvatarCard = () => {
  return (
    <AvatarCardStyle>
      <div className="card " style={{ width: "18rem", borderRadius: "16px" }}>
        <Image alt="example" src={avatar} />
        <div className="card-img-overlay">
          <h5 className="text-white" style={{ paddingTop: "19rem" }}>
            Ёндон. А
          </h5>
          <CircleButton />
        </div>
      </div>
    </AvatarCardStyle>
  );
};

export default AvatarCard;
