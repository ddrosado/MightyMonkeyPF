"use client";
import React, { useEffect } from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";
import EmblaCarousel from "../carousel/Carousel";
import Turner from "../turner/Turner";

const Detail = ({ sportName }) => {
  const dispatch = useDispatch();

  const sport = useSelector((state) => state.sports);
  useEffect(() => {
    if (!sport.length) {
      dispatch(getSports());
    }
  }, []);

  const OPTIONS = { align: "start", containScroll: "trimSnaps" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


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
          <h2 className={style.making}>Make your reservation</h2>
          <Calendar />
        </div>
      </div>
      <Turner />
      {/* <div className={style.midSlice}>
      <div className={style.titleSport}>
            <h1>Gallery</h1>
          </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className={style.botSlice}>
        <h1>REVIEWS</h1>
      </div> */}
    </div>
  );
};

export default Detail;