"use client"
import React from 'react'
import style from "./Profile.module.css"
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher';
// import Image from 'next/image';

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
        <div className={style.userdata}>
          <div>
            <h2 className={style.userDataLabel}>Name:</h2>
            <strong>{data.name}</strong>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Email:</h2>
            <strong>{data.email}</strong>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Phone:</h2>
            <strong>{data.telephone ?
             data.telephone 
             : <p>-</p>}</strong>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Status:</h2>
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