import AvatarCard from "components/common/avatar-card";
import MoreButton from "components/common/more-button";
import News from "components/common/news";
import { AppNewsBig } from "components/common/news/news";
import { AppNewsSmall } from "components/common/news/news-small";
import { NewsStyle } from "components/common/news/style";
import { WidgetAPI } from "lib/api/widget";
import React, { useEffect, useState } from "react";

const Widget = ({}: any) => {
  const [news, setNews]: any = useState([]);

  const loadEmployees = async () => {
    const emps = await WidgetAPI.all();
    setNews(emps);

    console.log("pororoorororo", emps);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <NewsStyle>
        <section id="news_list" className="news_list section">
          <div className="header-container container">
            <div className="row">
              <div className="col-lg">
                <h1>UFE мэдээ</h1>
              </div>
              <div className="col-lg">
                <div className="more-button">
                  <MoreButton />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-8">
                <div>
                  <AppNewsBig newsData={news[0]} />
                </div>
              </div>

              <div className={"col-lg-4"}>
                {news.map((news: any, index: number) => {
                  return (
                    <>
                      {index > 0 && index < 4 && (
                        <div key={news.id}>
                          <AppNewsSmall newsData={news} />
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </NewsStyle>
    </>
  );
};
export default Widget;
