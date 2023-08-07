"use client";
import React, { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../redux/actions/sportsActions";
import Turner from "../turner/Turner";
import { getBookings } from "../../redux/actions/bookingAction";
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher.js';
import Image from "next/image";
import monkeyTurn from '../../assets/images/monores.png'
import Image404 from '../../assets/images/monores404.png';

const Detail = ({ sportName }) => {
  
  const { data } = useSWR('/api/user', fetcher);

  const user = data;
  console.log(user)
  
  const dispatch = useDispatch();

  const sport = useSelector((state) => state.sports);
  const booking = useSelector((state) => state.bookings);

  useEffect(() => {
    if (!sport.length) {
      dispatch(getSports());
      dispatch(getBookings());
    }
  }, []);

  const sportFind = sport.sports?.find((e) => e.name == sportName);

  const noTurnsAvailable = !sportFind || (sportFind?.court?.length === 0);

  return (
    <div className={style.detailContainer}>
      {noTurnsAvailable ? (
        <Image className={style.logo} src={Image404} alt="No hay turnos disponibles" />
      ) : (
        <Image className={style.logo} src={monkeyTurn} alt="#" />
      )}
      <Turner sportFind={sportFind} user={user} />
    </div>
  );
};

export default Detail;




