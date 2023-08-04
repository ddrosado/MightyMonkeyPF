import React from 'react'
import style from "./FormSport.module.css" 
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { postPlans } from '../../../redux/actions/plansActions'


export const Form = (props) => {

    const dispatch = useDispatch()

    const [plan, setPlan] = useState({
        name:"",
        description:"",
        price: "",
        duration:""
    })

    const handleChange = (e)=>{
        setPlan({
            ...plan,
            [e.target.id] : e.target.value
        })
    }

    const handleCreate = async(e)=>{
        e.preventDefault()
        const resp = await dispatch(postPlans(plan))
        console.log(resp)
    }

  return (
    <>
      <form className={style.form}>
        <label className={style.title}>Plan</label>
          <svg
            onClick={() => props.setCurrent("list")}
            className={`h-14 w-14 text-white ${style.back}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
          </svg>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="text"
            name="plan"
            id="name"
            value={plan.name}
          />
          <label
            className={`${style.label} ${
              plan.name?.length ? style.full : style.noFull
            }`}
            htmlFor="name"
          >
            Name
          </label>
          {/* {errors.name? <label className={style.error}>{errors.name}</label> : null } */}
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="text"
            name="plan"
            id="description"
            value={plan.description}
          />
          <label
            className={`${style.label} ${
              plan.description?.length ? style.full : style.noFull
            }`}
            htmlFor="description"
          >
            Description
          </label>
          {/* {errors.description? <label className={style.error}>{errors.description}</label> : null } */}
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="number"
            name="plan"
            id="price"
            value={plan.price}
          />
          <label
            className={`${style.label} ${
              plan.price?.length ? style.full : style.noFull
            }`}
            htmlFor="image"
          >
            Price
          </label>
          {/* {errors.image? <label className={style.error}>{errors.image}</label> : null } */}
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="number"
            name="plan"
            id="duration"
            value={plan.duration}
          />
          <label
            className={`${style.label} ${
              plan.duration?.length ? style.full : style.noFull
            }`}
            htmlFor="image"
          >
            Duration
          </label>
          {/* {errors.image? <label className={style.error}>{errors.image}</label> : null } */}
        </div>
        <div className={style.buttons}>
          <button onClick={props.id? null : (e)=>handleCreate(e)} className={style.submit} >
            {props.id? "edit" : "create"} 
          </button>
          {/* {props.sport? <button onClick={(e)=>handleDelete(e, props.sport.id)} className={style.delete}>Delete</button> : null} */}
        </div>
      </form> 
    </>
  )
}
