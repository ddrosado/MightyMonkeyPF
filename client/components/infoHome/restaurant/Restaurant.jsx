"use client";
import React from "react";
import style from "../InfoHome.module.css";
import { CarouselDefault } from "../carousel/Carousel";
import img1 from "../../../assets/images/restaurant/rest1.jpg";
import img2 from "../../../assets/images/restaurant/rest2.jpg";
import img3 from "../../../assets/images/restaurant/rest3.jpg";

const Restaurant = () => {

    let imagesRest = [img1, img2, img3];
    
  return (
    <div className={style.infoContainerRest}>
      <div className={style.titleContainer}>
        <h1>
          Come visit our <span>RESTAURANT !</span>
        </h1>
      </div>
      <div className={style.infoDisplay}>
        <CarouselDefault images={imagesRest} />
        <div className={style.pContainer}>
          <p>
            Welcome to our exquisite restaurant, where culinary delights await!
            Indulge in a delectable array of dishes crafted with passion and
            precision by our talented chefs. From savory starters to
            mouthwatering mains and divine desserts, our menu is a culinary
            journey that will tantalize your taste buds. Whether you savor the
            succulent steaks, savor the delicate seafood, or delight in our
            vegetarian creations, each plate is a masterpiece of flavor and
            presentation. Immerse yourself in a warm and inviting ambiance as
            our attentive staff ensures a dining experience like no other. Come,
            savor the goodness, and leave with unforgettable memories. Bon
            appétit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
