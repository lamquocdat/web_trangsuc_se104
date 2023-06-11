import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const _id = localStorage.getItem('_id');
  const handleLogout = () => {
    localStorage.removeItem('_id');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const [userQuery, setUserQuery] = useState('');
  const handleChangeUserQuery = (e) => {
    setUserQuery(e.target.value);
  };

  //lấy số sản phẩm trong giỏ hàng
  const [productAmount, setProductAmount] = useState(0);
  const [cart, setCart] = useState({});
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/cart/${_id}`)
      .then((res) => {
        setCart(res.data);
        setProductAmount(res.data.sanphams.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cart]);

  return (
    <>
      {/* nav 1 */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.firstNav}
      >
        <Container className={styles.myContainer}>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={require('../../assets/images/logo.png')}
                alt=""
                className="logo"
                style={{
                  width: '250px',
                  height: '35px',
                  borderRadius: 'none',
                  marginRight: '100px',
                  marginLeft: '10px',
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={styles.navTop}>
              <Nav.Link className={styles.items}>
                <Link to="/" className={styles.singleItem}>
                  <div className={styles.item}>
                    <PhoneIcon className={styles.icon} />
                    <div className={styles.action} href="#">
                      1800 54 54 57
                    </div>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.items}>
                <Link to={`/book/${_id}`} className={styles.singleItem}>
                  <div className={styles.item}>
                    <CalendarTodayIcon className={styles.icon} />
                    <div className={styles.action} href="#">
                      Đặt lịch hẹn
                    </div>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.items}>
                <Link to={`/orders/${_id}`} className={styles.singleItem}>
                  <div className={styles.item}>
                    <HistoryIcon className={styles.icon} />
                    <div className={styles.action} href="#">
                      Lịch sử đơn hàng
                    </div>
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.items}>
                <Link to="/cart" className={styles.singleItem}>
                  <div className={styles.item}>
                    <div className="position-relative">
                      <ShoppingCartIcon className={styles.icon} />
                      <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger m-0"
                        style={{ fontSize: 10 }}
                      >
                        {productAmount}
                      </span>
                    </div>
                    <div className={styles.action} href="#">
                      Giỏ hàng
                    </div>
                  </div>
                </Link>
              </Nav.Link>
              {token && role === 'user' ? (
                <>
                  <Nav.Link className={styles.items} onClick={handleLogout}>
                    <div className={styles.item}>
                      <PersonIcon className={styles.icon} />
                      <div className={styles.action} href="#">
                        Đăng xuất
                      </div>
                    </div>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link href="/login" className={styles.items}>
                  <div className={styles.item}>
                    <PersonIcon className={styles.icon} />
                    <div className={styles.action} href="#">
                      Đăng nhập
                    </div>
                  </div>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* nav 2 */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className={styles.secondNav}
      >
        <Container className={styles.myContainer}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav variant="tabs" className={'me-auto ' + styles.pages}>
              <Nav.Link eventKey="link-1" href="/" className={styles.page}>
                <b style={{ fontWeight: '500 ' }}>Trang chủ</b>
              </Nav.Link>
              {/* <Nav.Link eventKey="link-2" href="#products" className={styles.page}><b style={{fontWeight: "500 "}}>Sản phẩm</b></Nav.Link> */}
              <NavDropdown
                className={styles.page}
                style={{ fontWeight: '500' }}
                title="Sản phẩm"
              >
                <NavDropdown.Item>
                  <Link
                    to="/products/nhan"
                    className={styles.singlePage}
                    style={{ fontSize: '17px' }}
                  >
                    Nhẫn
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/products/bong-tai"
                    className={styles.singlePage}
                    style={{ fontSize: '17px' }}
                  >
                    Bông tai
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/products/day-chuyen"
                    className={styles.singlePage}
                    style={{ fontSize: '17px' }}
                  >
                    Dây chuyền
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="link-3" href="/blog" className={styles.page}>
                <b style={{ fontWeight: '500 ' }}>Blog</b>
              </Nav.Link>
              <Nav.Link eventKey="link-4" href="/aboutus" className={styles.page}>
                <b style={{ fontWeight: '500 ' }}>Về chúng tôi</b>
              </Nav.Link>
              <Nav.Link
                eventKey="link-5"
                href={`/account/${_id}`}
                className={styles.page}
              >
                <b style={{ fontWeight: '500 ' }}>Tài khoản</b>
              </Nav.Link>
              <Nav.Link
                eventKey="link-5"
                href={`/homeAdmin`}
                target={'_blank'}
                className={styles.page}
              >
                <b style={{ fontWeight: '500 ' }}>Dashboard</b>
              </Nav.Link>
            </Nav>
            <Form className={'d-flex ' + styles.form}>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={'me-2 ' + styles.formcontrol}
                aria-label="Search"
                value={userQuery}
                onChange={handleChangeUserQuery}
              />

              <Button
                variant="secondary"
                className={styles.button}
                onClick={() => {
                  navigate(`/search?query=${userQuery}`);
                }}
              >
                <SearchIcon />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
