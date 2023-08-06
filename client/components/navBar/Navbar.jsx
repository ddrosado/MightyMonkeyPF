'use client'
import React, { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/images/monitos.png";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { fetcher } from "../../pages/api/fetcher";
import { useEffect } from "react";
import { Collapse, Dropdown, initTE } from "tw-elements";

const logout = async () => {
  const data = await fetch("api/logout", {
    method: "GET",
  });
  const res = await data.json();
  return res;
};

export const Navbar = () => {
  const { data } = useSWR("/api/user", fetcher);
  const router = useRouter();

  const obj = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/aboutUs" },
    { label: "Contact", route: "/contact" },
    ...(data?.isActive ? [{ label: "Profile", route: "/profile" }] : []),
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

  useEffect(() => {
    initTE({ Collapse, Dropdown });
    if (!data?.isActive && data?.id) {
      logout().then(() => {
        router.push("/");
      });
    }
  }, [data, router]);

  if (data?.id && !data?.isActive) {
    router.push("/");
  }

  return (
    <div className={style.navContainer}>
      <Image className={style.logo} src={logo} alt="#" />
      <nav
        class="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <button
            class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent5"
            aria-controls="navbarSupportedContent5"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent5"
            data-te-collapse-item
          >
            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {obj.map(({ label, route }) => {
                return (
                  <Link className={style.link} key={route} href={route}>
                    <li
                      class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
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
  );
};
