import React from "react";
import style from "./page.module.css";
import facu from "../../assets/images/devs/facuDev.png";
import denise from "../../assets/images/devs/deniseDev.png";
import enzo from "../../assets/images/devs/enzoDev.png";
import lucas from "../../assets/images/devs/lucasDev.png";
import gonza from '../../assets/images/devs/gonzaDev.png'
import Image from "next/image";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function page() {
  let devs = [facu, denise, enzo, lucas, gonza];
  return (
    <div className={style.devsContainer}>
      <div className={style.devsGrid}>
        {devs.map((dev) => (
          <div className={style.devInfo}>
            <Image className={style.imageDev} src={dev} alt="#" />
            <div className={style.infoIcons}>
              <FontAwesomeIcon className={style.iconDev} icon={faSquareInstagram} />
              <FontAwesomeIcon className={style.iconDev} icon={faLinkedin} />
              <FontAwesomeIcon className={style.iconDev} icon={faSquareGithub} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
