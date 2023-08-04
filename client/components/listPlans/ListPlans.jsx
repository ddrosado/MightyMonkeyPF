"use-client"
import React from 'react'
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getPlans } from '../../redux/actions/plansActions'
import style from "./ListPlans.module.css"
import loading from '../../assets/images/giphy.gif'
import Image from "next/image";

const ListPlans = () => {

    const dispatch = useDispatch()
    const plans = useSelector(state=> state.plans.plans)
    const colums = ["Plan", "Price", "duration", ""]

    useEffect(()=>{
        dispatch(getPlans()) 
    },[])

    

  return (
    <div className={`container mx-auto px-4 sm:px-8 ${style.container}`}>
    <div className="py-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          className={`inline-block shadow rounded-lg overflow-hidden ${style.table}`}
        >
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                {colums.map((col) => {
                  return (
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
            { plans?.length? 
              plans.map(({ name, price, duration }) => {
                return (
                  <tr key={name}>
                    <td  className={`px-5 py-5 bg-white ${style.name}`}>
                      <strong>
                        {name}
                      </strong>
                    </td>
                    <td className={`px-5 py-5 bg-white ${style.name}`}>
                      <p className="font-medium text-gray-800 dark:text-white">
                        ${price}
                      </p>
                    </td>
                    <td className={`px-5 py-5 bg-white ${style.name}`}>
                      <span className={style.duration}>
                        {duration}<span style={{fontSize:"0.8em"}}>mes</span>
                      </span>
                    </td>
                    <td className={`px-5 py-5 bg-white ${style.edit}`}>
                      <button className=" bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full">
                        edit
                      </button>
                    </td>
                  </tr>
                )
              }) : <Image className={style.loading} src={loading} alt="gif" />} 
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-center">
            <div className="inline-flex mt-2 xs:mt-0">
              <button  className="text-sm bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-4">
                Add Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListPlans
