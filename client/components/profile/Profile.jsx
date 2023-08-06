'use client'
import React, { useState, useEffect } from 'react';
import style from "./Profile.module.css"
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher';
import axios from 'axios';
import { mutate } from 'swr';
const MyProfile = () => {
  const { data, error } = useSWR("api/user", fetcher);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    if (data) {
      setEditedData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put("api/users", editedData);
      setIsEditing(false);

      // Después de una actualización exitosa, desencadena una revalidación de datos para actualizar la interfaz de usuario
      mutate("api/user"); // Esto volverá a obtener los datos para el endpoint "api/user"

    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    data ? (
      <div className={style.container}>
        <div className={style.img}>
          <img className={style.imgProfile} src={editedData.image || ''} alt="Profile" />
        </div>
        <div className={style.userdata}>
          <div>
            <h2 className={style.userDataLabel}>Name:</h2>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedData.name || ''}
                onChange={handleChange}
              />
            ) : (
              <strong>{data.name} </strong>
            )}
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
          <div>
            <h2 className={style.userDataLabel}>Email:</h2>
            <strong>{data.email}</strong>
          </div>
          <div>
            <h2 className={style.userDataLabel}>Phone:</h2>
            <strong>
              {isEditing ? (
                <input
                  type="text"
                  name="telephone"
                  value={editedData.telephone || ''}
                  onChange={handleChange}
                />
              ) : (
                data.telephone ? data.telephone : '-'
              )}
            </strong>
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
          <div>
            <h2 className={style.userDataLabel}>Status:</h2>
            <strong>{data.isMember ? <p>Premium Membership</p> : <p>Not associated</p>}</strong>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default MyProfile;
