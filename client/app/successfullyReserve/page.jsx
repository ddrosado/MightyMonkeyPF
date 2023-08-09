import Image from "next/image";
import React from "react";
import style from './page.module.css'

const page = () => {
  return (
    <div className={style.successContainer}>
      <div>
        <Image />
      </div>
      <div className={style.separator}></div>
      <h2>
        Thank you for your<span className={style.acent}>RESERVATION!</span> We will be sending you an
        email shortly with all the details. We look forward to seeing you soon.
        Kind regards, the Mighty Monkey Club administration.
      </h2>
    </div>
  );
};

export default page;
