import React from 'react'
import './Banner.css'

function Banner({immg , Nameme,tot}) {
  return (
    <div>
        <div className="box">
            <div className='para'>
                <h1>{Nameme}</h1>
                <h3>{tot}</h3>
            </div>
            
            {/* // <img src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-holding-patient-report-illustration-svg-download-png-8488348.png" alt="" /> */}
            <img src={immg} alt="" />
        </div>
    </div>
  )
}

export default Banner