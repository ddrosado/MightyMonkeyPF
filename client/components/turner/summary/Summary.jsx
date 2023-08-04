'use client'
import React from 'react';
import style from './Summary.module.css';

const Summary = ({ sportFind, selectedDate, selectedTurn, selectedCourt, user }) => {

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const timeZoneOffset = dateObject.getTimezoneOffset();
    dateObject.setMinutes(dateObject.getMinutes() + timeZoneOffset);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return dateObject.toLocaleDateString('es-ES', options);
  };
  return (
    <div className={style.summaryContainer}>
      <h2>Your reserve</h2>
      <div className={style.infoContainer}>
        <h3>Sport: {sportFind?.name}</h3>
        <h3>Date: {formatDate(selectedDate)}</h3>
        <h3>Hour: {selectedTurn} Hs.</h3>
        <h3>Court: {selectedCourt}</h3>
      </div>
      <button className={style.reserveBtn}>Reserve</button>
    </div>
  );
};

export default Summary;