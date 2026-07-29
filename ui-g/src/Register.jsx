import React from 'react'
import RegisterComp from './User-Side/components/registerComp.jsx'
import "./login.css"
const Register = () => {
  return (
    <div className='LpmainReg'>
      <div className="lpd1">
        <img className="lpd2" src="logo.jpg" alt="logo" /><div className='lpd2name'>Dr.Neuro</div>
      </div>
      <div className="squaremain2">
            <RegisterComp/>
      </div>

    </div>
  )
}

export default Register