import { BsFillArrowRightCircleFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { CardButtonStyle } from "./style";
const CardButton = () => (
  <CardButtonStyle>
    <Link href="events">
      <a className="fw-bold">
        <BsFillArrowRightCircleFill
          style={{ color: "#8F90A6", fontSize: "30px" }}
        />
        <span>Цааш үзэх</span>
      </a>
    </Link>
  </CardButtonStyle>
);

export default CardButton;
