import React from "react";
import DatePicker from "./datePicker/DatePicker";
import style from "./Turner.module.css";
import TurnPicker from "./turnPicker/TurnPicker";
import Summary from "./summary/Summary";
import foto from "../../assets/images/soccer.jpg";
import Image from "next/image";

const Turner = () => {
  return (
    <div className={style.tunerContainer}>
      <Image src={foto} alt="as" />
      <div className={style.formContainer}>
        <div className={style.turnerLeft}>
          <DatePicker />
          <TurnPicker />
        </div>
        <div className={style.turnerRight}>
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Turner;
