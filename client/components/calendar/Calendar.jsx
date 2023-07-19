"use client";
import React, { useState } from 'react';
import style from "./Calendar.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, index) => (
    <span className={style.emptyDay} key={`empty-${index}`} />
  ));

  const daysOfMonth = Array.from({ length: daysInMonth }, (_, index) => (
    <span className={style.calendarDay} key={index + 1}>
      {index + 1}
    </span>
  ));


  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  return (
    <div className={style.calendarContainer}>
      <h3 className={style.h3}>{monthNames[currentMonth]}</h3>
      <div className={style.calendarHeaderContainer}>
        <span className={style.containerDay}>Lu</span>
        <span className={style.containerDay}>Ma</span>
        <span className={style.containerDay}>Mi</span>
        <span className={style.containerDay}>Ju</span>
        <span className={style.containerDay}>Vi</span>
        <span className={style.containerDay}>Sá</span>
        <span className={style.containerDay}>Do</span>
      </div>
      <div className={style.calendarDaysContainer}>
        {emptyDays}
        {daysOfMonth}
      </div>
      <button className={style.button} onClick={handlePreviousMonth}>
        Mes anterior
      </button>
      <button className={style.button} onClick={handleNextMonth}>
        Mes siguiente
      </button>
      <button>Reservation</button>
    </div>
  );
};

export default Calendar;
