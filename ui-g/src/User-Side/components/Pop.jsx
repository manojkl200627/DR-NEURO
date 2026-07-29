import React from 'react'
import "./Pop.css"
const Pop = ({mes,setShow}) => {
    const handlepopclick=()=>{
        setShow(false)
    }
  return (
    <div className='popmain'><div className="i">i</div>{mes}<div className="closepop" onClick={handlepopclick}>X</div></div>
  )
}

export default Pop