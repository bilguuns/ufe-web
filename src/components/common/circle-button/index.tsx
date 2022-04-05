import React from "react";
import Link from "next/link";
import { CircleButtonStyle } from "./style";
const CircleButton = () => (
  <CircleButtonStyle>
    <div className="text-white">
      <img
        src="/icon/circle-button.svg"
        style={{ marginRight: "8px", marginBottom: "2px" }}
      />
      Дэлгэрэнгүй
    </div>
  </CircleButtonStyle>
);

export default CircleButton;
