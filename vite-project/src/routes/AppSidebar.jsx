
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, Outlet } from "react-router-dom";


/* import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Transactions from '../pages/Transactions';
import Logout from '../pages/Logout'; */
/* import LoginMUIPage from '../pages/LoginMUIPage'; */

const AppSidebar = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
          <Menu>
          <MenuItem
            className="menu1"
            icon={<MenuRoundedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
          >
              <h2>QUICKERPAY</h2>
            </MenuItem>
            <MenuItem
              component={<Link to="dashboard" className="link" />}
              icon={<GridViewRoundedIcon />}
            >
              Dashboard
            </MenuItem>
            <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
            <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
              <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
            </SubMenu>
            <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
              <MenuItem icon={<AccountBalanceRoundedIcon />}>
                Current Wallet
              </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
            </SubMenu>
            <MenuItem
              component={<Link to="transactions" className="link" />}
              icon={<MonetizationOnRoundedIcon />}
            >
              Transactions 
            </MenuItem>
            <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />}>
                Notifications
              </MenuItem>
            </SubMenu>
            <MenuItem
            component={<Link to="Logout" className="link" />}
             icon={<LogoutRoundedIcon />}
             > 
             Logout 
             </MenuItem>
          </Menu>
        </Sidebar>
        <section>
      
          <Outlet/>
        </section>
      </div>
    );
  };
  export default AppSidebar;