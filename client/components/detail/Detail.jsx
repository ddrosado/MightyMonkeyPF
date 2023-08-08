"use client";
import React, { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";
import Turner from "../turner/Turner";
import { getBookings } from "../../redux/actions/bookingAction";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher.js";
import Image from "next/image";
import monkeyRes from '../../assets/images/monores.png'

const Detail = ({ sportName }) => {
  const { data } = useSWR("/api/user", fetcher);
  const user = data;
  const dispatch = useDispatch();
  const sport = useSelector((state) => state.sports);
  const bookings = useSelector((state) => state.bookings);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    if (!sport.length) {
      dispatch(getSports());
      dispatch(getBookings());
    }

    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 580);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sportFind = sport.sports?.find((e) => e.name == sportName);
  // const noTurnsAvailable = !sportFind || sportFind?.court?.length === 0;

  return (
    <div className={style.detailContainer}>
      <Image className={style.logo} src={monkeyRes} alt="#" priority={true} />
      <Turner sportFind={sportFind} user={user} bookings={bookings} />
    </div>
  );
};

export default Detail;
