import React from 'react'
import { NavLink } from 'react-router-dom'



import { FaHome , FaSearch , FaRobot , FaUserCircle  } from "react-icons/fa";
import { FiActivity , FiSettings  } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { MdHeadsetMic } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";


import "./Navigation.css"

const Navigation = () => {
  return (
    <div className='ndm'>
        <div className="nd1">
            <span className='logu'><img className="logo" src="logo.jpg" alt="logo" /><div className='logoname'>Dr.Neuro</div></span>
                <div className="nd2">
                    <NavLink className={"navi"} to={"/"}><FaHome className="log" size={20}  />Home</NavLink>
                    <NavLink className={"navi"} to={"/schedule"} ><FaSearch className="log" size={20}  />Schedules</NavLink>
                    <NavLink className={"navi"} to={"/aisect"}><FaRobot className="log" size={20}  />Smart-AI</NavLink>
                    <NavLink className={"navi"} to={"/appointment"}><FiActivity className="log" size={20}  />Appointments</NavLink>
                    <NavLink className={"navi"} to={"/profile"}><FaUserCircle className="log" size={20}  />Profile</NavLink>
                    <NavLink className={"navi"} to={"/about"} ><AiFillHeart className="log" size={20}  />About!</NavLink>
                
                </div>
                <div className="nd3">
                    <span>Tools</span>
                    <NavLink className={"navi"} to={"/setting"}><FiSettings className="log" size={20}  />Settings</NavLink>
                    <NavLink className={"navi"} to={"/chatSupport"}><MdHeadsetMic className="log" size={20}  />Chat&Support</NavLink>
                    <NavLink className={"navi"} to={"/Help"} ><BsQuestionCircle className="log" size={20}  />Help</NavLink>

                </div>
        </div>
    </div>
  )
}

export default Navigation