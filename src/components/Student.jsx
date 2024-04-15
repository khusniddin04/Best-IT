import React from 'react'
import "../styles/student.css"
// import user_img from "../images/user.png"

function Student({student}) {
  return (
    <div className='student__card'>
        <div className="student_img_and_name">
            {/* <img src={user_img} alt="user img" /> */}
            <h4>{student?.full_name}</h4>
        </div>
            <h4>{student?.contact}</h4>
        <div className="student_icon_and_number">
        <button className='add_btn'>+Guruhga qo'shish</button>
           
        </div>
    </div>  
  )
}

export default Student