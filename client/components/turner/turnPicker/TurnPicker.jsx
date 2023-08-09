"use client";
import React, { useState, useEffect } from "react";
import style from "./TurnPicker.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterBookingsByHour } from "../../../redux/features/bookingsSlice";


const TurnPicker = ({ onTurnSelected, selectedDate, sportFind }) => {
  const dispatch = useDispatch();
  const reservationsByHour = [];
  const turns = [];
  let disabledTurns = [];
  const currentDateTime = new Date();
  const currentDate = currentDateTime.toISOString().split("T")[0];
  const currentHour = currentDateTime.getHours();
  const dateBookings = useSelector((state) => state.bookings.bookingsCopy);

  for (let hour = 8; hour <= 21; hour++) {
    if (selectedDate === currentDate) {
      if (hour <= currentHour) {
        continue;
      }
    }

    const formattedHour = `${hour.toString().padStart(2, "0")}:00`;
    turns.push(formattedHour);
  }



dateBookings.forEach((booking) => {
  const { hour } = booking;
  const existingIndex = reservationsByHour.findIndex((obj) => obj.hour === hour);

  if (existingIndex === -1) {
    reservationsByHour.push({ hour, turns:[booking] });
  } else {
    reservationsByHour[existingIndex].turns = [...reservationsByHour[existingIndex].turns, booking]
  }
});



  const [selectedTurnIndex, setSelectedTurnIndex] = useState(null);
  const [allBookings, setAllBookings] = useState([]);

  
  for (let i = 0; i < reservationsByHour.length; i++) {
    if (reservationsByHour[i].turns.length == sportFind?.court.length ) {
      disabledTurns.push(reservationsByHour[i].hour)     
    }
  }
  const availableTurns = turns.filter(turn => !disabledTurns.includes(turn));
  // console.log('todos: ' + turns)
  // console.log('disabled: ' + disabledTurns)
  // console.log('habilitado: ' + availableTurns)
  
  const handleTurnClick = (turnIndex) => {
    setSelectedTurnIndex(turnIndex);
    onTurnSelected(turnIndex);

  };
 
  // const noTurnsAvailable = turns.length === 0;

  // const filteredBookingsForSelectedDate = allBookings.filter(
  //   (booking) => booking.date === selectedDate
  // );

  // const availableCourtsForSelectedDate = 2;

  // const isTurnAvailable = (turn) => {

  //   const selectedTurnBookings = filteredBookingsForSelectedDate.filter(
  //     (booking) => booking.hour === turn
  //   );

  //   return selectedTurnBookings.length < availableCourtsForSelectedDate;
  // };

  useEffect(() => {
    dispatch(filterBookingsByHour(selectedTurnIndex))
  },[selectedTurnIndex])


  return (
    <div
      className={style.turnsContainer}
      style={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <h2>Pick a turn</h2>
      {!availableTurns ? (
        <p className={style.noTurns}>
          There are no shifts available for this date.
        </p>
      ) : (
        <div className={style.btnsContainer}>
          {availableTurns.map((turn, index) => {
             return (
              <button
                key={index}
                style={
                  turn === selectedTurnIndex
                    ? {
                        backgroundColor: "black",
                        color: "#FFDA61",
                        top: "2px",
                      }
                    : {}
                }
                onClick={() => handleTurnClick(turn)}
                disabled={!availableTurns} 
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
