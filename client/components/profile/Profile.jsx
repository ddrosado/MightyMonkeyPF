"use client"
import React from 'react'
import style from "./Profile.module.css"
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher';

const MyProfile = () => {
  const { data, error } = useSWR("api/user", fetcher);
  
  return (
    data ? (
<div className={style.container}>
        <div className={style.img}>
          <div>
          {data.image}
          </div>
        </div>
        <div className={style.dates}>
          <div>
            <h2>Name:</h2>
            <strong>{data.name}</strong>
          </div>
          <div>
            <h2>Email:</h2>
            <strong>{data.email}</strong>
          </div>
          <div>
            <h2>Phone:</h2>
            <strong>{data.telephone}</strong>
          </div>
          <div>
            <h2>Status:</h2>
            <strong>{data.isMember ? 
            <p>Premium Membership</p>
          : <p>Not associated</p>}</strong>
          </div>
        </div>
    </div> 
    ) 
    : null 
   
    
  )
}

export default MyProfile