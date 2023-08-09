'use client'
import React, { useState, useEffect } from 'react';
import style from './TurnPicker.module.css';

const TurnPicker = ({ onTurnSelected, selectedDate, bookings }) => {
  const turns = [];
  const currentDateTime = new Date();
  const currentDate = currentDateTime.toISOString().split('T')[0];
  const currentHour = currentDateTime.getHours();
  let bookingsArr = bookings.bookings;

console.log(bookingsArr)

  for (let hour = 8; hour <= 21; hour++) {
    if (selectedDate === currentDate) {
      if (hour <= currentHour) {
        continue;
      }
    }

    const formattedHour = `${hour.toString().padStart(2, '0')}:00`;
    turns.push(formattedHour);
  }

  const [selectedTurnIndex, setSelectedTurnIndex] = useState(null);
  const [allBookings, setAllBookings] = useState([]);

  // useEffect(() => {
  //   if (bookings && Array.isArray(bookings.bookings)) {

  //     const filteredBookings = bookings.bookings.map((booking) => ({
  //       date: booking.date,
  //       hour: booking.hour,
  //       sport: booking.court.sport.name,
  //       courtId: booking.court.id,
  //     }));
  //     console.log(filteredBookings.date);
  //     setAllBookings(filteredBookings);
  //   } else {
  //     setAllBookings([]);
  //   }
  // }, [bookings]);

  const handleTurnClick = (turnIndex) => {
    setSelectedTurnIndex(turnIndex);
    onTurnSelected(turns[turnIndex]);
  };

  // Verificar si no hay turnos disponibles
  const noTurnsAvailable = turns.length === 0;

  // Filtrar las reservas existentes por fecha y hora
  const filteredBookingsForSelectedDate = allBookings.filter(
    (booking) => booking.date === selectedDate
  );

  const availableCourtsForSelectedDate = 2; // Número de canchas disponibles para esa fecha y hora (puedes cambiarlo según tus necesidades)

  const isTurnAvailable = (turn) => {
    // Verificar cuántas canchas están disponibles para esa fecha y hora específica
    const selectedTurnBookings = filteredBookingsForSelectedDate.filter(
      (booking) => booking.hour === turn
    );

    return selectedTurnBookings.length < availableCourtsForSelectedDate;
  };

  return (
    <div className={style.turnsContainer} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <h2>Pick a turn</h2>
      {noTurnsAvailable ? (
        <p className={style.noTurns}>There are no shifts available for this date.</p>
      ) : (
        <div className={style.btnsContainer}>
          {turns.map((turn, index) => {
            // Mostrar los turnos solo si hay canchas disponibles para esa fecha y hora
            const isAvailable = isTurnAvailable(turn);

            return (
              <button
                key={index}
                style={
                  index === selectedTurnIndex
                    ? {
                        backgroundColor: 'black',
                        color: '#FFDA61',
                        top: '2px',
                      }
                    : {}
                }
                onClick={() => handleTurnClick(index)}
                disabled={!isAvailable} // Deshabilitar el botón si no hay canchas disponibles
              >
                {turn}hs
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TurnPicker;