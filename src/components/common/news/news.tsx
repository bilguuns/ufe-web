import Link from "next/link";
import React from "react";
import DateCard from "../date-card";

export const AppNewsBig = (props: any) => {
  const { newsData } = props;
  console.log("qqqqqqqqqqqqq", newsData?.id);

  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any =
    newsData?.translates.length > 0 ? newsData.translates[0] : null;

  const imgSrc =
    newsData?.image[0] && newsData.image[0].filePath
      ? imgBase + newsData.image[0].filePath
      : null;
  return (
    <>
      <Link href={`/widgetDetail/${newsData?.id}`}>
        <a>
          <div style={{ position: "relative" }}>
            <div className="hover-zoomin">
              <a>
                <img src={`${imgSrc}`} alt="image-alt-text" />
              </a>
            </div>

            <h1 style={{ fontSize: "40px", lineHeight: "54px" }}>
              {translate?.title}
            </h1>
          </div>
        </a>
      </Link>

      <DateCard newsDate={newsData?.timePublished} />
    </>
  );
};
