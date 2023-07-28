'use client'
import React, { useEffect } from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import Carrusel from "../carrusel/Carrusel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";


const Detail = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSports());
  }, []); 

  const sports = useSelector(state => state.sports);

  return (
    <div className={style.detailContainer}>
      <div>
        <div className={style.containerImgCalendar}>
          <div>
            <h2 className={style.title}>title</h2>
          </div>
          {/* <p>{sportFind?.description}</p> */}
          <img
            className={style.imageSport}
            src={sportFind?.image}
            alt={sportFind?.name}
          />
        </div>
        <div className={style.calendarReservation}>
          <h2>Make your reservation</h2>
          <Calendar />
        </div>
      </div>
      <div className={style.midSlice}>
        <Carrusel />
      </div>
      <div className={style.botSlice}>
        <h1>REVIEWS</h1>
      </div>
    </div>
  );
};

export default Detail;
