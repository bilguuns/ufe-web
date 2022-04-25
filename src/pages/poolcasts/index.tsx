import { GetServerSideProps } from "next";
import { createContext, useState } from "react";

import AppCard from "components/common/card";
import { IntroSWR } from "lib/api/intro";
import { VideoStyle } from "components/common/card/style";
import { poolcastsData } from "../../../public/poolcastsData";
import Poolcast from "components/poolcasts";
import PoolcastCard from "components/common/poolcast-card";

const Poolcasts = () => {
  return (
    <VideoStyle>
      <section id="video_list" className="video_list section-bg">
        <div className="container">
          <div className="col-md-12">
            <div className={"row"}>
              {poolcastsData?.map((item: any, index: any) => {
                return (
                  <>
                    <div key={item.id} className="col-md-4 mb-3">
                      <PoolcastCard item={item} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </VideoStyle>
  );
};
export default Poolcasts;
