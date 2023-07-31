'use client'
import React from 'react'
import MyProfile from '../../components/profile/Profile'
import style from "./page.module.css"
import { Turns } from '../../components/turns/Turns'
import useSWR from "swr";
import { fetcher } from '../../pages/fetcher';
import { Unauthorized } from '../unauthorized/page';

const Profile = () => {

  const { data, error } = useSWR("api/user", fetcher);
  console.log(data)


  return (
    <>
      {data ? (
        data.isLoggedIn ? (
          <div className={style.container}>
            <h1>My Profile</h1>
            <MyProfile />
            <h1>My Turns</h1>
            <Turns />
            <Turns />
          </div>
        ) : (
          <Unauthorized />
        )
      ) : (
        <Unauthorized />
      )}
    </>
  );
};

export default Profile