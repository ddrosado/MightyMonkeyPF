"use client";
import React from "react";
import style from "./Summary.module.css";
import { useDispatch } from "react-redux";
import { getBookings, postBooking } from "../../../redux/actions/bookingAction";
import Link from "next/link";
import { filterBookings } from "../../../redux/features/bookingsSlice";

const Summary = ({
  sportFind,
  selectedDate,
  selectedTurn,
  selectedCourt,
  user,
}) => {
  console.log(selectedTurn)
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    dateObject.setUTCHours(0, 0, 0, 0);

    const year = dateObject.getUTCFullYear();
    const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const dispatch = useDispatch();
  const courtFinded = sportFind?.court.find((c) => c.name === selectedCourt);

  const setAsyncBookings = async () => {
    await dispatch(getBookings())
    dispatch(filterBookings({sport:sportFind?.name, date:selectedDate, search:""}))
  }
  
  const handleReserve = () => {
    const bookingData = {
      date: formatDate(selectedDate),
      hour: selectedTurn,
      userId: user.id,
      courtId: courtFinded.id,
    };
    console.log(bookingData)

    dispatch(postBooking(bookingData))
      .then((response) => {
        setAsyncBookings()
        // setSelectedData()
        alert("Booking was successful!");
        if(response){
          window.location.href = '/successfully-reserve';
        }
      })
      .catch((error) => {
        alert("An error occurred while making the booking.");
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
          <h3>
            Total:{" "}
            <span className={style.noMemberPrice}>
              ${courtFinded?.noMemberPrice}
            </span>
          </h3>

          <p>
            <Link
              href={"/join"}
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Join us!
            </Link>{" "}
            and the total will be{" "}
            <span className={style.memberPrice}>
              ${courtFinded?.memberPrice}
            </span>
          </p>
        </div>
      )}
      <button className={style.reserveBtn} onClick={handleReserve}>
        Reserve
      </button>
    </div>
  );
};

export default Summary;
