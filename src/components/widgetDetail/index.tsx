import React, { useEffect, useState } from "react";

import DateCard from "../common/date-card";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Slider from "components/common/slider";
import { NewsStyle } from "components/common/news/style";

export const WidgetDetailId = (props: any) => {
  const { pageData } = props;
  const imgBase = process.env.NEXT_PUBLIC_FILE_HOST;
  const translate: any = pageData.Posts[0].translates[0];

  const imgSrc =
    pageData?.Posts[0].image[0] && pageData.Posts[0].image[0].filePath
      ? imgBase + pageData.Posts[0].image[0].filePath
      : null;

  return (
    <NewsStyle>
      <section id="news_list" className="news_list section">
        <div className="container mt-5">
          <div className="row gx-5">
            <div>
              <a>
                <img
                  style={{
                    display: "block",
                    objectFit: "cover",
                    borderRadius: "16px",
                    maxWidth: "100%",

                    objectPosition: "center center",
                  }}
                  src={`${imgSrc}`}
                  width="100%"
                  alt="image-alt-text"
                />
              </a>
              <h1 style={{ fontSize: "3vh" }}>{translate.title}</h1>
            </div>

            <DateCard newsDate={pageData?.Posts[0].timePublished.date} />
            <br />
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
        </div>
      </section>
    </NewsStyle>
  );
};
