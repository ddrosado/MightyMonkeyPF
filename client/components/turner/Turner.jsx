'use client'
import React, { useState, useEffect } from 'react';
import DatePicker from './datePicker/DatePicker';
import style from './Turner.module.css';
import TurnPicker from './turnPicker/TurnPicker';
import Summary from './summary/Summary';
import Image from 'next/image';
import CourtPicker from './courtPicker/CourtPicker';

const Turner = ({ sportFind }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTurn, setSelectedTurn] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');

  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  const handleTurnSelected = (turn) => {
    setSelectedTurn(turn);
  };

  const handleCourtSelected = (court) => {
    setSelectedCourt(court);
  };

  // Llamar manualmente a handleDateSelected con la fecha actual después de inicializar el componente DatePicker
useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    handleDateSelected(currentDate);
  }, []);

  return (
    <div className={style.tunerContainer}>
      <div className={style.formContainer}>
        <div className={style.turnerLeft}>
          <DatePicker onDateSelected={handleDateSelected} selectedDate={selectedDate} />
          {/* Pasamos la función "handleTurnSelected" al componente TurnPicker */}
          <TurnPicker onTurnSelected={handleTurnSelected} />
          {/* Pasamos las canchas del deporte al componente CourtPicker */}
          <CourtPicker courts={sportFind?.court} onCourtSelected={handleCourtSelected} />
        </div>
        <div className={style.turnerRight}>
          <Summary sportFind={sportFind} selectedCourt={selectedCourt} selectedDate={selectedDate} selectedTurn={selectedTurn} />
        </div>
      </div>
    </div>
  );
};

export default Turner;