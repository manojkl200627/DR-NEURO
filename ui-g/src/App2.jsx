import React from 'react'
import Navigation from './User-Side/components/Navigation.jsx'

import { Route,Routes } from 'react-router-dom'
import Home from './User-Side/pages/Home.jsx'
const App2 = () => {
  return (
    <div>

      <Navigation/>
      <Home/>
       
    </div>
  )
}

export default App2