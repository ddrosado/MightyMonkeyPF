import React, { useRef } from "react";
import { useState } from "react";
import uploadImage from "../../pages/api/uploadImage";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import style from './Upload.module.css'
import  Modal from "../modal/Modal"

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
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show,setShow] = useState(false)
  const { data, mutate } = useSWR("api/user", fetcher);

  const inputFile = useRef()

  const uploadFileHandler = async (e) => {
    const archive = e.target.files[0];
    setFile(archive);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(archive);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        setLoading(true);
        const res = await uploadImage(file, `avatar/${data.email}`);
        await updateUser(data.email, res);
        await updateSession();
        setShow(false)
        mutate({...data,image:img})
        setFile(null);
        setImg(null);
        setLoading(!Boolean(res));
      } catch (error) {
        console.log(error);
        alert("Upload has failed, try again");
      }
    }
  };

  return (
    <>
      <img src={data?.image} className={style.avatar} onClick={()=>{setShow(true)}}/>
      {
        show ?
      <Modal 
        uploadFileHandler={uploadFileHandler}
        handleSubmit={ handleSubmit}
        data={data}
        img={img}
        loading={loading}
        onClose={()=>setShow(false)}
      >     
       <hr/>
          <img src={img || data?.image} alt="" className={style.avatarModal} onClick={()=> inputFile.current.click()}/>
          <hr/>
          <form onSubmit={handleSubmit}>
            <input
              id="file"
              type="file"
              accept=".jpg, .png, .gif"
              onChange={uploadFileHandler}
              ref={inputFile}
              style={{display:'none'}}
            />
            {loading ? <p>Processing...</p> : null}
            <button style={{display: loading && 'none'}} value="avatar">ACCEPT</button>
            <button disabled={img ? false : true} style={{display: loading && 'none'}} onClick={()=>{setFile(null); setImg(null)}} type="button">RESET</button>
          </form>
      </Modal>
      :null
      }
    </>
  );
}
