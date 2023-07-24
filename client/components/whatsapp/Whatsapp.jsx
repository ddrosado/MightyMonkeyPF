import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './Whatsapp.module.css'

const Whatsapp = () => {
  return (
    <div className={style.whatsappIcon}>
        <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#46d250",}} />
    </div>
  )
}

export default Whatsapp