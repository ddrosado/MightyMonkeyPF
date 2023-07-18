import React from 'react'
import styles from './Card.module.css'
import soccer from '../../assets/images/soccer.jpg'

const Card = () => {
  return (
    <div className={styles.myCard}>
        <div className={styles.innerCard}>
            <div className={styles.frontSide}>
                <img src={soccer} alt="soccer" />
                <div>
                    <h1>Fútbol</h1>
                </div>
            </div>
            <div className={styles.backSide}>
                <p>Take your turn</p>
            </div>
        </div>
    </div>
  )
}

export default Card