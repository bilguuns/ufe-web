import React from "react";
import { CardStyle } from "./style";
import CardImage from "../../assets/images/card_image.png";
import Image from "next/image";

export default function AppCard() {
  return (
    <CardStyle>
      <section id="card_list" className="card_list section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <Image src={CardImage} alt="" />
                <div className="card_content">
                  <p className="fw-bold"> Нэгдүгээр сар</p>
                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <div className="img">
                  <Image src={CardImage} alt="" />
                </div>
                <div className="card_content">
                  <p className="fw-bold"> Хоёрдугаар сар</p>

                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <div className="img">
                  <Image src={CardImage} alt="" />
                </div>
                <div className="card_content">
                  <p className="fw-bold"> Гуравдугаар сар</p>
                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
              <div className="card">
                <div className="img">
                  <Image src={CardImage} alt="" />
                </div>
                <div className="card_content">
                  <p className="fw-bold"> Гуравдугаар сар</p>
                  <p>
                    Эдийн засгийн цагаан толгой СЭЗИС-ийн ТУЗ-ийн дарга,
                    Р.Амаржаргал (Ph.D)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CardStyle>
  );
}
