'use client'
import React, { useState, useEffect } from 'react';
import style from "./Profile.module.css"
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';


const MyProfile = (props) => {
  const { data } = useSWR("api/user", fetcher);

  return (
    data ? (
  <div className={style.marginContainer}>
<div className={style.container}>
  
        <div className={style.img}>
          <div>
          <img src={data.image} alt="profile-image" />
          </div>
        </div>
        <div className={style.userdata}>
          <div>
            <h2 className={style.userDataLabel}>Name:</h2>
            <span>{data.name} {data.surname}</span>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Email:</h2>
            <span>{data.email}</span>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Phone:</h2>
            <span>{data.telephone ?
             data.telephone 
             : <p>-</p>}</span>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Status:</h2>
            <span>{data.isMember ? 
            <p>Premium Membership</p>
          : <p>Not associated</p>}</span>

          </div>


          <div className={style.editContainer}>
          
          <button 
          onClick={() => props.changeComponent(true)} 
          className={style.editButton}>
   <FontAwesomeIcon 
   icon={faPen}
   className={style.iconButton} />
  <span className={style.buttonText}>Edit profile </span>
</button>
</div>
</div>
        </div>
        
    </div> 
    ) 
    : null 
   
    
  )
};

export default MyProfile;
