"use client";
import React, { useState } from "react";
import style from "./Form.module.css";
import { FormSport } from "./formSport/FormSport";
import courts from "../../../pages/api/courts";
import { FormCourt } from "./formCourt/FormCourt";

export const Form = ({ setCreate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [sport, setSport] = useState({
    name: "",
    description: "",
    image: "",
    courts: []
  });

  const handleChange = (e) => {
    if(e.target.name == sport){
        setSport({
          ...sport,
          [e.target.id]: e.target.value,
        });
    } else {
        setSport({
            ...sport,
            [courts[e.target.id]] : e.target.value
        })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage+1)
    console.log(sport);
  };

  const handleBack = ()=>{
    setCurrentPage(currentPage-1)
  }

  return (
      <div className={style.container}>
        {currentPage == 1? <FormSport setCreate={setCreate} handleChange={handleChange} handleSubmit={handleSubmit} sport={sport} setSport={setSport} /> : null }
        {currentPage > 1? <FormCourt handleBack={handleBack} handleChange={handleChange}/> : null}
      </div>
  );
};
