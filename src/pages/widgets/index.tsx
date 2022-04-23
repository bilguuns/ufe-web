import AvatarCard from "components/common/avatar-card";
import MoreButton from "components/common/more-button";
import MoreButton2 from "components/common/more-button2";
import News from "components/common/news";
import { AppNewsBig } from "components/common/news/news";
import { AppNewsSmall } from "components/common/news/news-small";
import { NewsStyle } from "components/common/news/style";
import { WidgetAPI } from "lib/api/widget";
import React, { useEffect, useState } from "react";

const Widgets = ({}: any) => {
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
          <div className="container mt-5">
            <div className="row gx-5">
              <div className={"col-lg-8"}>
                <h1>Мэдээ</h1>
                {news.map((news: any, index: number) => {
                  return (
                    <>
                      <div key={news.id}>
                        <AppNewsSmall newsData={news} />
                      </div>
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
export default Widgets;
