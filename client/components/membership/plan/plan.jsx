import React,{useState} from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";



export const Plan = ({plan, user}) => {

  initMercadoPago('TEST-8c446ca2-a3d3-4718-9e84-584f9c36833e');
  const [preferenceId, setPreferenceId] = useState(null)
  console.log(user)
  console.log(plan)

    const createPreference = async (plan)=>{
        try {
          const response = await axios.post("/api/mp", {
            product :{
                description: plan.name,
            price : plan.price,
            quantity: 1,
            currency_id: "ARS"
            },
            user : user.data
          })
          const {id} = response.data
          return id
        } catch (error) {
          console.log(error)
        }
      }

      const handleBuy = async(plan)=>{
        const id = await createPreference(plan)
        if(id){
            setPreferenceId(id)
        }
      }
  return (
    <div className="py-12">
                  <div className="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                    <div className="px-8 flex justify-between items-center">
                      <h4 className="text-xl font-bold text-gray-800">
                        {plan.duration === 12
                          ? `${plan.duration / 12} Year`
                          : `${plan.duration} Months`}
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-pink-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </div>
                    <h1 className="text-4xl text-center font-bold">
                      ${plan.price}
                    </h1>
                    <p className="px-4 text-center text-sm ">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem
                    </p>
                    <ul className="text-center">
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                      <li>
                        <a href="#" className="font-semibold"></a>
                      </li>
                    </ul>
                    <div className="text-center bg-yellow-600 ">
                    </div>
                  </div>
                  <button style={{backgroundColor: "white"}} onClick={()=>handleBuy(plan)}>comprarrr</button>
                  {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
  )
}
