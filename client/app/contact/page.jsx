"use client";
import React from "react";
import FormContact from "../../components/contact/formContact/FormContact";
import style from "./page.module.css";
import { SectionDate } from "../../components/contact/sectionDate/SectionDate";
import monkeymsg from '../../assets/images/monomsg.png'
import Image from "next/image";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.portada}>
        <h1 className={style.title}>Contact</h1>
      </div>
      <Image className={style.logo} src={monkeymsg} alt='#' ></Image>
      <div className={style.sectionForm}>
        <FormContact />
      </div>
      <SectionDate/>
    </div>
  );
};

export default Contact;
