import React, { useEffect, useState } from 'react'
import {Routes,Route, useLocation, useNavigate} from "react-router-dom"
import Home from "./User-Side/pages/Home.jsx"
import About from "./User-Side/pages/About.jsx"
import Schedules from "./User-Side/pages/Schedules.jsx"
import AiSection from "./User-Side/pages/AiSection.jsx"
import Profile from "./User-Side/pages/Profile.jsx"
import Login from './Login.jsx'
import Register from './Register.jsx'
import ChatSupport from "./User-Side/pages/chat&Support.jsx"
import Settings from './User-Side/pages/Settings.jsx'
import HelpCentre from './User-Side/pages/HelpCentre.jsx'
import Appointments from './User-Side/pages/Appointments.jsx'
import Navigation from './User-Side/components/Navigation.jsx'
const App = () => {
  const loc = useLocation()
  const navi = useNavigate()
  const hideNav = loc.pathname === "/Login" || loc.pathname === "/Register";
  const [loggedu,setLoggedu] = useState(false)
  useEffect(()=>{
    const logu = localStorage.getItem("token_Dr")
    if(logu){
      setLoggedu(true)
      navi("/")
    }else if(!logu){
        navi("/Login")
    }

  },[loggedu])
  return (
    <div>
       {!hideNav && <Navigation/> }
       {!loggedu && <Routes>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='/Register' element={<Register/>} ></Route>
        </Routes>}
        
        {loggedu && <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/schedule' element={<Schedules/>}/>
          <Route path='/aisect' element={<AiSection/>} />
          <Route path='/appointment' element={<Appointments/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/chatSupport' element={<ChatSupport/>} />
          <Route path='/setting' element={<Settings/>} ></Route>
          <Route path='/Help' element={<HelpCentre/>} ></Route>
        </Routes>}

    </div>
  )
}

export default App