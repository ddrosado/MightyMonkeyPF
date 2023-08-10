"use client";
import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { getSports } from "../../redux/actions/sportsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Image from "next/image";
import monkey from '../../assets/images/monover.png'

const Cards = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSports());
  }, []);

  const sports = useSelector((state) => state.sports);

  return (
    <section className={styles.cardSection}>
      <Image className={styles.monkey} src={monkey} alt="monkey" />
      <div className={styles.titleContainer}>
        <h1>
          Take a look at our<span> SPORTS </span>, and make a <span>RESERVATION!</span>
        </h1>
      </div>
      <div className={styles.cardsContainer}>
        {sports?.sports?.filter(sp=> sp.isActive).map(({ image, description, name, id, courts }) => (
          <Card
            key={id}
            courts={courts}
            image={image}
            description={description}
            name={name}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
