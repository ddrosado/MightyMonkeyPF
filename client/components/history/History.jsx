import React from 'react'
import style from "./History.module.css"
import { useSelector } from 'react-redux';

export const History = () => {

  const user = useSelector(state => state.bookings);
  console.log(user)


  return (
    <div className={style.container}>
       <div className={style.contentContainer}>
        <div className={style.historyTitle}>
        <span className={style.bookingsTitle}>Jungle Chronicles: Your Court Booking History</span>
        </div>





        
   <div>
      <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
         <div className="flex p-3 border-l-8 border-yellow-600">
            <div className="space-y-1 border-r-2 pr-3">
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> ID #</span> LTC08762304</div>
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500 pr"> Pago #</span> 10937</div>
               <div className="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
            </div>
            <div className="flex-1">
               <div className="ml-3 space-y-1 border-r-2 pr-3">
                  <div className="text-base leading-6 font-normal">Tenis</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Cancha:</span> Cancha 1</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Horario:</span> 18:00 hs</div>
               </div>
            </div>
            <div className="border-r-2 pr-3">
               <div >
                  <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                     <div className="uppercase text-xs leading-4 font-medium">Trailer</div>
                     <div className="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
                  </div>
               </div>
            </div>
            <div>
               <div className="ml-3 my-5 bg-yellow-600 p-1 w-20">
                  <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">Finished</div>
               </div>
            </div>
            <div>
              
            </div>
         </div>
      </div>

      <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
         <div className="flex p-3  border-l-8 border-green-600">
            <div className="space-y-1 border-r-2 pr-3">
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
               <div className="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
            </div>
            <div className="flex-1">
               <div className="ml-3 space-y-1 border-r-2 pr-3">
                  <div className="text-base leading-6 font-normal">KROGER MEMPHIS</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
               </div>
            </div>
            <div className="border-r-2 pr-3">
               <div >
                  <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                     <div className="uppercase text-xs leading-4 font-medium">Trailer</div>
                     <div className="text-center text-sm leading-4 font-semibold text-gray-800">89732</div>
                  </div>
               </div>
            </div>
            <div>
               <div className="ml-3 my-5 bg-green-600 p-1 w-20">
                  <div className="uppercase text-xs leading-4 font-semibold text-center text-green-100">Reserved</div>
               </div>
            </div>
            <div>

            </div>
         </div>
      </div>

      <div className="bg-gray-50 mx-auto border-gray-500 border rounded-md text-gray-700 mb-0.5 h-30">
         <div className="flex p-3  border-l-8 border-red-600">
            <div className="space-y-1 border-r-2 pr-3">
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
               <div className="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
            </div>
            <div className="flex-1">
               <div className="ml-3 space-y-1 border-r-2 pr-3">
                  <div className="text-base leading-6 font-normal">KROGER MEMPHIS</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Carrier</span> PAPER TRANSPORT INC.</div>
                  <div className="text-sm leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> Destination</span> WestRock Jacksonville - 9469 Eastport Rd, Jacksonville, FL 32218</div>
               </div>
            </div>
            <div className="border-r-2 pr-3">
               <div >
                  <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                     <div className="uppercase text-xs leading-4 font-medium">LEAVE A</div>
                     <div className="text-center text-sm leading-4 font-semibold text-gray-800">REVIEW</div>
                  </div>
               </div>
            </div>
            <div>
               <div className="ml-3 my-5 bg-red-600 p-1 w-20">
                  <div className="uppercase text-xs leading-4 font-semibold text-center text-red-100">Canceled</div>
               </div>
            </div>
            <div>
               
            </div>
         </div>
      </div>

   </div>






       </div>
    </div>
  )
}
