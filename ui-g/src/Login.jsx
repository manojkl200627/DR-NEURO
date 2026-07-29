import React from 'react'
import "./login.css"
import Logincomp from './User-Side/components/logincomp'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useLocation } from 'react-router-dom';
import RegisterComp from './User-Side/components/registerComp';
const Login = () => {

  const loct = useLocation()
  const Reg = loct.pathname==="/Register"

  return (
    <div className='Lpmain'>
<div className="lpd1">
        <img className="lpd2" src="logo.jpg" alt="logo" /><div className='lpd2name'>Dr.Neuro</div>
      </div>

      <div className="squaremain">
      {!Reg && <div className='gggs'><div className="lognameup">LOGIN</div>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                  <Logincomp/>
          </GoogleOAuthProvider></div>}

        {Reg && <div className='gggs1'><div className="lognameup1">Register</div>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RegisterComp/>
          </GoogleOAuthProvider>
          
      </div>}
      

    </div>
    </div>
  )
}

export default Login