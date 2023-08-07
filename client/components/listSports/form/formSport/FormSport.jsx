import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import style from "./FormSport.module.css";
import { useDispatch } from "react-redux";
import { getSports, postSports, putSport, deletSport } from "../../../../redux/actions/sportsActions";
import { validationSport } from "../validations/validations";
import { uploadImage } from "../../../../pages/api/firebaseConfig";


export const FormSport = (props) => {
  const dispatch = useDispatch();
  const [sport, setSport] = useState({
    name: "",
    description: "",
    image: "",
    gallery : []
  });

  const [errors, setErrors] = useState({})
  const sports = useSelector(state=>state.sports.sports)

  //-----------------USE EFECTS------------------------
  useEffect(()=>{
    setSport({
      name: props.sport?.name,
      description: props.sport?.description,
      image: props.sport?.image,
      gallery: Array.isArray(props.sport?.gallery) ? [...props.sport.gallery] : []
    })
  },[props.sport])

  useEffect(()=>{
    setErrors( validationSport({
      ...sport,
    }, sports))
  },[sport])


  //-----------------------HANDLERS---------------------------
  const handleChange = async(e) => {
    if(e.target.id == "gallery"){
      const res = await uploadImage(e.target.files[0], sport.name)
      setSport((prevSport) => {
        return {
          ...prevSport,
          gallery: [...(prevSport.gallery || []), res],
        };
      });
    
    } else if(e.target.id == "image"){
     const resp  = await uploadImage(e.target.files[0],  sport.name)
      setSport({
        ...sport,
        [e.target.id] : resp
      })
    } else {
      setSport({
        ...sport,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0){
      const resp = await dispatch(postSports(sport));
      if (resp.meta.requestStatus == "rejected") {
        alert("Lo lamento no se pudo crear el deporte");
      } else {
        props.handlePageSport ? props.handlePageSport(2) : null;
    }
    }
  };
  


  const handleEdit = async (e)=>{
    e.preventDefault()
    if (Object.keys(errors).length === 0){
      const resp = await dispatch(putSport({...sport, id: props.sport.id}))
      if (resp.meta.requestStatus == "rejected") {
        alert("Lo lamento no se pudo editar el deporte");
        setSport({
          name: props.sport?.name,
          description: props.sport?.description,
          image: props.sport?.image,
          gallery: props.sport?.gallery
        });
      } else {
        alert("deporte correctamente editado!")
      }
    }
  }

  const handleDelete= async (e, id)=>{
    e.preventDefault()
    const resp = await dispatch(deletSport(id))
    if (resp.meta.requestStatus == "rejected") {
      alert("Lo lamento no se pudo eliminar el deporte");
    } else {
      alert("deporte correctamente eliminado!")
      props.setCurrent("list")
    }
  }

  const deleteImage = (url)=>{
    const newGallery = sport.gallery.filter(file=> file !== url)
    setSport({
      ...sport,
      gallery : newGallery
    })
  }



  return (
    <>
      <form className={style.form}>
        <label className={style.title}>Sport</label>
        {!props.sport ? (
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
            type="file"
            name="sport"
            id="image"
          />
          <div className={style.containerImg}>
            
            {sport.image? <div style={{ backgroundImage: `url(${sport.image})` }}></div> : null}
          </div>
          {errors.image? <label className={style.error}>{errors.image}</label> : null }
        </div>
        <div className={style.div}>
          <input
            onChange={(e) => handleChange(e)}
            className={style.input}
            type="file"
            multiple
            name="sport"
            id="gallery"
          />
          <div className={style.containerImg}>
            {sport.gallery?.map(file=> {
              return(
              <div style={{ backgroundImage: `url(${file})` }}>
                <button type="button" onClick={()=>deleteImage(file)}>x</button>
              </div>)
            }
            )}
          </div> 
          {errors.gallery? <label className={style.error}>{errors.gallery}</label> : null }
          </div>
        <div className={style.buttons}>
          <button className={`${style.submit} ${Object.keys(errors).length? style.errors : null }`} onClick={(e) => props.sport? handleEdit(e) : handleSubmitCreate(e)}>
            {props.sport? "Edit" : "Create"}
          </button>
          {props.sport? 
          <button onClick={(e)=>handleDelete(e, props.sport.id)} className={style.delete}>Delete</button> 
          : null 
          }
        </div>
      </form> 
    </>
  );
};
