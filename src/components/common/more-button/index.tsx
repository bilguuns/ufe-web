import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { MoreButtonStyle } from "./style";
const MoreButton = () => (
  <MoreButtonStyle>
    <Link href="events">
      <a>Бүгдийг харах</a>
    </Link>
    <BsArrowRightShort style={{ color: "#345BB8", fontSize: "30px" }} />
  </MoreButtonStyle>
);

export default MoreButton;
