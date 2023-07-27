"use client";
import React, { useEffect, useState } from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import Carrusel from "../carrusel/Carrusel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";

const Detail = ({ sportName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sport.sports.length) {
      dispatch(getSports());
    }
  }, []);

  const sport = useSelector((state) => state.sports);

  const sportFind = sport.sports?.find((e) => e.name == sportName);

  return (
    <div className={style.detailContainer}>
      <div className={style.topSlice}>
        <div className={style.imageAndTitle}>
          <div className={style.titleSport}>
            <h1>{sportFind?.name}</h1>
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
