import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <section className={styles.cardSection}>
      <div className={styles.titleContainer}>
        <h1>Avtividades</h1>
      </div>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Cards;
