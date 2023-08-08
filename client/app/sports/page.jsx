import React from 'react'
import Cards from '../../components/cards/Cards'
import style from './page.module.css'

const page = () => {
  return (
    <div className={style.cardsContainer}>
        <Cards />
    </div>
  )
}

export default page