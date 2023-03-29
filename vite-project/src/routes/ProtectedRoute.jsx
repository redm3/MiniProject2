import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// see https://www.robinwieruch.de/react-router-private-routes/
function ProtectedRoute({ redirectPath = '/dashboardpage', children }) {
    const {username} = useContext(UserContext)
    if (!username) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet/>;
}

export default ProtectedRoute