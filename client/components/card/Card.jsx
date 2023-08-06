import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({image, description, name, id, courts}) => {

  
  return (
    <Link href={`/detail/${name}`}>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.sportName}>
          <h1>{name}</h1>
        </div>
        <div className={styles.cardDetails}>
        </div>
        <button className={styles.cardButton}>RESERVE</button>
      </div>
    </Link>
  );

  
};

export default Card;
