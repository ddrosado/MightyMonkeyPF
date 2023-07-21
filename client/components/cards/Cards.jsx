import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <section className={styles.cardSection}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBackround}>
          <h1>Actividades</h1>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Card name={"Soccer"} />
        <Card name={"Tennis"} />
        <Card name={"Basketball"} />
        <Card name={"Voleyball"} />
        <Card name={"Paddle"} />
        <Card name={"Golf"} />
        <Card name={"Hockey"} />
        <Card name={"Gym"} />
      </div>
    </section>
  );
};

export default Cards;
