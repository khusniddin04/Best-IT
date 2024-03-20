import React from 'react'
import { FiUser } from "react-icons/fi";
import { PiStudent } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbUserDollar } from "react-icons/tb";

import "../styles/hero.css"

function Hero() {
    return (
        <div className='container'>
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div className="hero_title">
                        <FiUser />
                        <h4>Faol lidlar</h4>
                    </div>
                    <span> 12</span>
                </div>
                <div className="hero_content">
                    <div className="hero_title">
                    <PiStudent />
                        <h4>Talabalar</h4>
                    </div>
                    <span> 434</span>
                </div>
                <div className="hero_content">
                    <div className="hero_title">
                    <GrGroup />
                        <h4>Guruhlar</h4>
                    </div>
                    <span> 16</span>
                </div>
                <div className="hero_content">
                    <div className="hero_title">
                    <FaHandHoldingDollar />
                        <h4>Qartdorlar</h4>
                    </div>
                    <span> 48</span>
                </div>
                <div className="hero_content">
                    <div className="hero_title">
                    <TbUserDollar />
                        <h4>To'laganlar</h4>
                    </div>
                    <span> 87</span>
                </div>
            </div>
        </div>
    )
}

export default Hero