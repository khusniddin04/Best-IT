import React from 'react'
import "../styles/student.css"
import user_img from "../images/user.png"
// import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { TiDeleteOutline } from "react-icons/ti";
function Student() {
  return (
    <div className='student__card'>
        <div className="student_img_and_name">
            <img src={user_img} alt="user img" />
            <h4>Odil Ergashev</h4>
        </div>
            <h4>+998 77 789 89 98</h4>
        <div className="student_icon_and_number">
        <button className='add_btn'>+Guruhga qo'shish</button>
            {/* <PiDotsThreeOutlineVerticalFill size="25px" className='student_icon' /> */}
            {/* <div className="modal">
                <button>To'lov</button>
                <TiDeleteOutline />
            </div> */}
        </div>
    </div>  
  )
}

export default Student