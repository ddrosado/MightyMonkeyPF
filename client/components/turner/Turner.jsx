import React from "react";
import DatePicker from "./datePicker/DatePicker";
import style from "./Turner.module.css";
import TurnPicker from "./turnPicker/TurnPicker";
import Summary from "./summary/Summary";
import Image from "next/image";

const Turner = ({sportFind}) => {
  console.log(sportFind)
  return (
    <div className={style.tunerContainer}>
      {/* <Image className={style.imgSport} src={sportFind?.image} alt="as" /> */}
      <div className={style.formContainer}>
        <div className={style.turnerLeft}>
          <DatePicker />
          <TurnPicker />
        </div>
        <div className={style.turnerRight}>
          <Summary sportFind={sportFind} />
        </div>
      </div>
    </div>
  );
};

export default Turner;
