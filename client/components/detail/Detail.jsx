import React from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import Carrusel from "../carrusel/Carrusel.jsx";
import Footer from "../footer/Footer";

const Detail = () => {
  return (
    <div className={style.detailContainer}>
      <div>
        <div className={style.containerImgCalendar}>
          <div>
            <h2 className={style.title}>Alquiler</h2>
          </div>
          <div>
            <div className={style.imagen}>image</div>
          </div>
          <div>
            <p className={style.p}>make your reservation</p>
            <Calendar />
          </div>
        </div>
      </div>
      <div className={style.carruselContainer}>
        <h2 className={style.h2}>Gallery</h2>
        <div>
          <Carrusel />
        </div>
      </div>

      <div className={style.reseñasContainer}>
        <div>

       {/*  <h2 className={style.h2Review}>Review</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
