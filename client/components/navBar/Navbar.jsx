import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { fetcher } from "../../pages/api/fetcher";

const logout = async () => {
  const data = await fetch("api/logout", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};


export const Navbar = () => {

  const { data } = useSWR("api/user", fetcher);
  console.log(data)
  const router = useRouter();

  const obj = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    { label: "Profile", route: "/profile" },
    { label: "Join!", route: "/join" },
  ];

  // ------------------------- Log out -------------------------
  const logoutHandler = async () => {
    const res = await logout();
    window.location.reload();
  };

  const logInHandler = () => {
    router.push("/");
  };

  if (data?.id && !data?.isActive){
    router.push("/");
  }

  return (
      // <div className={style.navContainer}>
        <div className={style.barContainer}>
          <div className={style.imageAndNav}>
            <Image className={style.logo} src={logo} alt="#" />
            <div className={style.options}>
              <ul className={style.ul}>
                {obj.map(({ label, route }) => {
                  return (
                    <Link className={style.link} key={route} href={route}>
                      <li className={style.navbarLabel}>{label}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style.adminBar}>
          {data ? (
        <>
          {data.isAdmin ? (
            <Link className={style.link} key="admin" href="dashboard/users">
              <li>Admin</li>
            </Link>
          ) : null}
          |
          {data.isLoggedIn ? (
            <li onClick={logoutHandler}>Log out</li>
          ) : (
            <li onClick={logInHandler}>Log In</li>
          )}
        </>
      ) : null}
          </div>
        </div>
      // </div>
  );
};
