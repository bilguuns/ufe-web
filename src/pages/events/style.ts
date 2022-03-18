import styled from "styled-components";

export const EventStyle = styled.div`

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

.button{
  background-color: #345BB8; 
  width:100%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;

}

.react-calendar { 
 width: 400px;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 8px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;

}
.react-calendar__navigation button {
 color: #345BB8;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
/* .react-calendar__month-view__days__day--weekend {
 color: #d10000;
} */
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #345BB8;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #345BB8;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #345BB8;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #345BB8;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #345BB8;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 background: #f8f8fa;
 color: #345BB8;
 border-radius: 0;
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background:#345BB8;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 background: #345BB8;
 color: white;
}

.card_list .card {
  margin-top:30px;
  border-radius:8px;
  margin-bottom: 20px;
  background: #F2F2F5;
}

.card_list .card p {
  padding-top: 10px;
  font-size: 14px;
  font-style: Montserrat;
}
.card_list .card_content{
    padding:20px;
}
.card_list .img{

  border-radius:8px;
}

`;
