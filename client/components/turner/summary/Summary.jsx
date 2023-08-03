import React from 'react'
import style from './Summary.module.css'

const Summary = ({sportFind}) => {
  return (
    <div className={style.summaryContainer}>
        <h2>Your reserve</h2>
        <div className={style.infoContainer}>
            <h3>{sportFind?.name}</h3>
            <h3>Name:</h3>
            <h3>Date:</h3>
            <h3>Hour:</h3>
            <h3>Court:</h3>
        </div>
        <button className={style.reserveBtn}>Reserve</button>
    </div>
  )
}

export default Summary