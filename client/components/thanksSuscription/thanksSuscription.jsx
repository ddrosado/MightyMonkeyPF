'use client'

import React from 'react';
import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "axios";
import { fetcher } from "../../pages/api/fetcher";
import { useEffect } from 'react';

const ThanksSuscription = () => {
    const { data, error } = useSWR("api/user", fetcher);
    console.log('esto es el data ',data);

    useEffect( async () => {
    const post = await axios.put('https://e580-179-1-48-61.ngrok-free.app/api/users',{
        email: 'test_user_1751930390@testuser.com',
        isMember: true
    })
    },[]);

        
    return (

        <div class="bg-gray-900 relative overflow-hidden">
            <div class="inset-0 bg-black opacity-25 absolute"></div>
            <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-24 xl:py-40">
                <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                    <span class="font-mitr uppercase text-white">Nuevo usuario premium</span>

                    <h1 class="font-roboto-slab text-4xl sm:text-6xl text-yellow-400 leading-tight mt-4">Gracias por suscribirte a Mighty Monkey's</h1>

                    <div class="max-w-md">
                        <p class="font-source-sans-pro text-white mt-6 text-lg">¡Te damos la bienvenida a nuestro portal premium! Disfruta de beneficios y promociones exclusivas.</p>
                    </div>

                    <a href="/home" class="block bg-yellow-500 hover:bg-indigo-400 py-2 px-4 rounded-full text-sm font-mitr text-white uppercase mt-10">Go home</a>
                </div>
                <img class="absolute top-1/2 left-1/2 transform -translate-x-1 -translate-y-1/2" src="https://i.ibb.co/B4B4NLV/logo.png" alt="" />
            </div>
        </div>
    );
}

export default ThanksSuscription;