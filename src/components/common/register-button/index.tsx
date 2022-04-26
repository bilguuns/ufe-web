import { BsFillArrowRightCircleFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { RegisterButtonStyle } from "./style";

const RegisterButton = () => (
  <RegisterButtonStyle>
    <a
      href="http://infosys.ufe.edu.mn:3001/register"
      target="http://infosys.ufe.edu.mn:3001/register"
    >
      <BsFillArrowRightCircleFill
        style={{ color: "#8F90A6", fontSize: "30px" }}
      />
      <span>Бүртгүүлэх</span>
    </a>
  </RegisterButtonStyle>
);

export default RegisterButton;
