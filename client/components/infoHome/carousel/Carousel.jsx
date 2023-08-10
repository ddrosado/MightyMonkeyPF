"use client";
import { Carousel } from "@material-tailwind/react";
import style from '../InfoHome.module.css'
import {useState} from "react"

import Image from "next/image";
import { useEffect } from "react";
import { IANAZone } from "luxon";

export function CarouselDefault(props) {

  const [images, setImage] = useState([])

  useEffect(()=>{
    setImage(props.images? props.images : props.sportFind?.gallery)
  },[props])


  return (
    <Carousel className={style.carousel}>
      {images?.map(img=>{
        return  <Image
        src={img}
        alt="image"
        className="h-full w-full object-cover"
        width={props.sportFind? 300 : null}
        height={props.sportFind? 300 : null}
      />
    })
  }
    </Carousel>
  );
}

      {/* <Image
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
      /> */}