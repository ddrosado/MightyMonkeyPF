import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getSportById } from '../../../redux/actions/sportsActions'
import { FormSport } from '../form/formSport/FormSport'
import { FormCourt } from '../form/formCourt/FormCourt'
import style from "./Edit.module.css"

export const Edit = ({id, setCurrent}) => {

  const dispatch = useDispatch()
  const sport = useSelector(state=> state.sports.sport)

  useEffect(()=>{
    dispatch(getSportById(id))
  },[])


  return (
    <div className={style.container}>
      <button className={style.back} onClick={()=>setCurrent("list")}>{`< Back`}</button>
      <h1>Edit {sport?.name}</h1>
      <FormSport sport={sport}/>
      <h1>{sport?.name} Courts </h1>
      <div className={style.courts}>
        {sport?.court?.map((court)=><FormCourt court={court} sport={sport.name}/>)}
        <FormCourt/>
      </div>
    </div>
  )
}
