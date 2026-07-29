import React, { useState, useEffect } from "react";
import "./DigitalClock.css"
import Slider from "./Slider";
function DigitalClock() {
const [currentTime, setCurrentTime] = useState(new Date());
useEffect(() => {
const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 
return () => clearInterval(timer);
  }, []);

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const day = days[currentTime.getDay()];
const date = currentTime.getDate();
const month = months[currentTime.getMonth()];
const year = currentTime.getFullYear();
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const ampm = hours >= 12 ? "PM" : "AM";
const session =
hours < 12 ? "Morning" :
hours < 17 ? "Afternoon" :
hours < 20 ? "Evening" : "Night";
hours = hours % 12;
hours = hours ? hours : 12; 
const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
// const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
return (
  <div className="mmmdt">
    {/* <div className="container">
      <div className="day">{day}</div>
      <div className="session">{session}</div>
      <div className="time">
        {hours}:{formattedMinutes} <span className="ampm">{ampm}</span>
      </div>
      <div className="date">
        {month} {date}, {year}
      </div>
      
    </div> */}
    <div className="container2">
      <span className="ssp34">Book An Appointment</span>
      <button className="but4356">Schedule Now</button>
    </div>
    <div className="container3">
      <span className="ssp34">Contact With EXperts</span>
      <button className="but4356">Contact Now</button>
    </div>
    <div className="container4">
      <span className="ssp34">Need Quick Advice!?</span>
      <button className="but4356">Check Smart Ai</button>
    </div>
  </div>
    
  );
}
export default DigitalClock;