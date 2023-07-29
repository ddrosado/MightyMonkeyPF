import React, { useEffect, useState } from 'react'
import style from "./FormCount.module.css"
import {useDispatch} from "react-redux"
import { postCourt } from '../../../../redux/actions/courtsAction'
import { getSports } from '../../../../redux/actions/sportsActions'

export const FormCourt = (props) => {


  const dispatch = useDispatch()

  const [court, setCourt] = useState({
    sport: "",
    name:  "",
    description:  "",
    image:  "",
    isAvailable: true,
    nonMemberPrice:  0,
    memberPrice:0
  });

  useEffect(()=>{
    setCourt({
      sport: props.sport ,
      name: props.court?.name ,
      description: props.court?.description,
      image: props.court?.image ,
      isAvailable:  props.court?.isAvailable ,
      nonMemberPrice: props.court?.nonMemberPrice,
      memberPrice: props.court?.memberPrice
  })
  }, [props.court])

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
    const resp = await dispatch(postCourt(court))
    if(resp.meta.requestStatus == "rejected"){
      console.log(resp)
      alert("Lo lamento no se pudo crear la cancha")
    } else{
      alert("se a creado correctamente la cancha")
      if(props.setCreate){
        props.setCreate(!props.create)
      }
    }
    setCourt({
      sport: "",
      name: "",
      description: "",
      image: "",
      isAvailable: true,
      nonMemberPrice: 0,
      memberPrice: 0
    })
  }

  return (
    <form className={style.form}>
            <label className={style.title}>Court</label>
            {props.handleBack? <svg
            onClick={()=>handleBack(2)}
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
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="sport"
              value={court.sport}
            />
            <label
              className={`${style.label} ${
                court?.sport?.length ? style.full : style.noFull
              }`}
              htmlFor="sport"
            >
              Sport
            </label>
          </div>
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
              htmlFor="name"
            >
              Name
            </label>
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
              htmlFor="description"
            >
              Description
            </label>
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="image"
              value={court.image}
            />
            <label
              className={`${style.label} ${
                court?.image?.length ? style.full : style.noFull
              }`}
              htmlFor="image"
            >
              Image(url)
            </label>
          </div>
          <div className={style.priceCourt}>
            <label className={style.priceLabel}>Price</label>
            <div>
            <div>
            <label
              className={style.labelPrice}  
              //   court.memberPrice.length ? style.full : style.noFull
              // }`}
              htmlFor="memberPrice"
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
          </div>
          <div>
            <label
              className={style.labelPrice}
              //   court.nonMemberPrice.length ? style.full : style.noFull
              // }`}
              htmlFor="nonMemberPrice"
            >
              No Member:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              className={style.inputPrice}
              type="text"
              name="court"
              id="nonMemberPrice"
              value={court.nonMemberPrice}
            />
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
          <button className={style.submit} onClick={(e)=>handleSubmit(e)}>
            {props.court? "Edit" : "Create"}
          </button>
        </form>
  )
}
