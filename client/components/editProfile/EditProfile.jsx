import { useDispatch, useSelector } from "react-redux";
import style from "./EditProfile.module.css"
import { putUser } from "../../redux/actions/userActions";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const EditProfile = (props) => {

console.log(props.data)

const [newData, setNewData] = useState({
  name: props.data.name,
  surname: props.data.surname,
  telephone: props.data.telephone,
  email: props.data.email
})


// shows inputs
const [editingName, setEditingName] = useState(false);
const [editingSurname, setEditingSurname] = useState(false);
const [editingPhone, setEditingPhone] = useState(false);
const [editingProfilePhoto, setEditingProfilePhoto] = useState(false);


const dispatch = useDispatch();

//handle change
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setNewData({
    ...newData,
    [name]: value,
  });
};


const handleChangePhone = (phone) => {
  setNewData(({
    ...newData,
    phone: phone,
  }));
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

console.log(newData)

// mandar la data
const handleUserUpdate = (e) => {
  e.preventDefault();
  dispatch(putUser(newData));
};

return (
  <div className={style.container}>

    <form 
    onSubmit={handleUserUpdate}
    className={style.profileForm}>
      <div className={style.img}>
        <div>
          image
        </div>
      </div>

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

      <FontAwesomeIcon 
      icon={faFloppyDisk}
      className={style.saveIcon} />

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
            
            <FontAwesomeIcon 
            icon={faFloppyDisk}
            className={style.saveIcon} />
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
              country={'ar'}
              value={newData.phone}
              onChange={handleChangePhone}
            />
            </div>

            <FontAwesomeIcon 
            icon={faFloppyDisk}
            className={style.saveIcon} />
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

        <div>
          <h2 className={style.userDataLabel}>Upload profile photo </h2>
          {editingProfilePhoto ? (
            
            <div className={style.inputContainer}>
              <label
    for="formFile"
    class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    >Default file input example</label>
            <input
              type="file"
              name="profilePhoto"
              value={newData.profilePhoto}
              onChange={handleChange}
              className={style.fileInput}
            />
            
            <FontAwesomeIcon 
            icon={faFloppyDisk}
            className={style.saveIcon} />
            </div>
          ) : (
            <input
              type="file"
              className={style.fileInput}
            />
          )}
        </div>


            <div className={style.buttonsContainer}>
        
          <button 
          className={style.cancelButton}
          value="save"
          type="submit">Save</button>
        

        
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
);
}
  
  export default EditProfile;
  