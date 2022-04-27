import styled from "styled-components";

const EventStyle = styled.div`
  section {
    padding: 90px 0;
    overflow: hidden;
  }

  .section-bg {
    background-color: #f9f9fa;
  }

  .section-title {
    text-align: center;
    padding: 30px 0;
    position: relative;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 0;
    color: #5f687b;
    position: relative;
    z-index: 2;
  }

  .section-title span {
    position: absolute;
    top: 30px;
    color: #f0f1f3;
    left: 0;
    right: 0;
    z-index: 1;
    font-weight: 700;
    font-size: 52px;
    text-transform: uppercase;
    line-height: 0;
  }

  .section-title p {
    margin-bottom: 0;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 575px) {
    .section-title h2 {
      font-size: 28px;
      margin-bottom: 15px;
    }

    .section-title span {
      font-size: 38px;
    }
  }

  .button {
    background-color: #345bb8;
    width: 100%;
    color: white;
    padding: 15px 32px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
  }

  .card_list .card {
    margin-top: 30px;
    border-radius: 8px;
    margin-bottom: 20px;
    background: #f9f9fa;
  }

  .card_list .card p {
    padding-top: 10px;
    font-size: 14px;
    font-family: "Montserrat";
  }

  .card_list .card_content {
    padding: 20px;
  }

  .card_list .img {
    border-radius: 8px;
  }
  .react-calendar button {
    border: 1;
  }
  .react-calendar {
    border: none;
  }

  .react-calendar__navigation {
    background-color: #345bb8;
  }
  .react-calendar__navigation button {
    color: white;
  }
  .react-calendar__navigation button:disabled {
    background-color: #345bb8;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #345bb8;
  }
  .react-calendar__tile--active {
    background: #345bb8;
  }
  .react-calendar__tile--active:enabled:focus {
    background: #345bb8;
  }
  .react-calendar__month-view__weekdays__weekday {
    border: "1px solid";
  }
`;

export default EventStyle;
