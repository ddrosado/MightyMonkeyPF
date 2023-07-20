"use client";
import React from "react";
import Image from "next/image";
import FormContact from "../../components/contact/formContact/FormContact";
import style from "./page.module.css";
import img from "../../assets/images/monoclub.jpg";
import { SectionDate } from "../../components/contact/sectionDate/SectionDate";

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.portada}>
        <Image src={img} alt='mono'/>
        <h1 className={style.title}>Contact</h1>
      </div>
      <div className={style.sectionForm}>
        <FormContact />
      </div>
      <SectionDate/>
    </div>
  );
};

export default Contact;
