import React from 'react'
import HomeBar from '../components/HomeBar'
import DigitalClock from '../components/DigitalClock'
import "./Home.css"
import BoxingBox from '../components/BoxingBox.jsx'
import Banner from '../components/Banner.jsx'
import Slider from '../components/Slider.jsx'
import NextTab from '../components/Next-Tab.jsx'
import ImageSlider from '../components/ImageSlider.jsx'
const Home = () => {
  return (
    <div className='HomeMainBaring'>
        <div className="dd1"><HomeBar hominame={"WelCome,Back To Home"}/>
        <div className="dd2"><DigitalClock/></div>
        <ImageSlider/>
        <NextTab/>
        <Slider/>
        </div>
        {/* <Banner/> */}
        
    </div>
  )
}

export default Home