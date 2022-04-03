import { GetServerSideProps } from "next";
import { createContext, useState } from "react";

import AppCard from "components/common/card";
import { IntroSWR } from "lib/api/intro";
import { CardStyle } from "components/common/card/style";
const Intro = ({ image }: any) => {
  const { data: introData, error: introDataError } = IntroSWR();

  console.log(introData);
  console.log(image);

  return (
    <CardStyle>
      <section id="card_list" className="card_list section-bg">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE хуанли 2022</h1>
            </div>
            <div className="col-lg"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {introData?.map(
              (item: any, index: any) =>
                item.introType == "Calendar" &&
                item.translates.map((index: any) => (
                  <AppCard
                    key={index.id}
                    shortName={index.shortName}
                    name={index.name}
                    // imagePath={index.filePath}
                  ></AppCard>
                ))
            )}
          </div>
        </div>
      </section>
    </CardStyle>
  );
};
export default Intro;
