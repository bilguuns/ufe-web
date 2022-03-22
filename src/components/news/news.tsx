import React from "react";
import { NewsStyle } from "./style";
import NewsCardImage from "../../assets/images/news.png";
import NewsCardSmallImage from "../../assets/images/news-small-card.png";

import Image from "next/image";
import CardButton from "../common/card-button";
import MoreButton from "../common/more-button";

export const AppNewsBig = () => {
  return (
    <div className="col-lg-8 ">
      <div className="hover-zoomin">
        <a>
          <Image src={NewsCardImage} alt="" layout="responsive" />
        </a>
        <h1>“UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө</h1>
      </div>
    </div>
  );
};
