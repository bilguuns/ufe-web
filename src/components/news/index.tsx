import React from "react";
import { NewsStyle } from "./style";
import NewsCardImage from "../../assets/images/news.png";
import NewsCardSmallImage from "../../assets/images/news-small-card.png";

import Image from "next/image";
import CardButton from "../../common/card-button";
import MoreButton from "../../common/more-button";
import { AppNewsSmall } from "./news-small";
import { AppNewsBig } from "./news";

export default function News() {
  return (
    <NewsStyle>
      <section id="news_list" className="news_list section">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE мэдээ</h1>
            </div>
            <div className="col-lg">
              <div className="more-button">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-5">
            <AppNewsBig />
            <div className="col-lg-4 ">
              <AppNewsSmall />
              <AppNewsSmall />
              <AppNewsSmall />
              <AppNewsSmall />
              <AppNewsSmall />
            </div>
          </div>
        </div>
      </section>
    </NewsStyle>
  );
}
