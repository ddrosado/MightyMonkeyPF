import React, { useEffect } from "react";






const thanksForSubs = () => {
useEffect( async () => {
const post = await axios.put('http://localhost:3000/api/users')
},[]);

    
return (
    <div>
        <div >
            <h1>Thanks For Subscibtion</h1>
            <button ></button>
        </div>
    </div>
);
};

export default thanksForSubs;