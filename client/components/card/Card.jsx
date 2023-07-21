import React from "react";
import styles from "./Card.module.css";
import soccer from "../../assets/images/soccer.jpg";
import Image from 'next/image';
import Link from "next/link";


const Card = ({name}) => {

  return (
    <div className={styles.card}>
      <Link href='/detail'>
      <div className={styles.cardDetails}>
        {/* <div className={styles.sportName}>
          <h1>{name}</h1>
        </div> */}
      </div>
      <button className={styles.cardButton}>Take a turn</button>
      </Link>
    </div>
  );
};

export default Card;
