"use client";

import { deleteUser, getUsers, putUser } from "../../redux/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./ListSocios.module.css"
import { filterUsers} from "../../redux/features/usersSlice";
import loading from '../../assets/images/giphy.gif'
import Image from "next/image";


const ListSocios = () => {
  const colums = ["User", "Email", "Phone", "Members", ""];
  const [filter, setFilter] = useState({
    member: "",
    search: ""
  })

  const [page, setPage] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  useEffect(()=>{
    dispatch(filterUsers(filter))
  }, [filter])

  const user = useSelector((state) => state.users.usersCopy)

  const handleFilter=(e)=>{
    if(e.target.name == "search"){
      setFilter({
        ...filter,
        [e.target.name] : e.target.value
      })
    } else {
      setFilter({
        ...filter,
        "member": e.target.value
      })
    }
}

const handlePage = (type)=>{
  if(type == "next"){
    const newPage = page+1
    if((user.length / 5) >= newPage){
      setPage(newPage)
    }
  } else {
    const newPage = page-1
    if(newPage >= 0){
      setPage(newPage)
    } 
  }
}


const handleBanned= async (id)=>{
  const resp = await dispatch(deletUser(id))
  if (resp.meta.requestStatus == "rejected"){
    console.log("no se pudo banear")
const handleDelete= async (id)=>{
  const resp = await dispatch(deleteUser(id))
  if (resp.meta.requestStatus == "rejected"){
    alert("no se pudo bannear el usuario")
  } else{
    dispatch(getUsers())
    alert("usuario banneado")
  }
}

const handleEnable = async(email)=>{
  const resp = await dispatch(putUser({"email": email , isActive: true}))
  if (resp.meta.requestStatus == "rejected"){
    alert("no se pudo bannear el usuario")
  } else{
    dispatch(getUsers())
    alert("usuario activado")
  }
}

  return (
      <div className={`container mx-auto px-4 sm:px-8 ${style.container}`}>
        {user.length? 
        <div className="py-8">
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select onChange={(e)=>handleFilter(e)} className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option value="all">All</option>
                  <option value={true}>Members</option>
                  <option value={false}>No members</option>
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
              onChange={(e)=>handleFilter(e)}
                value={filter.search}
                name="search"
                placeholder="Search"
                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block w-400 shadow rounded-lg overflow-hidden">
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
                  {user.slice((5 * page), ((page+1) * 5)).map(({ name, surname, email, isMember, telephone, id, isActive }) => {
                    return (    
                      <tr>
                        {console.log(id)}
                        <td className="px-5 py-5 text-sm bg-white text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            ></img>
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                {name} {surname}
                              </h2>
                              <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                {email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {email}
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {telephone}
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <span
                            className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                              isMember ? "text-green-900" : "text-red-900"
                            }`}
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-0 ${
                                isMember ? "bg-green-200" : "bg-red-200"
                              } opacity-50 rounded-full`}
                            ></span>
                            <span className="relative">
                              {isMember ? "active" : "inactive"}
                            </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <button onClick={()=> handleBanned(id)} className={`text-sm  ${isActive? "bg-red-500" : "bg-blue-500" } text-black-900 font-semibold py-1 px-3`}>
                            {isActive? "bann" : "enable"}
                          </button>
                          {isActive? 
                          <button onClick={()=>handleDelete(id)} className="text-sm bg-red-600 hover:bg-red-500 text-black-900 font-semibold py-2 px-4 rounded-full">
                          bann
                        </button> :
                        <button onClick={()=>handleEnable(email)} className="text-sm bg-blue-600 hover:bg-blue-500 text-black-900 font-semibold py-2 px-4 rounded-full">
                          enable
                        </button>
                        }
                          
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between ">
              <span class="text-xs xs:text-sm text-gray-900">
                            Page {page+1} the {Math.ceil(user.length/5)} of {user.length} Users
                        </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button onClick={()=>handlePage("prev")} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button onClick={()=>handlePage("next")} className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> : <Image className={style.loading} src={loading} alt="gif" />}
      </div>
  )
}
}
}

export default ListSocios;
