
import { Link } from "react-router-dom";
import styles from "../Sidebar/sidebarAdmin.module.css";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BallotIcon from '@mui/icons-material/Ballot';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DiamondIcon from '@mui/icons-material/Diamond';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FeedbackIcon from '@mui/icons-material/Feedback';





function AdminSidebar() {
  return (
   
    <div className={styles.sidebar}>
      
      
      <div className={styles.center}>
      
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
          <Link to="/homeAdmin" style={{ textDecoration: "none" }}>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
            </Link>
          </li>
          <p className={styles.title}>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Người Dùng</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <DiamondIcon className={styles.icon} />
              <span>Sản Phẩm</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className={styles.icon} />
              <span>Giao Dịch</span>
            </li>
          </Link>
          
          <Link to="/storage" style={{ textDecoration: "none" }}>
            <li>
              <WarehouseIcon className={styles.icon} />
              <span>Tồn Kho</span>
            </li>
          </Link>

          <Link to="/phieubanhang" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptIcon className={styles.icon} />
              <span>Phiếu Bán Hàng</span>
            </li>
          </Link>
          <Link to="/phieudichvu" style={{ textDecoration: "none" }}>
            <li>
              <BallotIcon className={styles.icon} />
              <span>Phiếu Dịch Vụ</span>
            </li>
          </Link>
          
          <p className={styles.title}>Analys</p>
          <li>
            <CalendarMonthIcon className={styles.icon} />
            <span>Calendar</span>
          </li>
          <li>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li>
            <FeedbackIcon className={styles.icon} />
            <span>Feedback</span>
          </li>
          
          <p className={styles.title}>Options</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
     
    </div>
    
  );
}

export default AdminSidebar;


