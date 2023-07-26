import React from "react";
import Detail from "../../../components/detail/Detail";


const page = ({params}) => {
  
  return (
    <div>
      <Detail sportName={params.sport} />
    </div>
  );
};

export default page;