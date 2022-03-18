import React from "react";
import { NewsCardStyle } from "./style";
import NewsCardImage from "../../assets/images/news-card.png";
import Image from "next/image";
import CardButton from "../../common/card-button";

export default function AppNews() {
  return (
    <NewsCardStyle>
      <section id="news_list" className="news_list section-bg">
        <div className="header-container container">
          <h1>UFE салбарын мэдээ</h1>
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="news-img">
                <Image src={NewsCardImage} alt="" layout="responsive" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="news-description">
                <h3 className="pt-0 pt-lg-4">
                  “UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө.
                </h3>
                <p>
                  “Оюутны Холбоо ТББ”-аас жил бүр уламжлал болгон зохион
                  байгуулдаг “ UFE NETWORKING 21” үйл ажиллагаа 2021.11.19-ний
                  18:00-20:40 цагийн хооронд 15 салбар салбарын зочин илтгэгч,
                  оюутнуудын хамтаар амжилттай зохион байгуулагдлаа.
                </p>
              </div>
              <CardButton />
            </div>
          </div>
        </div>
      </section>
    </NewsCardStyle>
  );
}
