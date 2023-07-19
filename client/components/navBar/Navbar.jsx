import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from '../../assets/images/logo.png'

export const Navbar = () => {
  const obj = [
  {label : "home", route: "/home"},
  {label : "About", route: "/aboutUs"},
  {label : "Contact", route: "/contact"},
  {label : "My turns", route: "/turns"},
  {label : "Login", route: "/logIn"}
  ]
  
  return (
    <div className={style.container}>
      <Image className={style.logo} src={logo} />
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
  )
}
