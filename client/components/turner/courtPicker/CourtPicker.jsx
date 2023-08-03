import React from 'react'
import style from './CourtPicker.module.css'

const CourtPicker = () => {
  return (
    <div className={style.courtsContainer}>
        <h2>Pick a court</h2>
        <select name="" id="">
            <option value="court1">Court 1</option>
            <option value="court2">Court 2</option>
            <option value="court3">Court 3</option>
            <option value="court4">Court 4</option>
        </select>
    </div>
  )
}

export default CourtPicker