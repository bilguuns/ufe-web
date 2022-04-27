import React from "react";
import EventStyle from "./style";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventCard from "../../assets/images/event_card.png";
import CustomCalendar from "components/common/custom-calendar";
import HtmlComponent from "components/common/html-component";
import Moment from "react-moment";

function AppEvents() {
  return (
    <EventStyle>
      <section id="card_list" className="card_list section-bg">
        <div className="container">
          <h1>ХУАНЛИ</h1>

          <div className="row">
            <div className="col-4">
              <div className="calendar-container">
                <CustomCalendar />
              </div>
            </div>

            {/* {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span>
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>
          {date.toDateString()}
        </p>
      )} */}
            <div className="col-8 ">
              <span className="button">Энэ сарын хуанли</span>
              <div className="card">
                <div className="img">
                  <Image src={EventCard} alt="" />
                </div>
                <div className="card_content">
                  <p className="fw-bold"> “Ганц Эрдэм” шинжилгээний хурал</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pharetra dapibus ac faucibus sit consectetur massa augue
                    malesuada. Malesuada felis habitasse nunc mattis non
                    pulvinar morbi quis. Ac sed mauris, nunc euismod interdum
                    laoreet porttitor integer. Ut ornare nibh arcu netus aenean
                    faucibus. Est semper bibendum nullam tristique bibendum
                    lectus. Facilisis at in ut commodo. Tincidunt arcu sagittis
                    fermentum id. Lectus proin facilisis rhoncus volutpat mattis
                    semper commodo dolor tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EventStyle>
  );
}
export default AppEvents;
