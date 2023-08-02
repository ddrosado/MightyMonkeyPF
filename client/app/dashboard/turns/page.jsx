import React from 'react'
import { ListSports } from '../../../components/listSports/ListSports'
import NotFound from '../../404NotFound/page';
import style from "./page.module.css"
import Link from 'next/link';
import NavAdmin from '../../../components/navAdmin/NavAdmin';




const Page = () => {






  return (
          <div className={style.container}>
            <Link href={"/home"}>
              <button className={style.home}>Home</button>
            </Link>
            <NavAdmin/>
            <div>Turns</div>
          </div>
  );
};

export default Page