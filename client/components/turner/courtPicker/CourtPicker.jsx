'use client'
import React from 'react';
import style from './CourtPicker.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CourtPicker = ({ courts, onCourtSelected }) => {
  const handleCourtChange = (event) => {
    const selectedCourt = event.target.value;
    onCourtSelected(selectedCourt);
  };

const bookings = useSelector(state => state.bookings.bookingsCopy)

console.log(courts)

  return (
    <div className={style.courtsContainer}>
      <h2>Pick a court</h2>
      <select onChange={handleCourtChange} style={{borderRadius:'10px'}}>
        <option  value="">Select a court</option>
        {courts?.map((court) => (
          <option style={{borderRadius:'10px'}} key={court.id} value={court.name}>
            {court.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourtPicker;





