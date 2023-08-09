"use client";

import React, { useState, useEffect } from "react";
import style from "./DatePicker.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterBookings } from "../../../redux/features/bookingsSlice";

const DatePicker = ({ selectedDate, onDateSelected, bookings, sportFind }) => {

  const currentDate = new Date().toISOString().split("T")[0];

  const dateBookings = useSelector(state => state.bookings.bookingsCopy)

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split("T")[0];

  const [dateValue, setDateValue] = useState(currentDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterBookings({sport: sportFind?.name, date:selectedDate, search:""}))
    setDateValue(selectedDate);
  }, [selectedDate]);
  
  const bookingsOnDate = dateBookings?.filter(
    (booking) => booking.date === selectedDate
  );
  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setDateValue(selectedDate);
    onDateSelected(selectedDate);
    console.log(bookingsOnDate);
  };
  
  return (
    <div className={style.dateContainer}>
      <h2>Pick a date</h2>
      <input
        type="date"
        value={dateValue}
        min={currentDate}
        max={maxDateFormatted}
        onChange={handleChange}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
};

export default DatePicker;
