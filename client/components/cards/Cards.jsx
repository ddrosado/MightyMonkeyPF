'use client'
import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { getSports } from "../../redux/actions/sportsActions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";



const Cards = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSports());
  }, []); 
  
   const sports = useSelector(state => state.sports);


  return (
    <section className={styles.cardSection}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBackround}>
          <h1>Actividades</h1>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {
          sports?.sports?.map(({image, description, name, id, courts}) =>
          (<Card courts={courts} image={image} description={description} name={name} id={id} />))
        }
      </div>
    </section>
  );
};

export default Cards;
