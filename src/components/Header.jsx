import React, { useRef, useState } from 'react'
import img1 from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import "../styles/header.css"
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";


function Header() {
 const [openMenu, setOpenMenu] = useState(true)
 let navbar_responsiv = useRef()

  
  return (
    <div className="header_wrapper">
    <div className=' container'>
      <div className="header_content">
        <NavLink to="/" className="logotipe">
        <img src={img1} alt="" />
        </NavLink>
        <div className="navbar">
          <ul className='list'>
            <li>
              <NavLink to="/lids">Lid</NavLink>
            </li>
            <li>
              <NavLink to="students">Talabalar</NavLink>
            </li>
            <li>
              <NavLink to="teachers">O'qtuvchilar</NavLink>
            </li>
            <li>
              <NavLink to="groups">Guruhlar</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Kurslar</NavLink>
            </li>
            <li>
              <NavLink to="/budjet">Budjet</NavLink>
            </li>
          </ul>
        </div>
        <div ref={navbar_responsiv} className="navbar_responsiv">
          <ul className='list'>
            <li>
              <NavLink to="/lids">Lid</NavLink>
            </li>
            <li>
              <NavLink to="students">Talabalar</NavLink>
            </li>
            <li>
              <NavLink to="teachers">O'qtuvchilar</NavLink>
            </li>
            <li>
              <NavLink to="groups">Guruhlar</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Kurslar</NavLink>
            </li>
            <li>
              <NavLink to="/budjet">Budjet</NavLink>
            </li>
          </ul>
        </div>

        <div className="header_admin">
          <h3>Adminstrator</h3>
          {openMenu && <AiOutlineMenuUnfold className='menu'  onClick={()=> {
            setOpenMenu(false)
            navbar_responsiv.current.classList.add("navbar_responsiv_true")
          }}/>}
          {!openMenu && <AiOutlineMenuFold className='menu' onClick={() => {
            setOpenMenu(true)
            navbar_responsiv.current.classList.remove("navbar_responsiv_true")

          }}/>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header