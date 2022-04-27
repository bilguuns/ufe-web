import MoreButton from "../common/more-button";
import EventStyle from "./style";
import { poolcastsData } from "../../../public/poolcastsData";

import AppCard from "components/common/event-card";
import EventCard from "components/common/event-card";

const EventList = ({}: any) => {
  return (
    <EventStyle>
      <section id="card_list" className="card_list section-bg">
        <div className="header-container container">
          <div className="row">
            <div className="col-lg">
              <h1 style={{ fontSize: "40px", lineHeight: "54px" }}>ХУАНЛИ </h1>
            </div>

            <div className="col-lg">
              <div className="more-button">
                <MoreButton uri={`events`} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <div className={"row"}>
              {/* {poolcastsData?.map((item: any, index: any) => {
                return (
                  <>
                    {index < 12 && (
                      <div key={item.id} className="col-md-4">
                        <AppCard item={item} />
                      </div>
                    )}
                  </>
                );
              })} */}

              <div className="col-md-4">
                <EventCard />
              </div>
              <div className="col-md-4">
                <EventCard />
              </div>
              <div className="col-md-4">
                <EventCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </EventStyle>
  );
};
export default EventList;
