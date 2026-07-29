import React from 'react'
import Banner from '../components/Banner'
import "./Schedules.css"
const Schedules = () => {
  return (
    <div className='SChedulesMainBaring'>
      <Banner immg="https://cdni.iconscout.com/illustration/premium/thumb/doctor-holding-patient-report-illustration-svg-download-png-8488348.png" Nameme="Tab On Time! " tot="Have Your Tab"/>
      <div className="d"><div className="DiseaseGot"><span className='spancurrent'>upcomin:</span><span className="diseasespaan">Tablet</span></div>
      <div className="DiseaseGot"><span className='spancurrent'>current:</span><span className="diseasespaan">Disease</span></div>
      <div className="DiseaseGot"><span className='spancurrent'>Duration:</span><span className="diseasespaan">Duration</span></div>
           <div className="DiseaseGot"><span className="diseasespaan">Add</span></div></div>
           <div className="dddi">
            <div className="historyoftab"><span className="historyofh">History:</span><span className="warnigtabsch">History</span></div>
            <div className="historyoftab"><span className="historyofh">Warning:</span><span className="warnigtabsch">Warning</span></div>
           </div>
      
    </div>
  )
}

export default Schedules