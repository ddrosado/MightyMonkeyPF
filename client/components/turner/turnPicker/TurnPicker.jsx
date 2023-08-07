'use client'
import React, { useState } from 'react';
import style from './TurnPicker.module.css';

const TurnPicker = ({ onTurnSelected, selectedDate }) => {
  const turns = [];
  const currentDateTime = new Date();
  const currentDate = currentDateTime.toISOString().split('T')[0];

  const currentHour = currentDateTime.getHours();

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

  const handleTurnClick = (turnIndex) => {
    setSelectedTurnIndex(turnIndex);
    onTurnSelected(turns[turnIndex]);
  };

  // Verificar si no hay turnos disponibles
  const noTurnsAvailable = turns.length === 0;

  return (
    <div className={style.turnsContainer} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <h2>Pick a turn</h2>
      {noTurnsAvailable ? (
        <p className={style.noTurns}>There are no shifts available for this date.</p>
      ) : (
        <div className={style.btnsContainer}>
          {turns.map((turn, index) => {
            return (
              <button
                key={index}
                style={
                  index === selectedTurnIndex
                    ? {
                        backgroundColor: '#46d250',
                        color: '#FFDA61',
                        boxShadow:"0px 0px 9px -4px rgba(0, 0, 0, 1)",
                        top: '2px',
                      }
                    : {}
                }
                onClick={() => handleTurnClick(index)}
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