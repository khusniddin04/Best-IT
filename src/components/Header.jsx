import React from 'react'
import img1 from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import "../styles/header.css"

function Header() {
  return (
    <div className="header_wrapper">
    <div className=' container'>
      <div className="header_content">
        <NavLink to="/" className="logotipe">
        <img src={img1} alt="" />
        </NavLink>
        <div className="navbar">
          <ul>
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
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header