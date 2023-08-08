"use client"
import React from "react";
import  Link  from "next/link";
import style from "./NavAdmin.module.css";



const NavAdmin = ({page}) => {
  


  return (
    <>
      <div className={style.options}>
        <Link href={"/dashboard/users"}>
          <button className={`${style.users} ${page == "users" ? style.active :  null}`}>Users</button>
        </Link>
        <Link href={"/dashboard/sports"}>
          <button className={`${style.users} ${page == "sports" ? style.active :  null}`}>Sports</button>
        </Link>
        <Link href={"/dashboard/turns"}>
          <button className={`${style.users} ${page == "turns" ? style.active :  null}`}>Turns</button>
        </Link>
        <Link href={"/dashboard/plans"}>
          <button className={`${style.users} ${page == "plans" ? style.active :  null}`}>Plans</button>
        </Link>
      </div>
    </> 
  );
};

export default NavAdmin
