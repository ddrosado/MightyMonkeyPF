import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  const obj = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    { label: "My turns", route: "/turns" },
    { label: "Login", route: "/login" },
  ];

  return (
    <div className={style.navContainer}>
      <Image className={style.logo} src={logo} alt="#" />
      <div className={style.barContainer}>
        <div className={style.options}>
          <ul className={style.ul}>
            {obj.map(({ label, route }) => {
              return (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
