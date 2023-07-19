import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const obj = [
    { label: "Home", route: "/" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    { label: "My turns", route: "/turns" },
    { label: "Login", route: "/login" },
  ];

  return (
    <div className={style.container}>
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
      <div>lupita</div>
    </div>
  )
}
