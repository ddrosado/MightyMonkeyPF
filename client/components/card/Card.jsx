import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ image }) => {
  return (
    <Link href="/detail">
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.cardDetails}>
          {/* <div className={styles.sportName}>
          <h1>{name}</h1>
        </div> */}
        </div>
        <button className={styles.cardButton}>Take a turn</button>
      </div>
    </Link>
  );

  
};

export default Card;
