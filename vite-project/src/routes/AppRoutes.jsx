import { Routes, Route, Link } from "react-router-dom";
import LoginMUIPage from "../pages/LoginMUIPage";
import AppSidebar from "./AppSidebar";
import ProtectedRoute from "./ProtectedRoute"
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import Logout from '../pages/Logout';

function AppRoutes(props) {

    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute><AppSidebar {...props} /></ProtectedRoute>} >
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="Logout" element={<Logout />} />

            </Route>

            <Route path='/login' element={<LoginMUIPage {...props} />} />
        </Routes>

    )
}


export default AppRoutes
