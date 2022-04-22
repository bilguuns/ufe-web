import MoreButton from "../common/more-button";
import { VideoStyle } from "./style";
import { poolcastsData } from "../../../public/poolcastsData";

import PoolcastCard from "components/common/poolcast-card";
import Item from "antd/lib/list/Item";

const Poolcast = ({}: any) => {
  return (
    <VideoStyle>
      <section id="video_list" className="video_list section-bg">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1>UFE Poolcast</h1>
            </div>

            <div className="col-lg">
              <div className="more-button">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <div className={"row"}>
              {poolcastsData?.map((item: any, index: any) => {
                return (
                  <>
                    {index < 3 && (
                      <div key={item.id} className=" col-md-4">
                        <PoolcastCard item={item} />
                      </div>
                    )}
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
export default Poolcast;
