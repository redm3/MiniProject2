import { useState } from 'react'

import './App.css'
import { ParticlesBackground } from './components/Background/ParticlesBackground'
import Login from './components/Login/LoginMUI'
import { UserProvider } from './context/UserContext'
import { MyThemeProvider } from './context/MyThemeContext'
/* import LoginMUIPage from './pages/LoginMUIPage' */
/* import Layout from './components/NavBar/ProSideBar' */
/* import { Routes, Route, Link } from "react-router-dom";  */
/* import DashboardPage from './pages/Dashboard' */
import Router from './routes/Router'

function App() {

  return (
    <div className="App">
      <Router/>
      {/* <LoginMUIPage/> */}
      {/* <Layout/> */}

      {/* <DashboardPage/> */}
  

    </div>
  )
}

export default App


