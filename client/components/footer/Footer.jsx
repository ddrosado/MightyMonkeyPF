import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <Image src={logo} alt="logos" className={style.logo} />
      <div className={style.footerText}>
        <p className={style.copyright}>
          © Mighty Monkey Club. All rights reserved
        </p>
        <Link href="/aboutDevs">
          <p className={style.aboutDevs}>Our Developers</p>
        </Link>
      </div>
      <div className={style.socialIcons}>
        <Link href="https://instagram.com/" target="blank">
          <FontAwesomeIcon
            className={style.socialIcon}
            icon={faSquareInstagram}
          />
        </Link>
        <Link href="https://twitter.com/" target="blank">
          <FontAwesomeIcon
            className={style.socialIcon}
            icon={faSquareTwitter}
          />
        </Link>
        <Link href="https://facebook.com/" target="blank">
          <FontAwesomeIcon
            className={style.socialIcon}
            icon={faSquareFacebook}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
