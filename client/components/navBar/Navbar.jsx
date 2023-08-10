'use client'
import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/mighty.png";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { fetcher } from "../../pages/api/fetcher";
import { useEffect } from "react";


const logout = async () => {
  const data = await fetch("api/logout", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const Navbar = () => {
  const { data } = useSWR("api/user", fetcher);
  const router = useRouter();

  const obj = [
    { label: "Home", route: "/home" },
    { label: "Sports", route: "/sports" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    ...(data?.isActive ? [{ label: "Profile", route: "/profile" }] : []),
    { label: "Join!", route: "/join" },
  ];
  // ------------------------- Log out -------------------------
  const logoutHandler = async () => {
    await logout();
    window.location.reload();
  };

  const logInHandler = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!data?.isActive && data?.id) {
      logout().then(() => {
        router.push("/");
      });
    }
  }, [data, router]);

  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, initTE } = await import("tw-elements");
      initTE({ Collapse, Dropdown });
    };
    init();
  }, []);

  if (data?.id && !data?.isActive) {
    router.push("/");
  }

  return (
    <div className={style.navContainer}>
      <Image className={style.logo} src={logo} alt="#" />
      <nav
      style={{color:'black'}}
        className="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent5"
            aria-controls="navbarSupportedContent5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7" style={{color:'black'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent5"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {obj.map(({ label, route }) => {
                return (
                  <Link className={style.link} key={route} href={route}>
                    <li
                      className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                      data-te-nav-item-ref
                    >
                      {label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className={style.adminBar}>
          {data ? (
            <>
              {data.isAdmin ? (
                <Link className={style.link} key="admin" href="http://localhost:3000/dashboard/users">
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
  );
};

