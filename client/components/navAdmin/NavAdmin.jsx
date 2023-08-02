import React from "react";
import  Link  from "next/link";
import style from "./NavAdmin.module.css";

const NavAdmin = () => {
  return (
    <>
      <div className={style.options}>
        <Link href={"/dashboard"}>
          <button className={style.users}>Users</button>
        </Link>
        <Link href={"/dashboard/sports"}>
          <button className={style.users}>Sports</button>
        </Link>
        <Link href={"/dashboard/turns"}>
          <button className={style.users}>Turns</button>
        </Link>
        <Link href={"/dashboard/plans"}>
          <button className={style.users}>Plans</button>
        </Link>
      </div>
    </>
  );
};

export default NavAdmin