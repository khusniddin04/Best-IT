import React, { useEffect, useState } from 'react'
import "../styles/guruh.css"
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FiUser } from "react-icons/fi";

import img from "../images/Ellipse 15.png"
import { useParams } from 'react-router-dom';

function Guruh() {
    let pageID = useParams()
    console.log(pageID.groupID);
    const [group, setGroup]= useState(null)
    useEffect(()=>{
        async function getAllGroups() {
            let fetchGroups= await fetch("https://crmpanel-yle6.onrender.com/groups")
            let json = await fetchGroups.json()
            let selectedGroup = json.data.find((item)=> item._id ===pageID.groupID)
            setGroup(selectedGroup);
        }

        getAllGroups()

    }, [pageID.groupID])

    console.log(group);
   
    return (
        <div className='container'>
            <h4>{group?.courses_ref_id?.course_name} </h4>
            <div className="group_wrapper">
                <div className="group_teacher">
                    <img src={img} alt="" />
                    <h3>{group?.employee_ref_id[0]?.full_name}</h3>
                    <p>{group?.group_name}</p>
                    <div className="group_price">
                        <HiCurrencyDollar className='group_logo'/>
                        <h5>{group?.courses_ref_id?.course_price} so'm</h5>
                    </div>
                    <div className="group_price">
                        <MdOutlineAccessTimeFilled className='group_logo'/>
                        <h5>{group?.group_time}</h5>
                    </div>
                    
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

                  {group?.student_ref_id?.map((item, index)=>{
                    return(
                        <div className="group_students_members">
                        <div className="group_students_members_name">
                            <p>{index+1}</p>
                            <h4>{item.full_name}</h4>
                        </div>
                        <div className="group_students_members_days">
                            <button>
                                <span className='yes'>yes</span>
                                <span className='no'>no</span>
                            </button>
                        </div>
                      </div>
                    )
                  })}
                 
                  
                </div>
            </div>

        </div>
    )
}

export default Guruh