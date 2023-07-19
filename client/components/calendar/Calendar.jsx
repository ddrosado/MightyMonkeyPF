import React from "react";
import style from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={style.calendarContainer}>
      <h3 className={style.h3}>Jun</h3>
      <div className={style.calendarHeaderContainer}>
        <span className={style.containerDay}>Mo</span>
        <span className={style.containerDay}>Tu</span>
        <span className={style.containerDay}>We</span>
        <span className={style.containerDay}>Th</span>
        <span className={style.containerDay}>Fr</span>
        <span className={style.containerDay}>Sa</span>
        <span className={style.containerDay}>Su</span>
      </div>
      <div className={style.calendarDaysContainer}>
        {Array.from({ length: 31 }, (_, index) => (
          <span className="calendar-day" key={index + 1}>
            {index + 1}
          </span>
        ))}
      </div>
      <button className={style.button}>Reserva</button>
    </div>
  );
};

export default Calendar;
