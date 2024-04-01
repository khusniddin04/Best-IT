import React from 'react'
import "../styles/tablitsa.css"
import { MdOutlineDoorFront } from "react-icons/md";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaList } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

function Tablitsa() {
    return (
        <div className='container'>
            <div className="tablitsa_wrapper">
                <div className="tablitsa_title">
                    <div className="tablitsa_text">
                        <h3>Jadval</h3>
                        <select >
                            <option value="Toq_kunlar">Toq kunlar</option>
                            <option value="Juft_kunlar">Juft kunlar</option>
                            <option value="Hammasi">Hammasi</option>
                        </select>
                    </div>
                    
                </div>
                <div className="tablitsa_content">
                    <div className="list_title">
                        <span className='list_text'>
                        <MdOutlineDoorFront />
                            <p>xona</p>
                        </span>
                        <span className='list_text'>
                        <LiaBusinessTimeSolid />
                            <p>soat</p>
                        </span>
                        <span className='list_text'>
                        <FaList />
                            <p>kurs</p>
                        </span>
                        <span className='list_text'>
                        <FaChalkboardTeacher />
                            <p>ustoz</p>
                        </span>
                       
                    </div>
                    <div className="tablitsa_card">
                        <p>22-xona</p>
                        <p>8:00 - 10:00</p>
                        <p>Frontend</p>
                        <p>Abdulla Olimov</p>
                    </div>
                    <div className="tablitsa_card">
                        <p>32-xona</p>
                        <p>10:00 - 12:00</p>
                        <p>Backend</p>
                        <p>Olim Abdullayev</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tablitsa