"use client";
import { useDispatch } from "react-redux";
import style from "./EditProfile.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faFloppyDisk,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "../../pages/api/fetcher";
import Upload from "../uploadImage/Upload";
import { putUser, updateSession } from "./actions_profile";

const EditProfile = (props) => {

  const { data, mutate } = useSWR("api/user", fetcher);

  const [newData, setNewData] = useState({
    name: data.name,
    surname: data.surname,
    telephone: data.telephone,
    email: data.email,
  });

  // shows inputs
  const [editingName, setEditingName] = useState(false);
  const [editingSurname, setEditingSurname] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  // está editando
  const onClick = (field) => {
    switch (field) {
      case "name":
        setEditingName(true);
        break;
      case "surname":
        setEditingSurname(true);
        break;
      case "phone":
        setEditingPhone(true);
        break;
      case "profilePhoto":
        setEditingProfilePhoto(true);
        break;
      default:
        setEditing(false);
        break;
    }
  };

  //  console.log(newData)

  // mandar la data
  const handleUserUpdate = async (e) => {
    e.preventDefault();
    try {
      await putUser(newData);
      await updateSession();
      mutate({...data,name:newData.name,surname:newData.surname,telephone:newData.telephone})
      props.changeComponent(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.profileContainer}>
        <Upload />
        <form onSubmit={handleUserUpdate} className={style.profileForm}>
          <div className={style.img}></div>

          <div className={style.userdata}>
            <div>
              <h2 className={style.userDataLabel}>Name: </h2>

              {editingName ? (
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="name"
                    value={newData.name}
                    onChange={handleChange}
                    className={style.profileInput}
                  />
                </div>
              ) : (
                <div className={style.actualData}>
                  {props.data.name}
                  <button onClick={() => onClick("name")}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              )}
            </div>

            <div>
              <h2 className={style.userDataLabel}>Surname: </h2>
              {editingSurname ? (
                <div className={style.inputContainer}>
                  <input
                    type="text"
                    name="surname"
                    value={newData.surname}
                    onChange={handleChange}
                    className={style.profileInput}
                  />
                </div>
              ) : (
                <div className={style.actualData}>
                  {props.data.surname}
                  <button onClick={() => onClick("surname")}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              )}
            </div>

            <div>
              <h2 className={style.userDataLabel}>Phone:</h2>
              {editingPhone ? (
                <div className={style.inputContainer}>
                  <div className={style.phoneInput}>
                    <PhoneInput
                      country={"ar"}
                      value={newData.telephone}
                      onChange={(telephone) =>
                        setNewData((prevData) => ({ ...prevData, telephone }))
                      }
                    />
                  </div>
                </div>
              ) : (
                <div className={style.actualData}>
                  {props.data.telephone}
                  <button onClick={() => onClick("phone")}>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              )}
            </div>

            <div className={style.buttonsContainer}>
              <button className={style.saveButton} type="submit"  >
                <FontAwesomeIcon icon={faCheck} />
                <span> Save changes</span>
              </button>

              <button
                className={style.cancelButton}
                value="cancel"
                onClick={(e) => {
                  e.preventDefault();
                  props.changeComponent(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} /> Cancel editing
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
