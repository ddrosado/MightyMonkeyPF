"use client"
import React, { useState } from 'react'
import ListSocios from '../../components/listSocios/ListSocios.jsx'
import Link from 'next/link.js'
import style from "./page.module.css"
import { ListSports } from '../../components/listSports/ListSports.jsx'




const Page = () => {

  const [user, setUser] = useState(true)

  return (
    <div className={style.container}>
      <Link href={"/home"}><button className={style.home}>Home</button></Link>
      <div className={style.options}>
        <button onClick={()=> setUser(true)} className={`${user? style.active : null} ${style.users}`}>Users</button>
        <button onClick={()=> setUser(false)} className={`${user? null : style.active } ${style.sports}`}>Sports</button>
      </div>
      {user? <ListSocios/> : <ListSports/>}
    </div>
  )
}

export default Page