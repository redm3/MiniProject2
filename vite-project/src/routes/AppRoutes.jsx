import { Routes, Route, Link } from "react-router-dom";
import LoginMUIPage from "../pages/LoginMUIPage";
import AppSidebar from "./AppSidebar";
import ProtectedRoute from "./ProtectedRoute"
import Home from "../pages/Home";
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import Logout from '../pages/Logout';
import CurrentWallet from "../pages/CurrentWallet";
import CoinSummaryPage from "../pages/CoinSummaryPage";
import CryptoPrice from "../components/charts/CryptoPrice";
import Invoices from "../pages/Invoices";
import Wallet from "../pages/Wallet";

function AppRoutes(props) {

    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute><AppSidebar {...props} /></ProtectedRoute>} >
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="coinsummarypage" element={<CoinSummaryPage />} />
                <Route path="cryptoprice" element={<CryptoPrice />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="Logout" element={<Logout />} />
                <Route path="currentWallet" element={<CurrentWallet />} />

            </Route>

            <Route path='/login' element={<LoginMUIPage {...props} />} />
        </Routes>

    )
}


export default AppRoutes
