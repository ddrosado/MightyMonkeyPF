'use client'

import React from 'react'
import axios from 'axios'
import { useRouter } from "next/navigation";


const doMember = () => {

const router = useRouter()


const urlPay = async (email, reason, frequency, frequency_type, price )=>{ 
    const url = await axios.post('http://localhost:3000/api/pay',
        {
            type: "subscriptions",
            email: email,
            reason: reason,
            price: price,
            frequency: frequency,
            frequency_type: frequency_type
        }
    ).then(({data})=> data.init_point)
    router.push(url)
    
}


return (
<div class="min-h-screen bg-gray-100 overflow-auto">
  <div class="container mx-auto max-w-4xl">
    <div class="mt-10 text-center">
      <h1 class="text-4xl font-bold text-gray-800">Choose your plan</h1>
      <p class="text-lg mt-3 font-semibold">Every plan includes 30 day free trial</p>
    </div>
    <div class="mt-8">
      <div class="flex justify-between">
        <div>
          <p class="text-sm text-gray-600"><span class="underline cursor-pointer text-blue-600"></span></p>
        </div>
        <div class="flex space-x-16">
          <div class="flex">
            <span class="font-semibold inline mr-4"></span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <hr class="mt-10" />
    <div class="flex space-x-10 pt-10">
    <div class="py-12">
      <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h4 class="text-xl font-bold text-gray-800">One Month</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          <h1 class="text-4xl text-center font-bold">$90</h1>
          <p class="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
          </ul>
          <div class="text-center bg-gray-200 ">
        <button onClick={()=>urlPay("test_user_925165801@testuser.com","Mighty Monkey Membership",1,"months",90)} class="inline-block my-6 font-bold text-gray-800">Get started today</button>
          </div>
      </div>
    </div>
    <div class="py-12">
      <div class="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h4 class="text-xl font-bold text-gray-800">Three Months</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </div>
          <h1 class="text-4xl text-center font-bold">$220</h1>
          <p class="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
          </ul>
          <div class="text-center bg-pink-600 ">
        <button onClick={()=>urlPay("test_user_925165801@testuser.com","Mighty Monkey Membership",3,"months",220)} class="inline-block my-6 font-bold text-white">Get started today</button>
          </div>
      </div>
    </div>
    <div class="py-12">
      <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
        <div class="px-8 flex justify-between items-center">
          <h4 class="text-xl font-bold text-gray-800">One Year</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 class="text-4xl text-center font-bold">$650</h1>
          <p class="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
            <li><a href="#" class="font-semibold"></a></li>
          </ul>
          <div class="text-center bg-gray-200 ">
        <button onClick={()=>urlPay("test_user_925165801@testuser.com","Mighty Monkey Membership",12,"months",650)} class="inline-block my-6 font-bold text-gray-800">Get started today</button>
          </div>
      </div>
    </div>
    </div>
  </div>
</div>
)
}

export default doMember
