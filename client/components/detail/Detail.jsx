import React from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import Carrusel from "../carrusel/Carrusel";

const Detail = () => {
  return (
    <div className={style.detailContainer}>
      <h2 className={style.title}>Alquiler</h2>
      <div className={style.containerImgCalendar}>
        <div>
          <div className={style.imagen}>image</div>
        </div>
        <div>
          <p className={style.p}>make your reservation</p>
          <Calendar />
        </div>
      </div>

      <div className={style.carruselContainer}>
        <h2 className={style.title}>Gallery</h2>
        <div>
          <Carrusel />
        </div>
      </div>

      <hr />
      <h2 className={style.title}>Review</h2>
    </div>
  );
};

export default Detail;
