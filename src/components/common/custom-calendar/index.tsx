import React from "react";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventCard from "../../assets/images/event_card.png";
import moment from "moment";

const CustomCalendar = () => {
  const [date, setDate]: any = useState(new Date());

  console.log(date, "datedatedatedatedate");

  return (
    <>
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
        locale="mn"
      />
    </>
  );
};
export default CustomCalendar;
