'use client'
import React from 'react';
import style from './Summary.module.css';

const Summary = ({ sportFind, selectedDate, selectedTurn, selectedCourt, user }) => {
  return (
    <div className={style.summaryContainer}>
      <h2>Your reserve</h2>
      <div className={style.infoContainer}>
        <h3>Sport: {sportFind?.name}</h3>
        <h3>Name: </h3>
        <h3>Date: {selectedDate}</h3>
        {/* Mostramos el turno seleccionado */}
        <h3>Turn: {selectedTurn} Hs.</h3>
        <h3>Court: {selectedCourt}</h3>
      </div>
      <button className={style.reserveBtn}>Reserve</button>
    </div>
  );
};

export default Summary;