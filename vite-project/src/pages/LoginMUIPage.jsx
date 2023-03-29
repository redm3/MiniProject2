import { ParticlesBackground } from '../components/Background/ParticlesBackground';
import Login from '../components/Login/LoginMUI';
import { UserProvider } from '../context/UserContext';
import {Outlet, useNavigate} from 'react-router-dom'

function LoginMUIPage() {
    return (
        <div>
                
                    <ParticlesBackground />
                    <Login />          

        </div>
    );
}

export default LoginMUIPage