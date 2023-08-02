import React from 'react'
import { ListSports } from '../../../components/listSports/ListSports'
import NotFound from '../../404NotFound/page';
import style from "./page.module.css"
import Link from 'next/link';
import NavAdmin from '../../../components/navAdmin/NavAdmin';
// import useSWR from "swr";
// import { fetcher } from '../../../pages/api/fetcher.js'



const Page = () => {


  // const { data, error } = useSWR("api/user", fetcher);




  return (
    <>
      {/* {data ? (
        data.isAdmin ? ( */}
          <div className={style.container}>
            <Link href={"/home"}>
              <button className={style.home}>Home</button>
            </Link>
            <NavAdmin/>
            <ListSports/>
          </div>
        {/* ) : (
          <NotFound />
        )
      ) : <NotFound />} */}
    </>
  );
};

export default Page

