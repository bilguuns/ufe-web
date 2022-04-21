import React from "react";

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
    <div className="hover-zoomin">
      <a>
        {/* <Image src={NewsCardImage} alt="" layout="responsive" /> */}
        <img src={`${imgSrc}`} alt="image-alt-text" />
      </a>
      <h1>{translate?.title}</h1>

      {/* <h1>“UFE NETWORKING 2021” амжилттай зохион байгуулагдаж өнгөрлөө</h1> */}
    </div>
  );
};
