"use client"
import React, { useEffect } from 'react'
import ListSocios from '../../components/listSocios/ListSocios.jsx'
import Link from 'next/link.js'


const Page = () => {

  // const dispatch = useDispatch()
  
  // useEffect(()=>{
  //   dispatch(getUsers())
  // }, [])
  
  // const users = useSelector(state=> state.users)

  // console.log(users)

  return (
    <div>
      <Link href={"/home"}><button className={style.button}>Home</button></Link>
      <ListSocios/>
    </div>
  )
}

export default Page