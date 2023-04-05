import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.module.css'
import { NavLink } from 'react-bootstrap';
//material icons
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    const menuTop = [
      {
        path:'/phone',
        name: "113 567 900",
        icon: <PhoneIcon/>
    },
    
    {
        path:'/calendar',
        name: "Đặt lịch hẹn",
        icon: <CalendarTodayIcon/>
    },
    {
        path:'/transactions',
        name: "Lịch sử đơn hàng",
        icon: <HistoryIcon/>
    },
    {
        path:'/orders',
        name: "Giỏ hàng",
        icon: <ShoppingCartIcon/>
    },
    ]
    const menuPages = [
        {
            path:'/',
            name: "Trang chủ"
        },
        {
            path:'/products',
            name: "Sản phẩm"
        },
        {
            path:'/blog',
            name: "Blog"
        },
        {
            path:'/about',
            name: "Về chúng tôi"
        },
        {
            path:'/account',
            name: "Tài khoản"
        },
    ]
  return (
    <>
    <Navbar className='navbar-header' expand='lg'>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="item">
            <img
              src={require('../../assets/images/logo.png')}
              alt=""
              className="logo"
            />
          </div>
          <Nav className="me-auto">
          {
                menuTop.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                      <div className='items'>
                      <div className='icon'>{item.icon}</div>
                        <div className='item'>{item.name}</div>
                        </div>
                    </NavLink>
                ))
            }
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

    <Navbar className='navbar-main' expand='lg'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuPages.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                        <div className='list_item'>{item.name}</div>
                    </NavLink>
                ))
            }
          </Nav>
          <Nav className='ma-auto'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Tìm kiếm nhanh" aria-label="Search" size="90"/>
                    <button className="btn btn-outline-success" type="submit"><SearchIcon/></button>
                </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;