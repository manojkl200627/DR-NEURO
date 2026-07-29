import React from 'react'
import Banner from '../components/Banner'
import SymptomsLoader from '../components/SelectSymptom'

const AiSection = () => {
  return (
    <div  className='HomeMainBaring'>
      <Banner immg="https://png.pngtree.com/png-vector/20250124/ourmid/pngtree-high-tech-ai-medical-robot-with-stethoscope-futuristic-design-png-image_15323577.png" Nameme="Check Your Symptoms;" tot="Dr.Ai!"/>
      <SymptomsLoader/>
    </div>
  )
}

export default AiSection