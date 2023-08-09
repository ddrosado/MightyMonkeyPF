"use client";

import React, { useState, useEffect } from "react";
import style from "./DatePicker.module.css";

const DatePicker = ({ selectedDate, onDateSelected, bookings }) => {
  const reservationsByHour = {};
  const currentDate = new Date().toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split("T")[0];

  const [dateValue, setDateValue] = useState(currentDate);

  useEffect(() => {
    setDateValue(selectedDate);
  }, [selectedDate]);
  let bookingsArr = bookings.bookings;
  
  const bookingsOnDate = bookingsArr?.filter(
    (booking) => booking.date === selectedDate
  );
  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setDateValue(selectedDate);
    onDateSelected(selectedDate);
    console.log(bookingsOnDate);
    console.log(reservationsByHour)
  };

  
  bookingsOnDate.forEach((booking) => {
    const { hour } = booking;
    if (!reservationsByHour[hour]) {
      reservationsByHour[hour] = [];
    }
    reservationsByHour[hour].push(booking);
  });

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
