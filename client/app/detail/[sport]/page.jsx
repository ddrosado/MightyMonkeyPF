import React from "react";
import Detail from "../../../components/detail/Detail";


const page = ({params}) => {

  // console.log(params.sport)
  return (
    <div>
      <h1 style={{fontSize: "2em", color: "white"}}>{params.sport}</h1>
      <Detail />
    </div>
  );
};

export default page;