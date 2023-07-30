"use client";
import React, { useEffect, useState } from "react";
import style from "./Calendar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Calendar = () => {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30); // Fecha límite: 30 días después del día actual

  const getFormattedDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}-${month}-${day}`; // Modificamos el formato para que coincida con el atributo 'value' del input type='date'
  };

  const formatDate = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${day}, ${month} ${dayOfMonth}`;
  };

  const [turns, setTurns] = useState([]);
  const [selectedTurns, setSelectedTurns] = useState(new Set());
  const [selectedDate, setSelectedDate] = useState(getFormattedDate(today)); // Inicializamos con el valor del día actual
  const [showMoreTurns, setShowMoreTurns] = useState(false); // Estado para controlar si se muestran más botones de turnos

  const getTurnsAvailable = () => {
    const startHour = 9;
    const endHour = 22;
    const allTurns = Array.from(
      { length: endHour - startHour + 1 },
      (_, index) => {
        const hour = startHour + index;
        return `${hour}:00hs`;
      }
    );
    setTurns(allTurns);
  };

  const handleTurnClick = (turn) => {
    if (selectedTurns.has(turn)) {
      selectedTurns.delete(turn);
    } else {
      selectedTurns.clear();
      selectedTurns.add(turn);
    }

    setSelectedTurns(new Set(selectedTurns));
  };

  useEffect(() => {
    getTurnsAvailable();
  }, []);

  const handleDateSelect = (event) => {
    const selectedDate = event.target.value; // Obtenemos la fecha seleccionada directamente del evento
    setSelectedDate(selectedDate);
    setSelectedTurns(new Set());
  };

  const handleShowMoreTurns = () => {
    setShowMoreTurns((prevShowMoreTurns) => !prevShowMoreTurns);
  };

  return (
    <div className={style.calendarContainer}>
      <h2>Pick a date </h2>
      <input
        className={style.inputDate}
        type="date" // Utilizamos el tipo 'date' para el input
        id="datepickerId"
        value={selectedDate}
        onChange={handleDateSelect}
        min={getFormattedDate(today)}
        max={getFormattedDate(maxDate)}
      />
      <h2>Pick a turn </h2>
      <div className={style.turnsContainer}>
        {turns.slice(0, showMoreTurns ? turns.length : 8).map((turn) => (
          <button
            className={`${style.turnBtn} ${
              selectedTurns.has(turn) ? style.selectedTurn : style.availableTurn
            }`}
            key={turn}
            onClick={() => handleTurnClick(turn)}
            disabled={selectedTurns.size === 1 && selectedTurns.has(turn)}
          >
            {selectedTurns.has(turn) ? turn : turn}
          </button>
        ))}
      </div>
      {turns.length > 8 && (
        <button className={style.showMoreBtn} onClick={handleShowMoreTurns}>
          {showMoreTurns ? "Show less" : "Show more" }
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      )}
      <div className={style.reserveContainer}>
        <h2>Your reserve</h2>
        <p className={style.yourReserve}>
          {formatDate(new Date(selectedDate.replace(/-/g, "/")))}
        </p>
        <p>at {Array.from(selectedTurns)[0]}</p>
      </div>
      <button className={style.reserveBtn}>Reserve</button>
    </div>
  );
};

export default Calendar;
