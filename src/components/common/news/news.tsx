import Link from "next/link";
import React from "react";
import DateCard from "../date-card";

export const AppNewsBig = (props: any) => {
  const { newsData } = props;

  console.log("newsDatanewsDatanewsDatanewsDatanewsData", newsData);

  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any =
    newsData?.translates.length > 0 ? newsData.translates[0] : null;

  const imgSrc =
    newsData?.image[0] && newsData.image[0].filePath
      ? imgBase + newsData.image[0].filePath
      : null;
  return (
    <>
      <Link href="widgetDetail">
        <a>
          <div>
            <div className="hover-zoomin">
              <a>
                <img src={`${imgSrc}`} alt="image-alt-text" />
              </a>
            </div>

            <h1>{translate?.title}</h1>
          </div>
        </a>
      </Link>

      <DateCard newsDate={newsData?.timePublished} />
    </>
  );
};
