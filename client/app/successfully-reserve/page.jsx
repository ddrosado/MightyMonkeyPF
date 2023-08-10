import Image from "next/image";
import React from "react";
import style from "./page.module.css";
import logo from "../../assets/images/monkeylog.png";
const page = () => {
  return (
    <div className={style.successContainer}>
      <div className={style.logoContainer}>
        <Image className={style.logo} src={logo} alt="#" />
      </div>
      <div className={style.separator}></div>
      <div className={style.textContainer}>
        <h2 className={style.text}>
          Thank you for your <span className={style.acent}>RESERVATION!</span> We
          will be sending you an email shortly with all the details. We look
          forward to seeing you soon. Kind regards, the Mighty Monkey Club
          administration.
        </h2>
      </div>
    </div>
  );
};

export default page;
