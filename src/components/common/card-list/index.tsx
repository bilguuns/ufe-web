import React from "react";
import { CardStyle } from "./style";
import CardImage from "../../../assets/images/card_image.png";
import Image from "next/image";
import CustomButton from "../card-button";
import MoreButton from "../more-button";

export default function AppCard() {
  return (
    <CardStyle>
      <section id="card_list" className="card_list section-bg">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE хуанли 2022</h1>
            </div>
            <div className="col-lg">
              <div className="more-button">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="more-button">
            <MoreButton />
          </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <div className="hover-zoomin">
                  <a>
                    <Image src={CardImage} alt="" />
                  </a>
                </div>

                <div className="card_content">
                  <p className="fw-bold hover-underline-animation">
                    Нэгдүгээр сар
                  </p>
                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                  <CustomButton />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <div className="hover-zoomin">
                  <a>
                    <Image src={CardImage} alt="" />
                  </a>
                </div>

                <div className="card_content">
                  <p className="fw-bold hover-underline-animation">
                    Нэгдүгээр сар
                  </p>
                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                  <CustomButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CardStyle>
  );
}
