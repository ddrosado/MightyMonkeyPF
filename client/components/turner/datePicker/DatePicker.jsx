import React from 'react'
import style from './DatePicker.module.css'

const DatePicker = () => {
  return (
    <div className={style.dateContainer}>
        <h2>Pick a date</h2>
        <input type="date" />
    </div>
  )
}

export default DatePicker