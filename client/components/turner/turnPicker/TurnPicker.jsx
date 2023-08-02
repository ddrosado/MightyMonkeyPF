import React from "react";
import style from "./TurnPicker.module.css";

const TurnPicker = () => {
  return (
    <div className={style.turnsContainer}>
      <h2>Pick a turn</h2>
      <div className={style.btnsContainer}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
};

export default TurnPicker;
