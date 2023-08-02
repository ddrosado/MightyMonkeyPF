'use client'
import React, { useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "../../pages/fetcher";
import axios from "axios";






const thanksForSubs = () => {
const { data, error } = useSWR("api/user", fetcher);
const router = useRouter();

useEffect( async () => {
const post = await axios.put('http://localhost:3000/api/users',{
    email: data.email,
    isMember: true
})
},[]);

    
return (
    <div>
        <div >
            <h1>Thanks For Subscibtion</h1>
            <button>butonnnnnnnnnnn</button>
        </div>
    </div>
);
};

export default thanksForSubs;