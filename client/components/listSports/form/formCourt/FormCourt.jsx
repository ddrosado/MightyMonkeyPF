import React from 'react'
import style from "./FormCount.module.css"

export const FormCourt = ({handleBack, handleChange }) => {
  return (
    <form className={style.form}>
          <svg
            onClick={handleBack}
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
              name="court"
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
              name="court"
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
              name="court"
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
          <div className={style.priceCourt}>
            <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="memberPrice"
            />
            <label
              className={`${style.label} ${
                sport.image.length ? style.full : style.noFull
              }`}
              htmlFor="memberPrice"
            >
              Member
            </label>
            </div>
            <div>
            <input
              onChange={(e) => handleChange(e)}
              className={style.input}
              type="text"
              name="court"
              id="noMemberPrice"
            />
            <label
              className={`${style.label} ${
                sport.image.length ? style.full : style.noFull
              }`}
              htmlFor="noMemberPrice"
            >
              Not Member
            </label>
          </div>
          </div>
          <button className={style.submit} onClick={handleSubmit}>
            Next
          </button>
        </form>
  )
}
