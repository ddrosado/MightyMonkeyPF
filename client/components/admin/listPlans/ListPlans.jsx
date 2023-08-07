"use-client"
import React, { useState } from 'react'
import { List } from './list/List';
import { Form } from './form/Form';


const ListPlans = () => {
  
  const [current, setCurrent] = useState("list")


  return (
    <>
    {current == "list"?  <List setCurrent={setCurrent}/> : current == "create"? <Form setCurrent={setCurrent}/> : <Form setCurrent={setCurrent} id={current} />}
    </>
  )
}

export default ListPlans
