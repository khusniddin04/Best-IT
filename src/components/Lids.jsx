import React from 'react'
import "../styles/lids.css"
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";

function Lids() {
    // async function 
  return (
    <section className='lid'>
        <div className="container">
            <div className="lid__wrapper">
               <div className="lids">
                <h2>Tillar</h2>
                    <div className="lids__card">
                        <div className="lids__content">
                            <h4>Sobir Olimov</h4>
                            <p>+998 99 969 69 96</p>
                        </div>
                        <div className="lids__icons">
                            <MdEdit className='lid_icon1' />
                            <FaPlus className='lid_icon2'/>  
                            <RiDeleteBinFill className='lid_icon3' />
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Lids