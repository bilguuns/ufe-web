import React, { useState } from "react";
import TimelineImage from "../../../assets/images/timeline.png";
import NewsCardSmallImage from "../../assets/images/news-small-card.png";

import Image from "next/image";

export default function Timeline(props: any) {
  const [state, setState] = useState(true);
  return (
    <>
      {state ? (
        <div>
          <div className="row g-5">
            <div className="col-md-6">
              <div className="hover-zoomin mt-5">
                <a>
                  <Image src={TimelineImage} alt="" layout="responsive" />
                </a>
              </div>
            </div>

            <div
              className="col-md-6"
              style={{ borderLeft: "1px solid #000000" }}
            >
              <div
                className="text-start"
                style={{ transform: "translate(-120px, 0)" }}
              >
                1924-1928 <img src="/icon/radio.svg" />
              </div>
              <div className="mt-4">
                <p className="mb-4 ">
                  <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                  хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө,
                  програмыг шинэчлэн Нягтлан бодохын түр сургууль болгон
                  өөрчлөв.
                </p>
                <p className="mb-4">
                  <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                  хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө,
                  програмыг шинэчлэн Нягтлан бодохын түр сургууль болгон
                  өөрчлөв.
                </p>
                <p className="mb-4">
                  <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                  хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө,
                  програмыг шинэчлэн Нягтлан бодохын түр сургууль болгон
                  өөрчлөв.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row g-5">
          <div
            className="col-md-6"
            style={{ borderRight: "1px solid #000000" }}
          >
            <div
              className="text-end"
              style={{ transform: "translate(36px, 0)" }}
            >
              1924-1928 <img src="/icon/radio.svg" />
            </div>

            <div className="mt-4">
              <p className="mb-4 ">
                <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө, програмыг
                шинэчлэн Нягтлан бодохын түр сургууль болгон өөрчлөв.
              </p>
              <p className="mb-4">
                <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө, програмыг
                шинэчлэн Нягтлан бодохын түр сургууль болгон өөрчлөв.
              </p>
              <p className="mb-4">
                <strong>1926:</strong> Сурах хугацааг 2 жил болгон сунгаж заах
                хичээл, сурагчдын тоог олшруулан сургалтын төлөвлөгөө, програмыг
                шинэчлэн Нягтлан бодохын түр сургууль болгон өөрчлөв.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="hover-zoomin mt-5">
              <a>
                <Image src={TimelineImage} alt="" layout="responsive" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
