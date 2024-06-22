import React, { useState } from 'react'
import { FaReact } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiX } from 'react-icons/hi';
import './styles.scss'
export default function Index() {
  const data=[
    {
      label:"Home",
      to:'/'
    },
    {
      label:"AboutMe",
      to:'/AboutMe'
    },
    {
      label:"Skills",
      to:'/Skills'
    },
    {
      label:"Project",
      to:'/project'
    },
    {
      label:"Contact",
      to:'/Contact'
    },
  ]
  const [togel,settogle]=useState(false)
  return (
    <div >
      <nav className='navbar'>
        <div className='navbarcontainer'>
          <Link to={'/'} className='navbarlogo'>
     <FaReact size={40}/>
        </Link>
        </div>
        <ul className={`containerMenu${togel?' active' :''}`}>
          {data.map((item,key)=>(
            <li key={key} className='menuitems'>
              <Link to={item.to} className='menuitem' onClick={()=>{settogle(false)}}>
              {item.label}  
              </Link>
            </li>

        ))}
        </ul>
        <div className='nav-icon' onClick={()=>settogle(!togel)}>{
          togel ? <HiX size={30} />:<FaBars size={30} />
          }


        </div>
      </nav>
        </div>
  )
}
