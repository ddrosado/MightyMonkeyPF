import React from 'react'
import style from "./FormContact.module.css"

const FormContact = () => {
  return (
    <form className={style.container} action="">
        <div>
            <label>Name</label>
            <input type="text" placeholder='Name'/>     
        </div>
        <div>
            <label>Surname</label>
            <input type="text" placeholder='Surname' />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" placeholder='Phone'/>    
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Aqui deje su mensaje...'></textarea>
        <button>Enviar</button>
        <h1 className={style.logo}>Logo</h1>
    </form>
  )
}

export default FormContact