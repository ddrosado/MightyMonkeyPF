import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  const [admin, setAdmin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);

  const obj = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    { label: "Profile", route: "/profile" },
    { label: "Join", route: "/join" },
  ];

  return (
    <div className={style.navSection}>
      <div className={style.adminBar}>
      {admin ? (
                <Link className={style.link} key="admin" href="dashboard">
                  <li>Admin</li>
                </Link>
              ) : null}
              </div><div className={style.adminBar}>
      {loggedIn ? ( <Link className={style.link} key="admin" href="/">
                  <li>Log out</li>
                </Link>
                ) : null }
      </div>
      <div  className={style.navContainer}>
        <Image className={style.logo} src={logo} alt="#" />
        <div className={style.barContainer}>
          <div className={style.options}>
            <ul className={style.ul}>
              {obj.map(({ label, route }) => {
                return (
                  <Link className={style.link} key={route} href={route}>
                    <li>{label}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
