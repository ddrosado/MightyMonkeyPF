import React from 'react'
import style from "./SectionDate.module.css"

export const SectionDate = () => {
  return (
    <div className={style.sectionDatos}>
          <iframe
          className={style.mapa}
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Estadio%20Mas%20Monumental&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className={style.datos}>
            <div>
              <strong>Phone:</strong>
              <h3>11 301 912 018</h3>
            </div>
            <div>
              <strong>Adress:</strong>
              <h3>Av. Pres. Figueroa Alcorta 7597</h3>
            </div>
            <div>
              <strong>Days and Hours:</strong>
              <h3>Sunday to Thursday 11:00am - 11pm Friday & Saturday 11:00am - 12am</h3>
            </div>
          </div>
      </div>
  )
}
