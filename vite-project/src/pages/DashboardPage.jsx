import React from 'react'
import Layout from '../components/NavBar/ProSideBar'
import {Outlet, useNavigate} from 'react-router-dom'
import { UserContext } from "../context/UserContext";

export default function DashboardPage() {
    const navigate = useNavigate();
    const { username } = React.useContext(UserContext);
  return (
    <div>
        <p>Welcome to your dashboard, {username}</p>
        <Layout />
    </div>
    
  )
}
