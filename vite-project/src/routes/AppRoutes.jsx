import { Routes, Route, Link } from "react-router-dom";
import LoginMUIPage from "../pages/LoginMUIPage"
import ProtectedRoute from "./ProtectedRoute"
import DashboardPage from "../pages/DashboardPage";

function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
             <Route path='/LoginMUIPage' element={<LoginMUIPage {...props} />} />

             <Route path='/DashboardPage' element={<DashboardPage {...props} />} >

            </Route>
{/* 
            <Route path='/loginmuipage' element={<ProtectedRoute redirectPath="/dashboardpage"><LoginMUIPage {...props} /></ProtectedRoute>} />
            <Route index element={<Dashboard {...props} />} /> */}

        </Routes>
    )
}


export default AppRoutes
