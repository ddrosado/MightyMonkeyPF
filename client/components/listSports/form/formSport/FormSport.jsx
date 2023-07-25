import React, { useState } from 'react'
import style from "./FormSport.module.css"

export const FormSport = ({ handlePageSport, setCreate}) => {

  const [sport, setSport] = useState({
    name: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
        setSport({
          ...sport,
          [e.target.id]: e.target.value,
        });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    handlePageSport()
    console.log(sport)
  }

  return (
    <form className={style.form}>
      <label className={style.title}>Sport</label>
          <svg
            onClick={() => setCreate(false)}
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
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="sport"
              id="name"
            />
            <label
              className={`${style.label} ${
                sport.name.length ? style.full : style.noFull
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
              name="sport"
              id="description"
            />
            <label
              className={`${style.label} ${
                sport.description.length ? style.full : style.noFull
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
              name="sport"
              id="image"
            />
            <label
              className={`${style.label} ${
                sport.image.length ? style.full : style.noFull
              }`}
              htmlFor="image"
            >
              Image(url)
            </label>
          </div>
          <button className={style.submit} onClick={(e)=>handleSubmit(e)}>
            Create
          </button>
        </form>
  )
}
