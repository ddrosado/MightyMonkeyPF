'use client'

import React, { useState } from 'react';
import style from './TurnPicker.module.css';

const TurnPicker = ({ onTurnSelected }) => {
  const turns = [];
  for (let hour = 8; hour <= 21; hour++) {
    turns.push(`${hour}:00`);
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
        {turns.map((turn, index) => (
          <button
            key={index}
            style={index === selectedTurnIndex ? { backgroundColor: '#46d250', color: '#FFDA61' } : {}}
            onClick={() => handleTurnClick(index)}
          >
            {turn}hs
          </button>
        ))}
      </div>
    </div>
  );
};

export default TurnPicker;