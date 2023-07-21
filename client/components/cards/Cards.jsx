import React from "react";
import Card from "../card/Card";
import styles from "./Cards.module.css";
import soccer from '../../assets/images/soccer.jpg'
import tennis from "../../assets/images/tennis.jpg"
import basket from "../../assets/images/basket.jpg"
import hockey from "../../assets/images/hockey.jpg"
import volley from "../../assets/images/volley.jpg"
import golf from "../../assets/images/golf.jpg"
import paddle from "../../assets/images/paddle.jpg"
import rugby from "../../assets/images/rugby.jpg"

const Cards = () => {

  let images = [soccer,tennis, basket, hockey, volley, golf, paddle, rugby];

  return (
    <section className={styles.cardSection}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBackround}>
          <h1>Actividades</h1>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {
          images.map((image) =>
          (<Card image={image.src} />))
        }
      </div>
    </section>
  );
};

export default Cards;
