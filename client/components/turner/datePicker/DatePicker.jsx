'use client'

import React, { useState, useEffect } from 'react';
import style from './DatePicker.module.css';

const DatePicker = ({ selectedDate, onDateSelected }) => {

  const currentDate = new Date().toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateFormatted = maxDate.toISOString().split('T')[0];

  const [dateValue, setDateValue] = useState(currentDate);

  useEffect(() => {
    setDateValue(selectedDate);
  }, [selectedDate]);

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setDateValue(selectedDate);
    onDateSelected(selectedDate);
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
        style={{borderRadius:'10px'}}
      />

    </div>
  );
};

export default DatePicker;