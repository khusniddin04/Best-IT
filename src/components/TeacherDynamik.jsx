import React from 'react'
import "../styles/teacherDynamik.css"
import img from "../images/Ellipse 15.png"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import img_1 from "../images/user.png"
import { PiStudentFill } from "react-icons/pi";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
function TeacherDynamik() {
    return (
        <div className='teacherwraper'>
            <div className="group_teacher">
                <img src={img} alt="" />
                <h3>Abdulaziz Begzodov</h3>
                <p>Frontent</p>
                <div className="group_price">
                    <MdOutlinePhoneAndroid className='group_logo' />
                    <h5>+998 93 764 89 54</h5>
                </div>
                <div className="group_price">
                    <FaMapMarkerAlt className='group_logo' />
                    <h5>Guliston</h5>
                </div>

            </div>
            <div className="wrapper_dynamik">
                <div className="header_dynamik">
                    <div className="img_1">
                       <img src={img_1} alt="" />
                       <h5>Fontend</h5> 
                    </div>
                    
                    <ul className='aykon'>
                       <PiStudentFill />
                       <h5>25 ta oquvchi</h5>
                       <HiMiniEllipsisVertical className='uchnuqta'/>
                   </ul>
                </div>
                <div className="header_dynamik">
                    <div className="img_1">
                       <img src={img_1} alt="" />
                       <h5>Bakend</h5> 
                    </div>
                    
                    <ul className='aykon'>
                       <PiStudentFill />
                       <h5>10 ta oquvchi</h5>
                       <HiMiniEllipsisVertical className='uchnuqta'/>
                   </ul>
                </div>
                <div className="header_dynamik">
                    <div className="img_1">
                       <img src={img_1} alt="" />
                       <h5>Veb Dizayn</h5> 
                    </div>
                    
                    <ul className='aykon'>
                       <PiStudentFill />
                       <h5>16 ta oquvchi</h5>
                       <HiMiniEllipsisVertical className='uchnuqta'/>
                   </ul>
                </div>
                <div className="header_dynamik">
                    <div className="img_1">
                       <img src={img_1} alt="" />
                       <h5>General Englsh</h5> 
                    </div>
                    
                    <ul className='aykon'>
                       <PiStudentFill />
                       <h5>31 ta oquvchi</h5>
                       <HiMiniEllipsisVertical className='uchnuqta'/>
                   </ul>
                </div>
               
               
               
            </div>
        </div>
    )
}

export default TeacherDynamik