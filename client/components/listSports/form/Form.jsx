"use client";
import React, { useState } from "react";
import style from "./Form.module.css";
import { FormSport } from "./formSport/FormSport";
import { FormCourt } from "./formCourt/FormCourt";

export const Form = ({ setCreate }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageSport = (e) => {
    setCurrentPage(2)
  };
  

  const handleBack = ()=>{
    setCurrentPage(currentPage-1)
  }


  return (
      <div className={style.container}>
        {currentPage == 1? <FormSport setCreate={setCreate}  handlePageSport={handlePageSport}/> : null }
        {currentPage > 1? <FormCourt handleBack={handleBack}/> : null}
      </div>
  );
};
