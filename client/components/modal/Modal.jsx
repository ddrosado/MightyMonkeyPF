import React from "react";
import style from "./Modal.module.css"

function Modal({onClose,children}) {

  return (
    <>
      <div className={style.overlay}>
        <div className={style.modalContainer}>
        <button onClick={() => onClose()} className={style.close}>X</button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
