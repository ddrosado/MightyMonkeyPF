"use client";
import React from "react";
import style from "./Publicity.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logopu.png";

const Publicity = () => {
  return (
    <div className={style.publicityContainer}>
      <div className={style.logoContainer}>
        <Image className={style.logo} src={logo} alt="#" />
      </div>
      <div className={style.separator}></div>
      <div className={style.btnsContainer}>
        <Link className={style.reserve} href={"/join"}>
          <button className={style.btnJoin}> Join us!</button>
        </Link>
        <Link className={style.reserve} href={"/sports"}>
          <button className={style.btnReserve}> Reserve a court</button>
        </Link>
      </div>
    </div>
  );
};

export default Publicity;
