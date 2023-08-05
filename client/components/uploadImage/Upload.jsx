import React, { useRef } from "react";
import { useState } from "react";
import uploadImage from "../../pages/api/uploadImage";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import style from "./Upload.module.css";

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
  const { data } = useSWR("api/user", fetcher);
  const inputFile = useRef();

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
  const handleClickOverFileInput = () => {
    inputFile.current.click()
  };

  return (
    <>
      <div className={style.avatarContainer} onClick={handleClickOverFileInput}>
        <img src={img || data?.image} alt="" />
        <span>CAMBIAR AVATAR</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          id={"archive"}
          type="file"
          accept=".jpg, .png, .gif"
          onChange={uploadFileHandler}
          ref={inputFile}
        />
        {file ? (
          <>
            <button>Upload</button>
            {loading ? (
              <>{`  Loading...`}</>
            ) : (
              <button type="button" onClick={handleDiscard}>
                Discard
              </button>
            )}
          </>
        ) : null}
      </form>
    </>
  );
}
