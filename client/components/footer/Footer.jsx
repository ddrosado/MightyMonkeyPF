import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faSquareFacebook, faSquareInstagram, faSquareTwitter, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <Image src={logo} alt='logos' className={style.logo} />
      <p className={style.copyright}>2023 mighty monky club. Todos los derechos reservados</p>
      <p className={style.aboutDevs}>Our Developers</p>
      <div className={style.socialIcons}>
        <FontAwesomeIcon className={style.socialIcon} icon={faSquareInstagram}/>
        <FontAwesomeIcon className={style.socialIcon} icon={faSquareTwitter}/>
        <FontAwesomeIcon className={style.socialIcon}  icon={faSquareFacebook} />
      </div>
    </div>
  )
}

export default Footer