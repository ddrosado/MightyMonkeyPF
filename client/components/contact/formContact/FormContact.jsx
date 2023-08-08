import React from 'react'
import style from "./FormContact.module.css"

import Image from 'next/image'

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
        <button
  type="button"
  className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
  Send
</button>
    </form>
  )
}

export default FormContact

