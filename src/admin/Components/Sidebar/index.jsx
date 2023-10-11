import { Link, useNavigate } from 'react-router-dom';
import styles from '../Sidebar/sidebarAdmin.module.css';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BallotIcon from '@mui/icons-material/Ballot';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DiamondIcon from '@mui/icons-material/Diamond';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function AdminSidebar() {
  const navigate = useNavigate();
  const role1 = localStorage.getItem('role1');
  const handleLogout = () => {
    localStorage.removeItem('_id');
    localStorage.removeItem('token');
    localStorage.removeItem('role1');
    localStorage.removeItem('username');
    navigate('/loginAdmin');
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.center}>
        <ul>
          <li>
            <p className={styles.title}>MAIN</p>
          </li>
          <li>
            <Link to="/homeAdmin" style={{ textDecoration: 'none' }}>
              <DashboardIcon className={styles.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <p className={styles.title}>LISTS</p>
          </li>
          <li>
            <Link to="/users" style={{ textDecoration: 'none' }}>
                <PersonOutlineIcon className={styles.icon} />
                <span>Người Dùng</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/productsPage" style={{ textDecoration: 'none' }}>
                <DiamondIcon className={styles.icon} />
                <span>Sản Phẩm</span>
            </Link>
          </li>
          <li>
            <Link to="/warehouse" style={{ textDecoration: 'none' }}>
                <WarehouseIcon className={styles.icon} />
                <span>Tồn Kho</span>
            </Link>
          </li>
          <li>
            <Link to="/HoadonAdmin" style={{ textDecoration: 'none' }}>
                <ReceiptIcon className={styles.icon} />
                <span>Phiếu Bán Hàng</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/vouchersPage" style={{ textDecoration: 'none' }}>
                <NoteAltIcon className={styles.icon} />
                <span>Phiếu Mua Hàng</span>
            </Link>
          </li>
          <li>
            <Link to="/service" style={{ textDecoration: 'none' }}>
                <BallotIcon className={styles.icon} />
                <span>Phiếu Dịch Vụ</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/paymentPage" style={{ textDecoration: 'none' }}>
                <PaidIcon className={styles.icon} />
                <span>Xác Nhận Thanh Toán</span>
            </Link>
          </li>
          <li>
            <Link to="/orderVerification" style={{ textDecoration: 'none' }}>
                <LocalShippingIcon className={styles.icon} />
                <span>Xác Nhận Đặt Hàng</span>
            </Link>
          </li>
          <p className={styles.title}>Options</p>
          {role1 === 'admin' ? (
            <li onClick={handleLogout}>
              <ExitToAppIcon className={styles.icon} />
              <span>Đăng xuất</span>
            </li>
          ) : (
            <li>
              <Link className="text-decoration-none" to="/loginAdmin">
                <ExitToAppIcon className={styles.icon} />
                <span>Đăng nhập</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AdminSidebar;
