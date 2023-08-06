"use client";
import { Carousel } from "@material-tailwind/react";
import style from '../InfoHome.module.css'

import Image from "next/image";

export function CarouselDefault({ images }) {

  return (
    <Carousel className={style.carousel}>
      <Image
        src={images[0]}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={images[1]}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={images[2]}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
