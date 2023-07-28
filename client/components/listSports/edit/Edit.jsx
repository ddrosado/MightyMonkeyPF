import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getSportById } from '../../../redux/actions/sportsActions'

export const Edit = ({id}) => {

  const dispatch = useDispatch()
  const sport = useSelector(state=> state.sports.sport)
  console.log(sport)

  useEffect(()=>{
    dispatch(getSportById(id))
  },[])

  return (
    <div>nadasdsd</div>
  )
}
