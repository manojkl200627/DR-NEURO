import React, { useContext, useEffect, useState } from 'react'
import "./RegisterCss.css"
import axios from 'axios'
import Pop from './Pop'
import { useNavigate } from 'react-router-dom'

// import { UserContext } from './CreateContext.jsx'
const RegisterComp = () => {

      // const { gemail, gname } = useContext(UserContext);




const [Vcode , setVcode]=useState("")

const nav = useNavigate()

     const back_uri = import.meta.env.VITE_BACK
     const [pop , setPop] = useState(false)
     const [popmes, setPopmes] = useState("")
     
    const [emailimp2,setEmailimp2] = useState("")
    const [passimp,setPassimp] = useState("")
    const [nameinp,setNameimp] = useState("")
    const [active,setActive] = useState(false)
    const [active2,setActive2] = useState(false)
    const [sexset,setSexset] = useState("")
    const [role,setRole]=useState("")
    const [setDone,setSetdone] = useState(false)
    const [emailOTP,setEmailOTP] = useState("")
    const [specialdrtext,setspecialdrtext] = useState("")
   const handleregisterclck = async(e)=>{
            e.preventDefault()
             if(!emailimp2 || !passimp || !nameinp || ! sexset ||!role ){
                        setPop(true);
                        setPopmes("Enter Full Details")
             }
            else{
                  setSetdone(true)
                  try {
                        const resotp = await axios.post(`${back_uri}/api/user/Vcode`,{email:emailimp2})
                        console.log(resotp.data)
                        const resis = resotp.data
                        const Vcode = resis.Vcode;
                        setVcode(Vcode)
                        // console.log(Vcode)
                  } catch (error) {
                        console.log(error)
                  }
            }

   }

const HandleDataflowoftheverify = async () =>{

      try {
            if(Vcode===parseInt(emailOTP)){
                  console.log("Verified")
                  // console.log(emailimp2+""+passimp+""+nameinp+""+ sexset+""+role)
                  const res =await axios.post(`${back_uri}/api/user/register`,{name:nameinp,email:emailimp2,password:passimp,sex:sexset,role:role,specialist:specialdrtext})
                  // console.log(res.data)
                  const resdaat = res.data
                  const token = resdaat.token
                  if(token){
                        localStorage.setItem("token_Dr",token);
                        nav("/")
                  }
            }
                       
      } catch (error) {
            console.log(error)
      }

}

  return (
    <div className='logcompmain2'>{pop && <Pop mes={popmes} setShow={setPop}/>}
      {!setDone ? <> <span className='registernamebro'>Register</span>
            <span className='sidename2'>Name:</span>
            <input type="text" value={nameinp} onChange={(e)=>{setNameimp(e.target.value)}} className="inpset2" />
            <span className='sidename2'>Email:</span>
            <input type="text" value={emailimp2} onChange={(e)=>{setEmailimp2(e.target.value)}} className="inpset2" />
            <span className='sidename2'>Sex:</span>
            <select value={sexset} onChange={(e)=>{setSexset(e.target.value)}} className="inpset2" >
                      <option value="none">none</option>
                      <option value="Male">MALE</option>
                      <option value="FeMale">FEMALE</option>

            </select>
      <span className='sidename2'>Role:</span>
      <div className="roleselect"><a className={active ? "rolePatient activee" : "rolePatient"} onClick={(e)=>{setActive2(false); setActive(!active); setRole("patient")}} >patient</a><a className={active2 ? "roledoctor activee" : "roledoctor"} onClick={(e)=>{setActive(false); setActive2(!active2); setRole("doctor")}}>doctor</a></div>
            
               <span className='sidename2'>Password:</span>
            <input type="password" value={passimp} onChange={(e)=>{setPassimp(e.target.value)}} className="inpset2" />


            {role==="doctor" && <div className="specialistpfdr">
                  <span className='sidename2'>Specialist:</span>
            <input type="text" value={specialdrtext} onChange={(e)=>{setspecialdrtext(e.target.value)}} className="inpset2" /></div>}
            <button className="evatuatelog2" onClick={handleregisterclck}>Create Account</button>
      
            </>: <>
            <div className="otpmain">
                  <span className='verifyname'>Verify OTP</span>
                  <span className="tttext">Check The Mail You Got A OTP From Neuro-Dr Please Verify To Create An Account</span>
            <input type="text" maxlength={6} value={emailOTP} onChange={(e)=>{setEmailOTP(e.target.value)}} className="otpimpbox" placeholder='XXXXXX' />
                  <button className="verifybutton" onClick={HandleDataflowoftheverify}>Verify</button>
            </div></>}
            
            
            
        </div>
  )
}

export default RegisterComp