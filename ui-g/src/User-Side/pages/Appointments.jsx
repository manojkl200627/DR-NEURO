import React from 'react'
import "./Appointments.css"
import Banner from '../components/Banner'
import Category from '../components/Category'
import Slider from "../components/Slider"
const Appointments = () => {
  return (
    <div className='AppMainBaring'>
        <Banner immg="https://img.freepik.com/premium-vector/patient-doctor-s-appointment-vector-illustration_647132-43.jpg" Nameme="Welcome back, User! " tot="Search for the doctor you need"/>
        <Category/>
        <Slider/>
    </div>
  )
}

export default Appointments