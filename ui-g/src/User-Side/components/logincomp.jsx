import React, { useState } from 'react'
import "./logincomp.css"
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"
import GoImg from "../../assets/googlelogo.png"
import { useNavigate } from 'react-router-dom';
import Pop from './Pop';
import RegisterComp from './registerComp';
const Logincomp = () => {

  const back_uri = import.meta.env.VITE_BACK;
    const [show,setShow] = useState(false)
    const [emailimp,setEmailimp] = useState("")
    const [passimp,setPassimp] = useState("")
    const [popdata,setPopdata] = useState("")
    const [gemail,setGemail] = useState("")
    const [gname,setGname] = useState("")
    const Reg = false;
const navigate = useNavigate()

const loginGoogle = useGoogleLogin({
   onSuccess: async (tokenResponse) => {

      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );

      // console.log("User Info:", userInfo.data);
      const dataa = userInfo.data
      const Gemail = dataa.email
      
      const Gname = dataa.name
      
      const res = await axios.post(`${back_uri}/api/user/Glogin`,{email:Gemail})
      const mess = res.data.st
       
      if(mess==="f"){
        setShow(true)
        setPopdata(res.data.mess)
        setGemail(Gemail)
        setGname(Gname)
        navigate("/Register")
      }else{
        const resdaat = res.data
                  const token = resdaat.token
                  if(token){
                        localStorage.setItem("token_Dr",token);
                        navigate("/")
                  }

      }
    },
    onError: (error) => console.log("Failed:", error),
  });

  const handleClickOflogginginuser = async() =>{
    try {
      
      const res = await axios.post(`${back_uri}/api/user/login`,{email:emailimp,password:passimp})
      // console.log(res.data)
      const mess = res.data.st
       
      if(mess==="f"){
        setShow(true)
        setPopdata(res.data.mess)
        

      }else{
        const resdaat = res.data
                  const token = resdaat.token
                  if(token){
                        localStorage.setItem("token_Dr",token);
                        navigate("/")
                  }

      }

    } catch (error) {
      console.log(error)
    }
  }

  const HandleClickofRegister = ()=>{

    navigate("/Register")
  }
  return (
    <div className='logcompmain'>{show && <Pop mes={popdata} setShow={setShow}/>} 
    {/* <UserContext.Provider value={{ gemail, gname }}>
      <RegisterComp />
    </UserContext.Provider> */}
        <span className='sidename'>Email:</span>
        <input type="text" value={emailimp} onChange={(e)=>{setEmailimp(e.target.value)}} className="inpset" />
        <span className='sidename'>Password:</span>
        <input type="password" value={passimp} onChange={(e)=>{setPassimp(e.target.value)}}className="inpset" />

        <button className="evatuatelog" onClick={handleClickOflogginginuser}>Sign in</button>
        <span className='logOr'>Or</span>
        <button className="evatuatelog" onClick={HandleClickofRegister}>Register</button>
        <button className="Googlelog" onClick={loginGoogle}><img  className="Googlelogo"src={GoImg} alt="" />Google LOgin</button>
    </div>

  )
}

export default Logincomp