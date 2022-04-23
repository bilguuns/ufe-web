import React, { useEffect, useState } from "react";

import DateCard from "../common/date-card";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Slider from "components/common/slider";

export const WidgetDetailId = (props: any) => {
  const { pageData } = props;
  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any = pageData.Posts[0].translates[0];

  const imgSrc =
    pageData?.Posts[0].image[0] && pageData.Posts[0].image[0].filePath
      ? imgBase + pageData.Posts[0].image[0].filePath
      : null;

  return (
    <div className="container my-5">
      <div>
        <div className="hover-zoomin">
          <a>
            <img
              src={`${imgSrc}`}
              width="100%"
              height="500px"
              alt="image-alt-text"
            />
          </a>
        </div>
        <h1>{translate.title}</h1>
      </div>

      <DateCard newsDate={pageData?.Posts[0].timePublished.date} />

      {pageData.Posts[0].modes.map((postMode: any, index: number) => {
        return (
          <>
            <div className={"mb-4"}>
              {postMode.modeType == "G" && (
                <>
                  <Slider postMode={postMode} />
                </>
              )}
              {postMode.modeType == "A" && (
                <>{ReactHtmlParser(postMode.translates[0].htmlContent)}</>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};
