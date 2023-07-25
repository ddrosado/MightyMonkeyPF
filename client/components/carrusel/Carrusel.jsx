"use client";
import React from "react";
import style from "./Carrusel.module.css";
import { useState } from "react";

const Carrusel = () => {
  
  const images = ["imagen.jpg", "imagen1.jpg", "imagen2.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={style.carruselContainer}>
      <button className={style.btn} onClick={handlePrevious}>
        &lt;
      </button>
      <div className={style.imagesContainer}>
        <div className={style.imageWrapper}>
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt={`Imagen ${currentIndex}`}
            className={style.smallImage}
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className={style.bigImage}
          />
        </div>
        <div className={style.imageWrapper}>
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt={`Imagen ${currentIndex + 2}`}
            className={style.smallImage}
          />
        </div>
        
      </div>
      <button className={style.btn} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carrusel;
