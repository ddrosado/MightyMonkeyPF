"use-cient"
import React from 'react'
import { getBookings } from '../../redux/actions/bookingAction'
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';

export const ListTurns = () => {

    const dispatch = useDispatch()
    const bookings = useSelector(state=> state.bookings.bookings)

    useEffect(()=>{
        dispatch(getBookings())
    },[])

    console.log(bookings)

  return (
    <div>ListTurns</div>
  )
}
