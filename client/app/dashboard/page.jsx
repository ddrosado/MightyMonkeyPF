import React from 'react'
import ListSocios from '../../components/listSocios/ListSocios.jsx'
import Link from 'next/link.js'
import style from "./page.module.css"

const Page = () => {
  return (
    <div>
      <Link href={"/home"}><button className={style.button}>Home</button></Link>
      <ListSocios/>
    </div>
  )
}

export default Page