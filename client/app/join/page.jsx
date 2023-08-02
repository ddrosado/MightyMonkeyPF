import React from 'react'
import PricingPlans from '../../components/pricingPlans/pricingPlans'
import style from './page.module.css'

const page = () => {
  return (
    <div className={style.joinContainer}>
        <PricingPlans />
    </div>
  )
}

export default page