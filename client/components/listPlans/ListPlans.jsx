"use-client"
import React, { useState } from 'react'
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { getPlans } from '../../redux/actions/plansActions'
import { List } from './list/List';
import { Form } from './form/Form';


const ListPlans = () => {
  
  const [current, setCurrent] = useState("list")
  const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getPlans()) 
    },[current])



  return (
    <>
    {current == "list"?  <List setCurrent={setCurrent}/> : current == "create"? <Form setCurrent={setCurrent}/> : <Form setCurrent={setCurrent} id={current} />}
    </>
  )
}

export default ListPlans
