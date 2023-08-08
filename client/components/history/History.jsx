import React from 'react'
import style from "./History.module.css"

export const History = () => {
  return (
    <div className={style.container}>
       <div className={style.contentContainer}>
        <div className={style.historyTitle}>
        <span className={style.bookingsTitle}>Jungle Chronicles: Your Court Booking History</span>
        </div>
       </div>
    </div>
  )
}
