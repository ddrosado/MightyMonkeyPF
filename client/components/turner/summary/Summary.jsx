'use client'
import React from 'react';
import style from './Summary.module.css';
import { useDispatch } from 'react-redux';
import { postBooking } from '../../../redux/actions/bookingAction';
import Link from 'next/link';

const Summary = ({ sportFind, selectedDate, selectedTurn, selectedCourt, user }) => {
  
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const dispatch = useDispatch();
  const courtFinded = sportFind?.court.find((c) => c.name === selectedCourt);
  console.log(courtFinded)

  const handleReserve = () => {
    // const courtFiltered = sportFind?.court.filter((c) => c.name === selectedCourt);
    const bookingData = {
      date: formatDate(selectedDate),
      hour: selectedTurn,
      userId: user.id,
      courtId: courtFinded.id,
    };
    console.log(bookingData)
    dispatch(postBooking(bookingData))
      .then((response) => {
        alert('Booking was successful!');
      })
      .catch((error) => {
        alert('An error occurred while making the booking.');
        console.error(error);
      });
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
      {selectedCourt && (
        <div className={style.pricesContainer}>
          <h3>Total: <span className={style.noMemberPrice}>${courtFinded?.noMemberPrice}</span></h3>
          
          <p><Link href={'/join'} style={{ textDecoration:'underline', fontWeight:'bold'}}>Join us!</Link> and the total will be <span className={style.memberPrice}>${courtFinded?.memberPrice}</span></p>
        </div>
      )}
      <button className={style.reserveBtn} onClick={handleReserve}>Reserve</button>
    </div>
  );
};

export default Summary;