'use client'
import React from 'react'
import style from './Turner.module.css'
import DatePicker from './datePicker/DatePicker'

const Turner = () => {
  return (
    <div className={style.turnerContainer}>
        <DatePicker />
    </div>
  )
}

export default Turner