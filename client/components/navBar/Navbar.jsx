import React from 'react'
import Link from "next/link"


export const Navbar = () => {

  const obj = [
  {label : "home", route: "/"},
  {label : "About", route: "/aboutUs"},
  {label : "Contact", route: "/contact"},
  {label : "My turns", route: "/turns"},
  {label : "Login", route: "/logIn"},
 
  ]
  
  return (
    <div>
        <ul>
            {obj.map(({label, route})=>{
              return (<li key={route}>
                <Link href={route}>{label}</Link>
              </li>)
            })}
        </ul>
    </div>
  )
}
