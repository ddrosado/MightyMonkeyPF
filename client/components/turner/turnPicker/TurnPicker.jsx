'use client'
import React, { useState } from 'react';
import style from './TurnPicker.module.css';

const TurnPicker = ({ onTurnSelected, selectedDate }) => {
  const turns = [];
  const currentDateTime = new Date();
  const currentDate = currentDateTime.toISOString().split('T')[0];

  const currentHour = currentDateTime.getHours();

  for (let hour = 8; hour <= 21; hour++) {
    // const turnDateTime = startOfHour(new Date(`${selectedDate}T${hour}:00:00`));

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

  return (
    <div className={style.turnsContainer} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <h2>Pick a turn</h2>
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
                      boxShadow: '-1px 1px 7px 0px rgba(0,0,0,0.92)',
                      WebkitBoxShadow: '-1px 1px 7px 0px rgba(0,0,0,0.92)',
                      MozBoxShadow: '-1px 1px 7px 0px rgba(0,0,0,0.92)',
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
    </div>
  );
};

export default TurnPicker;