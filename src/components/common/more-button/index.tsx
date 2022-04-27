import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { MoreButtonStyle } from "./style";

const MoreButton = ({ uri }: any) => (
  <MoreButtonStyle>
    {uri === "events" && (
      <>
        <Link href="events">
          <a
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "regular",
            }}
          >
            Бүгдийг харах
            <BsArrowRightShort style={{ color: "#345BB8", fontSize: "30px" }} />
          </a>
        </Link>
      </>
    )}
    {uri === "poolcasts" && (
      <>
        <Link href="poolcasts">
          <a
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "regular",
            }}
          >
            Бүгдийг харах
            <BsArrowRightShort style={{ color: "#345BB8", fontSize: "30px" }} />
          </a>
        </Link>
      </>
    )}
  </MoreButtonStyle>
);
export default MoreButton;
