import React from 'react'
import MyProfile from '../../components/profile/Profile'
import style from "./page.module.css"
import { Turns } from '../../components/turns/Turns'

const Profile = () => {
  return (
    <div className={style.container}>
      <h1>Personal Dates</h1>
      <MyProfile/>
      <h1>My Turns</h1>
      <Turns/>
      <Turns/>
    </div>
  )
}

export default Profile