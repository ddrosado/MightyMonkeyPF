"use client";
import React from "react";
import style from "./InfoHome.module.css";
import Restaurant from "./restaurant/Restaurant";
import Pool from "./pool/Pool";
const InfoHome = () => {
  return (
    <section className={style.infoContainer}>
      <Restaurant />
      <Pool />
    </section>
  );
};

export default InfoHome;
