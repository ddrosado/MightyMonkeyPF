"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import style from "./page.module.css"
import useSWR from "swr";
import NotFound from '../../404NotFound/page.jsx'
import NavAdmin from '../../../components/navAdmin/NavAdmin'
import ListSocios from '../../../components/admin/listSocios/ListSocios'
import { ListSports } from '../../../components/admin/listSports/ListSports'
import { ListTurns } from '../../../components/admin/listTurns/ListTurns'
import ListPlans from '../../../components/admin/listPlans/ListPlans'
import { fetcher } from '../../../pages/api/fetcher';




const Page = ({params}) => {


  // const { data, error } = useSWR("api/user", fetcher);


  return (
    <>
      {/* {data ? (
        data.isAdmin ? ( */}
          <div className={style.container}>
            <Link href={"/home"}>
              <button className={style.home}>Home</button>
            </Link>
            <NavAdmin page={params.page}/>
            {params.page == "users" ? <ListSocios/> : null }
            {params.page == "sports" ? <ListSports/> : null }
            {params.page == "turns" ? <ListTurns/> : null }
            {params.page == "plans" ? <ListPlans/> : null }
          </div>
          {/* )  : (
          <NotFound />
        )
      ) : <NotFound />} */}
    </>
  );
};

export default Page