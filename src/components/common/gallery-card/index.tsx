import React, { useState } from "react";
import GalleryCardImage from "../../../assets/images/gallery-card.png";
import NewsCardSmallImage from "../../assets/images/news-small-card.png";

import Image from "next/image";

export default function GalleryCard(props: any) {
  return (
    <>
      <div>
        <div className="row g-5">
          <div className="col-md-6">
            <div className="hover-zoomin ">
              <a>
                <Image src={GalleryCardImage} alt="" layout="responsive" />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div style={{ paddingTop: "11rem" }}>
              <h3>
                ’’UFE GALLERY’’-н нээлтийг цахимаар үзэж, худалдан авалт хийх
                боломжтой.
              </h3>
              <p style={{ paddingTop: "2rem" }} className="text-black-50">
                2022.12.01 - 2022.12.07
              </p>
              <p>Санхүү эдийн засгийн их сургууль, Бизнес удирдлагын танхим</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
