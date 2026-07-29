import React, { useState } from 'react'
import "./HomeBar.css"
import { FaHome , FaSearch , FaRobot , FaUserCircle  } from "react-icons/fa";
const HomeBar = ({hominame}) => {

    const [inp , setInp]= useState("")

const HandleinputChange =(e)=>{
        setInp(e.target.value)
        console.log(inp)
}

const Handleinpclick = ()=>{
    setInp("")
}
  return (
    <div className='hbm'>

            {/* <div className="hb1">
                    {hominame}
            </div> */}

            <div className="Wel">
                {hominame}
            </div>



            <div className="buttt"><input type='text' value={inp} className="SearchBut" onChange={HandleinputChange} placeholder='Search...'></input><button onClick={Handleinpclick} className="see"><FaSearch size={20}  color={"black"} /></button></div>

            


    </div>
  )
}

export default HomeBar