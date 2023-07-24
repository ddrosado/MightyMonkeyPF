import React from 'react'
import style from "./Turns.module.css"

export const Turns = () => {
  return (
    <div className={style.container}>
        <div className={style.turn}>
            <div className={style.img}>
            </div>
            <div className={style.details}>
                <div>
                    <h2>Fecha: 9/12/2018</h2>
                </div>
                <div>
                    <h2>Hora: 19:00hs </h2>
                </div>
                <div>
                    <h2>Duration: 1hs</h2>
                </div>
                <div>
                    <strong>Finalizado</strong>
                </div>
            </div>
        </div>
    </div>
  )
}
