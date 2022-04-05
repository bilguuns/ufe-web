import React from "react";
import Image from "next/image";
import NewsCardSmallImage from "../../../assets/images/news-small-card.png";
const dataItems = [
  {
    id: 1,
    title: "UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө.",
  },
  {
    id: 2,
    title: "UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө1.",
  },
  {
    id: 3,
    title: "UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө2.",
  },
  {
    id: 4,
    title: "UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө3.",
  },
  {
    id: 5,
    title: "UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө4.",
  },
];
export const AppNewsSmall = () => (
  <div>
    <div className="row gx-5 small-news-card ">
      <div className="col-8 .col-md-8">
        <div className="small-news">
          <p>UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө.</p>
        </div>
      </div>

      <div className="col-4 .col-md-4">
        <div className="small-image">
          <div className="hover-zoomin">
            <a>
              <Image src={NewsCardSmallImage} alt="" layout="responsive" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
);
