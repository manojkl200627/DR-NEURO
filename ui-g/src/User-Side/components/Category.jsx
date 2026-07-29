import React from 'react'
import './Category.css'
import { FaBrain, FaEye, FaHeartbeat } from "react-icons/fa";
import { GiStomach } from 'react-icons/gi';
import { IoEarOutline } from 'react-icons/io5';

function Category() {
  return (
    <div>
        <div className='card-list'>
        <div className="cards">
            <FaHeartbeat className='icons'/>
            <h2>Heart <br /> Therapy</h2>
        </div>

        <div className="cards">
            <GiStomach className='icons'/>
            <h2>Gastro <br /> enterology</h2>
        </div>

        <div className="cards">
            <FaBrain className="icons"/>
            <h2>Neuro <br /> Pathology</h2>
        </div>

        <div className="cards">
            <IoEarOutline className='icons'/>
            <h2>Ear <br /> Therapy</h2>
        </div>

        <div className="cards">
            <FaEye className="icons"/>
            <h2>Eyesight <br /> Therapy</h2>
        </div>

        </div>
    </div>
  )
}

export default Category