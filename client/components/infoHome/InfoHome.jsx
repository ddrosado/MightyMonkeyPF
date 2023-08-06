"use client";
import React from "react";
import style from "./InfoHome.module.css";
import Restaurant from "./restaurant/Restaurant";
import Pool from "./pool/Pool";
const InfoHome = () => {
  return (
    <div className={style.infoContainer}>
      <Restaurant />
      <Pool />
    </div>
  );
};

export default InfoHome;
