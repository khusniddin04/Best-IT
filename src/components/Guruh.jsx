import React from 'react'
import "../styles/guruh.css"
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import img from "../images/Ellipse 15.png"

function Guruh() {
    return (
        <div className='container'>
            <h4>Frontent</h4>
            <div className="group_wrapper">
                <div className="group_teacher">
                    <img src={img} alt="" />
                    <h3>Abdulaziz Begzodov</h3>
                    <p>Frontent</p>
                    <div className="group_price">
                        <HiCurrencyDollar className='group_logo'/>
                        <h5>400 000 so'm</h5>
                    </div>
                    <div className="group_price">
                        <MdOutlineAccessTimeFilled className='group_logo'/>
                        <h5>10:00 - 12:00</h5>
                    </div>
                    <hr />
                    <ul>
                    <li>Komilov Davron</li>
                    <li>Samadov Feruzbek</li>
                    <li>Zolirov Xusan</li>
                    </ul>
                </div>
                <div className="group_students">
                  <div className="group_students_nav">
                  <div className="students_name">
                        <FiUser />
                        <p>Ismlar</p>
                    </div>
                    <div className="lisson_time">
                        <p>20.03.2024</p>
                        <p>21.03.2024</p>
                        <p>22.03.2024</p>
                        <p>23.03.2024</p>
                        <p>24.03.2024</p>
                        
                    </div>
                  </div>
                  <div className="group_students_members">
                    <div className="group_students_members_name">
                        <p>1</p>
                        <h4>Olimova Guli</h4>
                    </div>
                    <div className="group_students_members_days">
                        <button>Keldi</button>
                        <button>Keldi</button>
                        <button>Kelmadi</button>
                        <button>Kelmadi</button>
                        <button>Keldi</button>
                    </div>
                  </div>
                    <div className='line'></div>
                  <div className="group_students_members">
                    <div className="group_students_members_name">
                        <p>2</p>
                        <h4>Olimova Guli</h4>
                    </div>
                    <div className="group_students_members_days">
                        <button>Keldi</button>
                        <button>Keldi</button>
                        <button>Kelmadi</button>
                        <button>Kelmadi</button>
                        <button>Keldi</button>
                    </div>
                  </div>
                    <div className='line'></div>
                  <div className="group_students_members">
                    <div className="group_students_members_name">
                        <p>3</p>
                        <h4>Olimova Guli</h4>
                    </div>
                    <div className="group_students_members_days">
                        <button>Keldi</button>
                        <button>Keldi</button>
                        <button>Kelmadi</button>
                        <button>Kelmadi</button>
                        <button>Keldi</button>
                    </div>
                  </div>
                    <div className='line'></div>
                </div>
            </div>

        </div>
    )
}

export default Guruh