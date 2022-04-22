import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const DateCard = (props: any) => {
  const { newsDate } = props;

  return (
    <div>
      <img
        style={{ marginTop: "-4px", marginRight: "4px" }}
        height={"20px"}
        width={"20px"}
        src={`/icon/datetime.svg`}
        alt="image-alt-text"
      />

      <Moment
        style={{ color: "#555770", paddingTop: "30px" }}
        format="YYYY/MM/DD"
      >
        {newsDate}
      </Moment>
    </div>
  );
};

export default DateCard;
