import React from 'react'
import PricingPlans from '../../components/pricingPlans/pricingPlans'
import style from './page.module.css'
import Membership from '../../components/membership/Membership'

const page = () => {
  return (
    <div className={style.joinContainer}>
      <Membership/>
        {/* <PricingPlans /> .*/}
        
    </div>
  )
}

export default page