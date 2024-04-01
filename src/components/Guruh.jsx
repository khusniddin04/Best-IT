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
                        <HiCurrencyDollar />
                        <p>400 000 ming</p>
                    </div>
                    <div className="group_price">
                        <MdOutlineAccessTimeFilled />
                        <p>10:00 - 12:00</p>
                    </div>
                </div>
                <div className="group_students">
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
            </div>

        </div>
    )
}

export default Guruh