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
    const colums = ["Plan", "Price", ""]

    useEffect(()=>{
        dispatch(getPlans()) 
    },[])

    

  return (
    <div className={`container mx-auto px-4 sm:px-8 ${style.container}`}>
    <div className="py-8">
      <div className="my-2 flex sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div className="relative">
            <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="block relative">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-gray-500"
            >
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <input
          name="search"
            placeholder="Search"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          />
        </div>
      </div>
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
                  <tr>
                    <td className={`px-5 py-5 bg-white ${style.name}`}>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {name}
                      </p>
                    </td>
                    <td className={`px-5 py-5 bg-white ${style.name}`}>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {price}
                      </p>
                    </td>
                    <td className={`px-5 py-5 bg-white ${style.name}`}>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {duration}
                      </p>
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
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <div className="inline-flex mt-2 xs:mt-0">
              <button  className="text-sm bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2 px-4">
                Add Sport
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
