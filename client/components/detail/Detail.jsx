"use client";
import React, { useEffect } from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";
import EmblaCarousel from "../carousel/Carousel";
import Turner from "../turner/Turner";
import { getBookings } from "../../redux/actions/bookingAction";
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher.js';

const Detail = ({ sportName }) => {
  
  const { data } = useSWR('/api/user', fetcher);

  // objeto con propiedades de la sesion actual del usuario
  console.log(data)

  
  const dispatch = useDispatch();

  const sport = useSelector((state) => state.sports);
  const booking = useSelector((state) => state.bookings);

  useEffect(() => {
    if (!sport.length) {
      dispatch(getSports());
      dispatch(getBookings());
    }
  }, []);

  const OPTIONS = { align: "start", containScroll: "trimSnaps" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


  const sportFind = sport.sports?.find((e) => e.name == sportName);

  return (
    <div className={style.detailContainer}>
      <Turner sportFind={sportFind} />
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