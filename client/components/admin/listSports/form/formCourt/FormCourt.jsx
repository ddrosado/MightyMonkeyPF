import React, { useEffect, useState } from 'react'
import style from "./FormCount.module.css"
import {useDispatch, useSelector} from "react-redux"
import { postCourt, putCourt } from '../../../../../redux/actions/courtsAction'
import { validationCourt } from '../../../validations/validations'


export const FormCourt = (props) => {

  const dispatch = useDispatch()

  const [court, setCourt] = useState({
    sport: "",
    name:  "",
    description:  "",
    isAvailable: true,
    noMemberPrice:  0,
    memberPrice:0
  });
  const sports = useSelector(state=>state.sports.sports)

  const [errors, setErrors] = useState({})

//----------------------useEffects------------------------

  useEffect(()=>{
    setCourt({
      sport: props.sport ,
      name: props.court?.name ,
      description: props.court?.description,
      isAvailable:  props.court?.isAvailable ,
      noMemberPrice: props.court?.noMemberPrice,
      memberPrice: props.court?.memberPrice
  })
  }, [props.court])

  useEffect(()=>{
    if(!props.court){
      setErrors(validationCourt(court, sports))
    }
  },[court])

  // ---------------------handlers------------------------------------
  const handleChange = (e) => {
    if(e.target.type == "radio"){
      setCourt({
        ...court,
        [e.target.name]: e.target.value
      })
    } else {
      setCourt({
        ...court,
        [e.target.id] : e.target.value
      }) 
    }
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (Object.keys(errors).length === 0){

      const resp = await dispatch(postCourt(court))
      if(resp.meta.requestStatus == "rejected"){
        console.log(resp)
        alert("Could not create court")
      } else{
        alert("Successfully created")
        if(props.setCreate){
          props.setCreate(!props.create)
        }
        setCourt({
          sport: "",
          name: "",
          description: "",
          isAvailable: true,
          noMemberPrice: 0,
          memberPrice: 0
        })
      }

    }
  }


  const handleEdit = async (e)=>{
    e.preventDefault()
    const resp = await dispatch(putCourt({...court, id: props.court.id}))
    if (resp.meta.requestStatus == "rejected") {
      alert("Could not edit court");
      setCourt({
        sport: "",
        name: "",
        description: "",
        isAvailable: true,
        noMemberPrice: 0,
        memberPrice: 0
      });
    } else {
      alert("Court successfully edit!")
    }
  }


  return (
    <form className={style.form}>
            <label className={style.title}>{props.court? props.sport : "Court"}</label>
            {props.handleBack? <svg
            onClick={()=>props.handleBack(2)}
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
          </svg> : null}
          {props.court? null : 
          <div>
            <select placeholder='Sport' onChange={(e)=>handleChange(e)} className={style.select} name="court" id="sport">
              <option disabled selected value="">Select in sport...</option>
              {sports?.map(sport=> <option value={sport.name}>{sport.name}</option>)}
            </select>
            {errors.sport? <label className={style.error}>{errors.sport}</label> : null }
          </div>}
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="name"
              value={court.name}
            />
            <label
              className={`${style.label} ${
                court?.name?.length ? style.full : style.noFull
              }`}
            >
              Name
            </label>
            {errors.name? <label className={style.error}>{errors.name}</label> : null }
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="description"
              value={court.description}
            />
            <label
              className={`${style.label} ${
                court?.description?.length ? style.full : style.noFull
              }`}
            >
              Description
            </label>
            {errors.description? <label className={style.error}>{errors.description}</label> : null }
          </div>
          <div className={style.priceCourt}>
            <label className={style.priceLabel}>Price</label>
            <div>
            <div>
            <label
              className={style.labelPrice}  
            >
              Member:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className={style.inputPrice}
              type="text"
              name="court"
              id="memberPrice"
              value={court.memberPrice}
            />
            {errors.memberPrice? <label className={style.error}>{errors.memberPrice}</label> : null }
          </div>
          <div>
            <label
              className={style.labelPrice}
            >
              No Member:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className={style.inputPrice}
              type="text"
              name="court"
              id="noMemberPrice"
              value={court.noMemberPrice}
            />
            {errors.noMemberPrice? <label className={style.error}>{errors.noMemberPrice}</label> : null }
          </div>
          </div>
          </div>
          <div className={style.isAvailable}>
            <label>Is Available?</label>
            <div>

            <div>
              <input onChange={(e)=>handleChange(e)} type="radio" name='isAvailable' id='Yes' value={true}  checked={court?.isAvailable? true : false }/>
              <label htmlFor="Yes">Yes</label>
            </div>

            <div>
              <input onChange={(e)=>handleChange(e)} type="radio" name='isAvailable' id='Not' value={false} checked={court?.isAvailable? false : true}/>
              <label htmlFor="Not">Not</label>
            </div>


            </div>
          </div>
          <button className={`${style.submit} ${Object.keys(errors).length? style.errors : null }`} onClick={(e)=>props.court?  handleEdit(e): handleSubmit(e) }>
            {props.court? "Edit" : "Create"}
          </button>
        </form>
  )
}
