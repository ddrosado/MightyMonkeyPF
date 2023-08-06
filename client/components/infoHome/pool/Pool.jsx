"use client";
import React from "react";
import style from "../InfoHome.module.css";
import { CarouselDefault } from "../carousel/Carousel";
import img1 from "../../../assets/images/pool/pool1.jpg";
import img2 from "../../../assets/images/pool/pool2.jpg";
import img3 from "../../../assets/images/pool/pool3.jpg";

const Pool = () => {
  let imagesPool = [img1, img2, img3];

  return (
    <div className={style.infoContainerPool}>
      <div className={style.titleContainerPool}>
        <h1>
          Come and enjoy our <span> POOL !</span>
        </h1>
      </div>
      <div className={style.infoDisplay}>
        <CarouselDefault images={imagesPool} />
        <div className={style.pContainerPool}>
          <p>
            Welcome to our tranquil oasis, where a refreshing escape awaits you!
            Dive into pure bliss at our enchanting pool, a haven designed to
            rejuvenate your senses. Immerse yourself in the crystal-clear
            waters, basking under the warm sun, and let all your worries float
            away. Our poolside bar offers a delightful selection of refreshing
            beverages and tropical cocktails to quench your thirst. Whether you
            seek a leisurely swim or wish to lounge in our comfortable sunbeds,
            our attentive staff ensures your utmost relaxation and comfort.
            Surrounded by lush greenery and serene ambiance, our pool is an
            idyllic retreat for families, couples, and friends alike. Come,
            unwind, and create unforgettable moments of joy and serenity. Dive
            in, and let the fun begin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pool;
