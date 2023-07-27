'use client'
import React, { useEffect, useState } from "react";
import style from "./Detail.module.css";
import Calendar from "../calendar/Calendar";
import Carrusel from "../carrusel/Carrusel.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getSports } from "../../redux/actions/sportsActions";


const Detail = ({sportName}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    if(!sport.sports.length){
      dispatch(getSports());
    }
}, []);
  

  const sport = useSelector(state => state.sports)

  const sportFind = sport.sports?.find(e=> e.name == sportName)
  

  return (
    
    <div className={style.detailContainer}>
      <div>
        <div className={style.containerImgCalendar}>
          <div>
            <h2 className={style.title}>{sportFind?.name}</h2>
          </div>
          <div>
            {/* <img src={} alt="" /> */}
          </div>
          <div>
            <p className={style.p}>make your reservation</p>
            <Calendar />
          </div>
        </div>
      </div>
      <div className={style.carruselContainer}>
        <h2 className={style.h2}>Gallery</h2>
        <div>
          <Carrusel />
        </div>
      </div>

      <div className={style.reviewsContainer}>
        <div>

       {/*  <h2 className={style.h2Review}>Review</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Detail;
