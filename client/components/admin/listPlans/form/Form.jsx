"use-client"
import React from 'react'
import style from "./FormSport.module.css" 
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { deletePlans, postPlans, putPlans } from '../../../../redux/actions/plansActions'
import { useEffect } from 'react'
import { getFindPlan } from '../../../../redux/features/plansSlice'
import { validationPlans } from '../../validations/validations'



export const Form = (props) => {

    const dispatch = useDispatch()
    const planFind = useSelector(state=> state.plans.onePlan)

    const [plan, setPlan] = useState({
        name:"",
        description:"",
        price: "",
        duration: ""
    })

    const [errors, setErrors] = useState({})

    //--------------useEffect-----------------------

    useEffect(()=>{
        props.id? dispatch(getFindPlan(props.id)) : 
        setPlan({
          name:"",
          description:"",
          price: "",
          duration: ""
      })
    },[])

    useEffect(()=>{
      props.id?
        setPlan({
            name: planFind?.name,
            description: planFind?.description,
            price : planFind?.price,
            duration : planFind?.duration
        }) :
        null
    },[planFind])

    useEffect(()=>{
        
        setErrors(validationPlans(plan))
      
    }, [plan])

    //------------HANDLERS----------------------

    const handleChange = (e)=>{
        setPlan({
            ...plan,
            [e.target.id] : e.target.value
        })
    }

    const handleCreate = async(e)=>{
        e.preventDefault()
        if (Object.keys(errors).length === 0){

          const resp = await dispatch(postPlans(plan))
          if(resp.meta.requestStatus == "fulfilled"){
              alert("Successfully created!")
              setPlan({
                  name:"",
                  description:"",
                  price: "",
                  duration:""
              })
          } else {
              alert("Could not create :(")
          }
        }
    }

    const handleEdit = async(e, id)=>{
        e.preventDefault()
        const resp = await dispatch(putPlans({...plan, id: id}))
        if(resp.meta.requestStatus == "fulfilled"){
            alert("Successfully edited!")
        } else {
            alert("Could not edit :(")
        }
    }

    const handleDelete = async(id)=>{
      const resp = await dispatch(deletePlans(id))
    if (resp.meta.requestStatus == "rejected") {
      alert("Could not delete plan :(");
    } else {
      alert("Plan successfully removed!")
      props.setCurrent("list")
    }
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
          {errors.name? <label className={style.error}>{errors.name}</label> : null }
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
          {errors.description? <label className={style.error}>{errors.description}</label> : null }
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="text"
            name="plan"
            id="price"
            value={plan.price}
          />
          <label
            className={`${style.label} ${
              !plan.duration? style.noFull : style.full
            }`}
            htmlFor="price"
          >
            Price
          </label>
          {errors.price? <label className={style.error}>{errors.price}</label> : null }
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="text"
            name="plan"
            id="duration"
            value={plan.duration}
          />
          <label
            className={`${style.label} ${
              !plan.duration? style.noFull : style.full 
              }`}
            htmlFor="duration"
          >
            Duration
          </label>
          {errors.duration? <label className={style.error}>{errors.duration}</label> : null }
        </div>
        <div className={style.buttons}>
          <button onClick={props.id? (e)=>handleEdit(e, props.id) : (e)=>handleCreate(e)} className={`${style.submit} ${Object.keys(errors).length? style.errors : null }`} >
            {props.id? "edit" : "create"} 
          </button>
          {planFind? <button type='button' onClick={()=>handleDelete( planFind.id)} className={style.delete}>Delete</button> : null}
        </div>
      </form> 
    </>
  )
}
