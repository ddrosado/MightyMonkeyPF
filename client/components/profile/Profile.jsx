import React from 'react'
import style from "./Profile.module.css"

const MyProfile = () => {
  return (
    <div className={style.container}>
        <div className={style.img}>
          <div>
          imagen
          </div>
        </div>
        <div className={style.dates}>
          <div>
            <h2>Name:</h2>
            <strong>Enzo Marinich</strong>
          </div>
          <div>
            <h2>Email:</h2>
            <strong>Marinichenzo@gmail.com</strong>
          </div>
          <div>
            <h2>Phone:</h2>
            <strong>11872387995</strong>
          </div>
          <div>
            <h2>Status:</h2>
            <strong>Socio Premium</strong>
          </div>
        </div>
    </div> 
  )
}

export default MyProfile