
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
import Button from "@mui/material/Button";




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
              <h3>QUICKERPAY</h3>
            </MenuItem>
            <MenuItem
              component={<Link to="dashboard" className="link" />}
              icon={<GridViewRoundedIcon />}
            >
              Dashboard
            </MenuItem>
            <MenuItem
            component={<Link to="invoices" className="link" />}
             icon={<ReceiptRoundedIcon />}
             >
              Invoices
            </MenuItem>
            <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
              <MenuItem 
              component={<Link to="coinsummarypage" className="link" />}
              icon={<TimelineRoundedIcon />}
              > 
              Coin Summary 
              </MenuItem>
              <MenuItem 
              component={<Link to="cryptoprice" className="link" />}
              icon={<BubbleChartRoundedIcon />}
              >
              Commodity Price
              </MenuItem>
            </SubMenu>
            <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
              <MenuItem 
              component={<Link to="wallet" className="link" />}
              icon={<AccountBalanceRoundedIcon />}
              >
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