import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Modal({ source, handleSubmit }) {
  const [img, setImg] = useState(null);
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
  const handleClickOverFileInput = () => {
    inputFile.current.click();
  };

  return (
    <>
{/* You can open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>
    </>
    // <div  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    //   <img src={source} alt="" onClick={handleClickOverFileInput} />
    //   <span>CAMBIAR AVATAR</span>

    //   <form onSubmit={handleSubmit}>
    //     <input
    //       id={"archive"}
    //       type="file"
    //       accept=".jpg, .png, .gif"
    //       onChange={uploadFileHandler}
    //       ref={inputFile}
    //     />

    //     <>
    //       <button>Upload</button>

    //       <button type="button">Discard</button>
    //     </>
    //   </form>
    // </div>
  );
}

export default Modal;
