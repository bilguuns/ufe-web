import React from "react";
import Image from "next/image";
import NewsCardSmallImage from "../../../assets/images/news-small-card.png";
import DateCard from "../date-card";
import Link from "next/link";

export const AppNewsSmall = (props: any) => {
  const { newsData } = props;

  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any =
    newsData.translates.length > 0 ? newsData.translates[0] : null;

  const imgSrc =
    newsData.image[0] && newsData.image[0].filePath
      ? imgBase + newsData.image[0].filePath
      : null;

  return (
    <>
      <Link href={`/widgetDetail/${newsData?.id}`}>
        <a>
          <div className="row gx-5 small-news-card ">
            <div className="col-8 .col-md-8">
              <div className="small-news">
                <p style={{ fontSize: "16px", lineHeight: "24px" }}>
                  {translate?.title}
                </p>
              </div>
              <DateCard newsDate={newsData?.timePublished} />
            </div>

            <div className="col-4 .col-md-8">
              <div className="small-image">
                <div className="hover-zoomin">
                  <a>
                    <img src={`${imgSrc}`} alt="image-alt-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </a>
      </Link>
    </>
  );
};
