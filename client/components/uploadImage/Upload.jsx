import React, { useRef } from "react";
import { useState } from "react";
import uploadImage from "../../pages/api/uploadImage";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import style from './Upload.module.css'
import  Modal from "../modal_avatar/Modal_avatar"

const updateUser = async (email, image) => {
  const res = await fetch("api/users", {
    method: "PUT",
    body: JSON.stringify({
      email: email,
      image: image,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
const updateSession = async () => {
  const res = await fetch("api/login");
  const data = await res.json();
  return data;
};

export default function Upload() {
  const [file, setFile] = useState("");

  const [loading, setLoading] = useState(false);
  const { data } = useSWR("api/user", fetcher);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        setLoading(true);
        const res = await uploadImage(file, `avatar/${data.email}`);
        setLoading(!Boolean(res));
        await updateUser(data.email, res);
        await updateSession();
        alert("Update succesful");
        setFile(null);
      } catch (error) {
        console.log(error);
        alert("Upload has failed, try again");
      }
    }
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setFile(null);
    setImg(null);
  };


  return (
 
      <>
      <div >
        <img src={data?.image} alt="" className={style.avatar}/>
      </div>
      <Modal
        source={data?.image}
        handleSubmit={handleSubmit}
      ></Modal>
      </>
  );
}
