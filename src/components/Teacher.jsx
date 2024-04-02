import React from 'react'
import "../styles/teacher.css"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import user from "../images/user.png"
import { NavLink } from 'react-router-dom';


function Teacher() {
    return (
        <div className='students__wrapper container'>
            <NavLink to="/teachersDynamik">
                <div className='student__card'>
                    <div className="student_img_and_name">
                        <img src={user} alt="user img" />
                        <h4>Odil Ergashev</h4>
                    </div>
                    <h4>1 guruh</h4>
                    <h4>+998 77 789 89 98</h4>
                    <div className="student_icon_and_number">
                        <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' />

                    </div>
                </div>
            </NavLink>
            <NavLink to="/teachersDynamik">
                <div className='student__card'>
                    <div className="student_img_and_name">
                        <img src={user} alt="user img" />
                        <h4>Odil Ergashev</h4>
                    </div>
                    <h4>2 guruh</h4>
                    <h4>+998 77 789 89 98</h4>
                    <div className="student_icon_and_number">
                        <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' />

                    </div>
                </div>
            </NavLink>
            <NavLink to="/teachersDynamik">
                <div className='student__card'>
                    <div className="student_img_and_name">
                        <img src={user} alt="user img" />
                        <h4>Odil Ergashev</h4>
                    </div>
                    <h4>3 guruh</h4>
                    <h4>+998 77 789 89 98</h4>
                    <div className="student_icon_and_number">
                        <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' />

                    </div>
                </div>
            </NavLink>
            <NavLink to="/teachersDynamik">
                <div className='student__card'>
                    <div className="student_img_and_name">
                        <img src={user} alt="user img" />
                        <h4>Odil Ergashev</h4>
                    </div>
                    <h4>4 guruh</h4>
                    <h4>+998 77 789 89 98</h4>
                    <div className="student_icon_and_number">
                        <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' />

                    </div>
                </div>
            </NavLink>
            <NavLink to="/teachersDynamik">

                <div className='student__card'>
                    <div className="student_img_and_name">
                        <img src={user} alt="user img" />
                        <h4>Odil Ergashev</h4>
                    </div>
                    <h4>5 guruh</h4>
                    <h4>+998 77 789 89 98</h4>
                    <div className="student_icon_and_number">
                        <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' />

                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default Teacher