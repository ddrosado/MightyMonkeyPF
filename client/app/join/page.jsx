import React from 'react'
import style from './page.module.css'
import Membership from '../../components/membership/membership'

const page = () => {
  return (
    <div className={style.joinContainer}>
      <Membership/>
    
    </div>
  )
}

export default page