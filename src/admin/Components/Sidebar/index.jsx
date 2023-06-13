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
          <p className={styles.title}>MAIN</p>
          <li>
            <Link to="/homeAdmin" style={{ textDecoration: 'none' }}>
              <DashboardIcon className={styles.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className={styles.title}>LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Người Dùng</span>
            </li>
          </Link>
          <Link to="/admin/productsPage" style={{ textDecoration: 'none' }}>
            <li>
              <DiamondIcon className={styles.icon} />
              <span>Sản Phẩm</span>
            </li>
          </Link>

          <Link to="/warehouse" style={{ textDecoration: 'none' }}>
            <li>
              <WarehouseIcon className={styles.icon} />
              <span>Tồn Kho</span>
            </li>
          </Link>

          <Link to="/HoadonAdmin" style={{ textDecoration: 'none' }}>
            <li>
              <ReceiptIcon className={styles.icon} />
              <span>Phiếu Bán Hàng</span>
            </li>
          </Link>

          <Link to="/admin/vouchersPage" style={{ textDecoration: 'none' }}>
            <li>
              <NoteAltIcon className={styles.icon} />
              <span>Phiếu Mua Hàng</span>
            </li>
          </Link>
          <Link to="/service" style={{ textDecoration: 'none' }}>
            <li>
              <BallotIcon className={styles.icon} />
              <span>Phiếu Dịch Vụ</span>
            </li>
          </Link>

          <Link to="/admin/paymentPage" style={{ textDecoration: 'none' }}>
            <li>
              <PaidIcon className={styles.icon} />
              <span>Xác Nhận Thanh Toán</span>
            </li>
          </Link>
          <Link to="/orderVerification" style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className={styles.icon} />
              <span>Xác Nhận Đặt Hàng</span>
            </li>
          </Link>

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
