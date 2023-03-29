import { useContext } from 'react';

/* import React from 'react' */
/* import { Redirect, Route } from 'react-router-dom'; */
/* import { useNavigate } from 'react-router-dom'; */
import { UserContext } from '../context/UserContext';
import { ParticlesBackground } from '../components/Background/ParticlesBackground';
import Login from '../components/Login/LoginMUI';
import { UserProvider } from '../context/UserContext';
import { MyThemeProvider } from '../context/MyThemeContext';
import {Outlet, useNavigate} from 'react-router-dom'

function LoginMUIPage() {
/*     const { username = '' } = useContext(UserContext);
    const navigate = useNavigate();

    if (username) navigate("/dashboardpage"); */

/*          if (username) {
          return <useNavigate to="/dashboard" />;
        }  */

    return (
        <div>
            <MyThemeProvider>
                <UserProvider>
                    <ParticlesBackground />
                    <Login />
                    <Outlet/>
                </UserProvider>
            </MyThemeProvider>
        </div>
    );
}

export default LoginMUIPage