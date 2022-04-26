import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { MoreButtonStyle } from "./style";
const MoreButton = ({ url }: any) => (
  <MoreButtonStyle>
    <Link href={"poolcasts"}>
      <a
        style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "regular" }}
      >
        Бүгдийг харах
        <BsArrowRightShort style={{ color: "#345BB8", fontSize: "30px" }} />
      </a>
    </Link>
  </MoreButtonStyle>
);
export default MoreButton;
