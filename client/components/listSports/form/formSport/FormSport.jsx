import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import style from "./FormSport.module.css";
import { useDispatch } from "react-redux";
import { getSports, postSports, putSport, deletSport } from "../../../../redux/actions/sportsActions";
import { validationSport } from "../validations/validations";

export const FormSport = (props) => {
  const dispatch = useDispatch();

  const [sport, setSport] = useState({
    name: "",
    description: "",
    image: ""
  });

  const [errors, setErrors] = useState({})

  useEffect(()=>{
    setSport({
      name: props.sport?.name,
      description: props.sport?.description,
      image: props.sport?.image
    })
  },[props.sport])

  const handleChange = (e) => {
    setSport({
      ...sport,
      [e.target.id]: e.target.value,
    });
    setErrors( validationSport({
      ...sport,
      [e.target.id]: e.target.value,
    }, e.target.id, errors))
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const resp = await dispatch(postSports(sport));
    if (resp.meta.requestStatus == "rejected") {
      alert("Lo lamento no se pudo crear el deporte");
    } else {
      props.handlePageSport ? props.handlePageSport(2) : null;
    }
  };


  const handleEdit = async (e)=>{
    e.preventDefault()
    const resp = await dispatch(putSport({...sport, id: props.sport.id}))
    if (resp.meta.requestStatus == "rejected") {
      alert("Lo lamento no se pudo editar el deporte");
      setSport({
        name: props.sport?.name,
        description: props.sport?.description,
        image: props.sport?.image
      });
    } else {
      alert("deporte correctamente editado!")
    }
  }

  const handleDelete= async (e, id)=>{
    e.preventDefault()
    const resp = await dispatch(deletSport(id))
    if (resp.meta.requestStatus == "rejected") {
      alert("Lo lamento no se pudo eliminar el deporte");
    } else {
      alert("deporte correctamente eliminado!")
    }
  }


  return (
    <>
      <form className={style.form}>
        <label className={style.title}>Sport</label>
        {props.setCurrent ? (
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
        ) : null}
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="text"
            name="sport"
            id="name"
            value={sport.name}
          />
          <label
            className={`${style.label} ${
              sport.name?.length ? style.full : style.noFull
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
            name="sport"
            id="description"
            value={sport.description}
          />
          <label
            className={`${style.label} ${
              sport.description?.length ? style.full : style.noFull
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
            name="sport"
            id="image"
            value={sport.image}
          />
          <label
            className={`${style.label} ${
              sport.image?.length ? style.full : style.noFull
            }`}
            htmlFor="image"
          >
            Image(url)
          </label>
          {errors.image? <label className={style.error}>{errors.image}</label> : null }
        </div>
        <div className={style.buttons}>
          <button className={style.submit} onClick={(e) => props.sport? handleEdit(e) : handleSubmitCreate(e)}>
            {props.sport? "Edit" : "Create"}
          </button>
          {props.sport? <button onClick={(e)=>handleDelete(e, props.sport.id)} className={style.delete}>Delete</button> : null}
        </div>
      </form> 
    </>
  );
};
