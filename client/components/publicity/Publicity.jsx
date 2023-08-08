"use client";
import React from "react";
import style from "./Publicity.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logopu.png";

const Publicity = () => {
  return (
    <div className={style.publicityContainer}>
      <div className={style.textContainer}>
        <h1>
          Welcome to<span>MIGHTY MONKEY CLUB.</span>
        </h1>
        <h3>
          Let's take a
          <Link className={style.reserve} href={"/sports"}>
            <span >reservation now!</span>
          </Link>
        </h3>
      </div>
      <div className={style.separator}></div>
      <div className={style.logoContainer}>
        <Image className={style.logo} src={logo} alt="#" />
      </div>
    </div>
  );
};

export default Publicity;
