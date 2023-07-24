"use client"
import React, { useEffect } from 'react'
import ListSocios from '../../components/listSocios/ListSocios.jsx'
import {useDispatch, useSelector} from "react-redux"
import { getUsers } from '../../redux/actions/userActions.js'



const Page = () => {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getUsers())
  }, [])
  
  const users = useSelector(state=> state.users)

  console.log(users)

  return (
    <div>
      <ListSocios/>
    </div>
  )
}

export default Page