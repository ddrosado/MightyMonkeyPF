'use client'
import React, { useState } from 'react';
import style from './Calendar.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleDateTimeSelect = (day, hour, minute) => {
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    setSelectedDateTime(newDate);
    setSelectedHour(hour);
    setSelectedMinute(minute);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, index) => (
    <span className={style.emptyDay} key={`empty-${index}`} />
  ));

  const daysOfMonth = Array.from({ length: daysInMonth }, (_, index) => (
    <div
      className={`${style.calendarDay} ${
        selectedDateTime && selectedDateTime.getDate() === index + 1 ? style.selectedDay : ''
      }`}
      key={index + 1}
    >
      <span onClick={() => handleDateTimeSelect(index + 1, selectedHour, selectedMinute)}>
        {index + 1}
      </span>
    </div>
  ));

  const hours = [];
  for (let i = 12; i < 22; i++) {
    hours.push(
      <option key={i} value={i}>
        {i < 10 ? `0${i}` : i}
      </option>
    );
  }

  const minutes = [];
  for (let i = 0; i < 60; i += 15) {
    minutes.push(
      <option key={i} value={i}>
        {i < 10 ? `0${i}` : i}
      </option>
    );
  }

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleReservationSubmit = () => {
    if (selectedDateTime) {
      alert(`successful reservation for ${selectedDateTime.toLocaleString()}`);
      setSelectedDateTime(null);
      setSelectedHour(0);
      setSelectedMinute(0);
    }
  };

  return (
    <div className={style.calendarContainer}>
      <div className={style.mesBtnContainer}>
        <h3 className={style.h3}>{monthNames[currentMonth]}</h3>
        <button className={style.button} onClick={handlePreviousMonth}>
          &lt;
        </button>
        <button className={style.button} onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
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
      <div className={style.dateTimePicker}>
      <hr />
        {selectedDateTime ? (
          <p>
            {selectedDateTime.toLocaleDateString()} - {selectedDateTime.toLocaleTimeString()}
          </p>
        ) : (
          <p className={style.parrafoSelect}>Select a date and time</p>
        )}
        {selectedDateTime && (
          <div className={style.hour}>
            <label  htmlFor="hour">Hour:</label>
            <select className={style.label}
              id="hour"
              onChange={(e) => handleDateTimeSelect(selectedDateTime.getDate(), parseInt(e.target.value), selectedMinute)}
              value={selectedHour}
            >
              {hours}
            </select>
            <label  htmlFor="minute">Minute:</label>
            <select className={style.label}
              id="minute"
              onChange={(e) => handleDateTimeSelect(selectedDateTime.getDate(), selectedHour, parseInt(e.target.value))}
              value={selectedMinute}
            >
              {minutes}
            </select>
          </div>
        )}
      </div>
      <button className={style.reserveButton} onClick={handleReservationSubmit}>
        Reservation
      </button>
    </div>
  );
};

export default Calendar;




