"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import style from "./page.module.css"
import { fetcher } from '../../pages/api/fetcher.js'
import useSWR from "swr";
import NotFound from '../404NotFound/page.jsx'
import ListSocios from '../../components/listSocios/ListSocios'
import NavAdmin from '../../components/navAdmin/NavAdmin'


const Page = () => {


  const { data, error } = useSWR("api/user", fetcher);




  return (
    <>
      {data ? (
        data.isAdmin ? (
          <div className={style.container}>
            <Link href={"/home"}>
              <button className={style.home}>Home</button>
            </Link>
            <NavAdmin/>
            <ListSocios/>
          </div>
        ) : (
          <NotFound />
        )
      ) : <NotFound />}
    </>
  );
};

export default Page