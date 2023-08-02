import React from 'react'
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
            <div>PLans</div>
          </div>
  );
};

export default Page