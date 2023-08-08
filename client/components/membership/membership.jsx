// 'use client'

// import React from 'react'
// import useSWR from 'swr';
// import { fetcher } from '../../pages/api/fetcher';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';


// const Membership = () => {

//   const plans = useSWR('api/plans', fetcher)
//   const user = useSWR('api/user', fetcher)
//   const router = useRouter()
//   // console.log(user.data);
//   // console.log(plans.data);

//   const urlPay = async(planId) => {
//     console.log(planId);
//     console.log(user.data.id);
//     const url = await axios.post('https://16fa-201-252-85-88.ngrok-free.app/api/pay', {
//       type: 'subscriptions',
//       userId: user.data.id,
//       planId,
//     }).then(({data}) => data.init_point)
//     console.log("aaaaaaaaaaaaaaaaaaaaaaa",url);
//     router.push(url);
//   }


//   return (
//     <div>
//       <div class="container mx-auto max-w-4xl">
//         <div class="mt-10 text-center">
//           <h1 class="text-4xl font-bold text-yellow-200">Choose your plan</h1>
//           <p class="text-white mt-3 font-semibold">Every plan includes 30 day free trial</p>
//         </div>
//         <div class="mt-8">
//           <div class="flex justify-between">
//             <div>
//               <p class="text-sm text-gray-600"><span class="underline cursor-pointer text-blue-600"></span></p>
//             </div>
//             <div class="flex space-x-16">
//               <div class="flex">
//                 <span class="font-semibold inline mr-4"></span>
//               </div>
//             </div>
//           </div>
//           <div></div>
//         </div>
//         <hr class="mt-10" />
//         <div class="flex space-x-10 pt-10">
//         { plans?.data?.map( plan => {
//           return(
//             <div class="py-12">
//               <div class="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
//                 <div class="px-8 flex justify-between items-center">
//                   <h4 class="text-xl font-bold text-gray-800">{plan.duration === 12? `${plan.duration/12} Year` : `${plan.duration} Months`}</h4>
//                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"/>
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                   </div>
//                   <h1 class="text-4xl text-center font-bold">${plan.price}</h1>
//                   <p class="px-4 text-center text-sm ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
//                   <ul class="text-center">
//                     <li><a href="#" class="font-semibold"></a></li>
//                     <li><a href="#" class="font-semibold"></a></li>
//                     <li><a href="#" class="font-semibold"></a></li>
//                   </ul>
//                   <div class="text-center bg-yellow-600 ">
//                 <button onClick={()=>urlPay(plan.id)} class="inline-block my-6 font-bold text-white">Get started today</button>
//                   </div>
//               </div>
//             </div>
//           )
//         })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Membership;
