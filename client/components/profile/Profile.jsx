'use client'
import React, { useState, useEffect } from 'react';
import style from "./Profile.module.css"
import useSWR from "swr";
import { fetcher } from '../../pages/api/fetcher';
import axios from 'axios';

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
      // Puedes hacer una nueva solicitud SWR aquí para actualizar los datos en el componente con los datos actualizados desde el servidor.
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje de error al usuario.
    }
  };

  return (
    data ? (
      <div className={style.container}>
        <div className={style.img}>
          <div>
            <img src={editedData.image || ''} alt="Profile" />
          </div>
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
              <strong>{data.name}</strong>
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
