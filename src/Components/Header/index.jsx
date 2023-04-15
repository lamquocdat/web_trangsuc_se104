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

function Header() {
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
            <a className="navbar-brand text-info" href="http://localhost:3000/">
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
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={styles.navTop}>
              <Nav.Link href="#phone" className={styles.items}>
                <div className={styles.item}>
                  <PhoneIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    1800 54 54 57
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#calendar" className={styles.items}>
                <div className={styles.item}>
                  <CalendarTodayIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Đặt lịch hẹn
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#history" className={styles.items}>
                <div className={styles.item}>
                  <HistoryIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Lịch sử đơn hàng
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="#yourStore" className={styles.items}>
                <div className={styles.item}>
                  <ShoppingCartIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Giỏ hàng
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link href="/login" className={styles.items}>
                <div className={styles.item}>
                  <PersonIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Đăng nhập
                  </div>
                </div>
              </Nav.Link>
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
                style={{ fontWeight: '500 ' }}
                title="Sản phẩm"
              >
                <NavDropdown.Item href="/products/nhan">Nhẫn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products/bong-tai">
                  Bông Tai
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products/day-chuyen">
                  Dây chuyền
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="link-3" href="/blog" className={styles.page}>
                <b style={{ fontWeight: '500 ' }}>Blog</b>
              </Nav.Link>
              <Nav.Link eventKey="link-4" href="#about" className={styles.page}>
                <b style={{ fontWeight: '500 ' }}>Về chúng tôi</b>
              </Nav.Link>
              <Nav.Link
                eventKey="link-5"
                href="/account"
                className={styles.page}
              >
                <b style={{ fontWeight: '500 ' }}>Tài khoản</b>
              </Nav.Link>
            </Nav>
            <Form className={'d-flex ' + styles.form}>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={'me-2 ' + styles.formcontrol}
                aria-label="Search"
              />

              <Button variant="secondary" className={styles.button}>
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
