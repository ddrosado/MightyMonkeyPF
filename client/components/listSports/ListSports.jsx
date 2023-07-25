import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSports } from '../../redux/actions/sportsActions';

export const ListSports = () => {


    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getSports())
    })

    const colums = ["sport", ""]
    const sports = useSelector(state=> state.sports.sports)
  


  return (
    <div>sports</div>
  )
}
