"use client"
import React, { useState } from 'react'
import { List } from './list/List'
import { Form } from './form/Form'
import { Edit } from './edit/Edit'

export const ListSports = () => {

    const [current, setCurrent] = useState("list")

  return (
    <>
    {current == "list" ? <List setCurrent={setCurrent}/> : current == "form" ? <Form setCurrent={setCurrent}/> : <Edit setCurrent={setCurrent} id={current}/>}
    </>
  ) 
}
