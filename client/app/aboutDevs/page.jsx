import React from "react";
import style from "./page.module.css";
import facu from "../../assets/images/devs/facuDev.png";
import denise from "../../assets/images/devs/deniseDev.png";
import enzo from "../../assets/images/devs/enzoDev.png";
import lucas from "../../assets/images/devs/lucasDev.png";
import Image from "next/image";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function page() {
  let devs = [
    {
      name: "Facundo",
      surname: "Nuño",
      image: facu,
      instagram: "https://www.instagram.com/facuureta",
      linkedIn: "https://www.linkedin.com/in/facundoureta/",
      github: "https://github.com/FacundoNuno",
    },
    {
      name: "Denise",
      surname: "Rosado",
      image: denise,
      instagram: "https://www.instagram.com/turquestanrusso/",
      linkedIn: "https://www.linkedin.com/in/deniserosado/",
      github: "https://github.com/ddrosado",
    },
    {
      name: "Enzo",
      surname: "Marinich",
      image: enzo,
      instagram: "https://www.instagram.com/enzo_marinich/",
      linkedIn: "https://www.linkedin.com/in/enzo-marinich-942a76264/",
      github: "https://github.com/EnzoMarinich",
    },
    {
      name: "Lucas",
      surname: "Figueroa",
      image: lucas,
      instagram: "https://www.instagram.com/lucasfiguerok/",
      linkedIn: "https://www.linkedin.com/in/lucas-figueroa-62b6b4205/",
      github: "https://github.com/lucasfigueroa5",
    },
  ];
  return (
    <div className={style.devsContainer}>
      <div className={style.developers}>
        <h1>
          Contact our <span> DEVELOPERS !</span>
        </h1>
      </div>
      <div className={style.devsGrid}>
        {devs.map((dev) => (
          <div className={style.devInfo}>
            <Image className={style.imageDev} src={dev.image} alt="#" />
            <h1 className={style.names}>{dev.name + " " + dev.surname}</h1>
            <div className={style.infoIcons}>
              <Link href={dev.instagram} target="blank">
                <FontAwesomeIcon
                  className={style.iconDev}
                  icon={faSquareInstagram}
                />
              </Link>
              <Link href={dev.linkedIn} target="blank">
                <FontAwesomeIcon className={style.iconDev} icon={faLinkedin} />
              </Link>
              <Link href={dev.github} target="blank">
                <FontAwesomeIcon
                  className={style.iconDev}
                  icon={faSquareGithub}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
