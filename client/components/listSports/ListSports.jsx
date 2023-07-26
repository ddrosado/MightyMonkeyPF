"use client"
import React, { useState } from 'react'
import { List } from './list/List'
import { Form } from './form/Form'

export const ListSports = () => {

    const [create, setCreate] = useState(false)

  return (
    <>
    {create? <Form setCreate={setCreate}/> : <List setCreate={setCreate}/>}
    </>
  )
}
