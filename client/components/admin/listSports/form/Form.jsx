"use client";
import React, { useState } from "react";
import style from "./Form.module.css";
import { FormSport } from "./formSport/FormSport";
import { FormCourt } from "./formCourt/FormCourt";
import { Modal } from "../modal/Modal";

export const Form = ({ setCurrent }) => {


  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (num) => {
    setCurrentPage(num)
  };
  

  const handleBack = (num)=>{
    setCurrentPage(currentPage-num)
  }


  return (
      <div className={style.container}>
        {currentPage == 1? <FormSport setCurrent={setCurrent}  handlePageSport={handlePage}/> : null }
        {currentPage == 2? <Modal handlePage={handlePage}/> : null}
        {currentPage == 3? <FormCourt handleBack={handleBack}/> : null}
      </div>
  );
};
