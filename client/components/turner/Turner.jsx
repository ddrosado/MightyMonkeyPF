import React from 'react'
import DatePicker from './datePicker/DatePicker'
import style from './Turner.module.css'

const Turner = () => {
  return (
    <div className={style.tunerContainer}>
        <DatePicker />
    </div>
  )
}

export default Turner