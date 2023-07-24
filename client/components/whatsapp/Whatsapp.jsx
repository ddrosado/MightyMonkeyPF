import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import style from './Whatsapp.module.css'

const Whatsapp = () => {
  const phoneNumber = '+541165788585';
  const message = 'Hola Facundo pedacito de nazi';

  const handleWhatsappClick = () => {

    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };
  return (
    <div onClick={handleWhatsappClick} className={style.whatsappIcon}>
        <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#46d250",}} />
    </div>
  )
}

export default Whatsapp