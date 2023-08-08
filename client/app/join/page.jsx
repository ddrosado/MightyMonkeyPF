import React from 'react'
import PricingPlans from '../../components/pricingPlans/pricingPlans'
import style from './page.module.css'
import Membership from '../../components/membership/Membership'

export const page = () => {
  return (
    <div className={style.joinContainer}>
      <Membership/>
        {/* <PricingPlans /> .*/}
        
    </div>
  )
}
