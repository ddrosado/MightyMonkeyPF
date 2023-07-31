"use client";
import React, { useEffect, useState } from "react";
import style from "./Reservation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./datePicker/DatePicker";


const Reservation = () => {
  return (
    <div className={style.reservationContainer}>
      <DatePicker />    
      <button className={style.reserveBtn}>Reserve</button>
    </div>
  );
};
export default Reservation;
