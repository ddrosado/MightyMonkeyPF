"use-cient"
import React, { useState } from 'react'
import { getBookings } from '../../redux/actions/bookingAction'
import { useDispatch, useSelector } from "react-redux";
import style from "./ListTurns.module.css"
import loading from '../../assets/images/giphy.gif'
import Image from "next/image";
import { useEffect } from 'react';
import { filterBookings } from '../../redux/features/bookingsSlice';
import { getSports } from '../../redux/actions/sportsActions';

export const ListTurns = () => {

    const dispatch = useDispatch()
    const bookings = useSelector(state=> state.bookings.bookingsCopy)
    const sports = useSelector(state=> state.sports.sports)
    const [filter, setFilter] = useState({
      sport: "",
      date: "all",
      search: ""
    })

    useEffect(()=>{
        dispatch(getSports())
        dispatch(getBookings())
    },[])
    
    useEffect(()=>{
      dispatch(filterBookings(filter))
    },[filter])

    const handleChange = (e)=>{
      setFilter({
        ...filter,
        [e.target.name] : e.target.value
      })
    }

    const generateDateArray = () => {
      const dateArray = [];
      const today = new Date();
    
      for (let i = 0; i < 31; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dateArray.push(date.toISOString().split('T')[0]);
      }
    
      return dateArray;
    };
    
    const dates = generateDateArray();

  return (
    <div className={`container mx-auto px-4 sm:px-8 ${style.container}`}> 
        <div className="py-8">
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select name='sport' onChange={(e)=>handleChange(e)} className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value="all">All</option>
                  {sports?.map(sport=> {
                  return <option value={sport.name}>{sport.name}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select name='date' onChange={(e)=>handleChange(e)} className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value="all">All</option>
                  {dates?.map(date=> {
                  return <option value={date}>{date}</option>
                  })}
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
              onChange={(e)=>handleChange(e)}
                name="search"
                placeholder="Search"
                value={filter.search}
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block w-400 shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    {["sport", "court", "date", "hour", "user"].map((col) => {
                      return (
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          {col}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                {bookings?.length?
                  bookings.map(({ date, hour, user, court, id}) => {
                    return (
                      <tr key={id}>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {court.sport.name}
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {court.name}
                          </p>
                        </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {date}
                              </p>
                            </td>
                            <td className="px-5 py-5 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {hour}
                              </p>
                            </td>
                        <td className="px-5 py-5 text-sm bg-white text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            ></img>
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                {user.name} {user.surname}
                              </h2>
                              <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                   : <Image className={style.loading} src={loading} alt="gif" />}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between ">
              <span class="text-xs xs:text-sm text-gray-900">
                            Page 
                        </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
  )
}
