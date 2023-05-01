import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
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
          <Link to="/" >
              <img
                src={require("../../assets/images/logo.png")}
                alt=""
                className="logo"
                style={{
                  width: "250px",
                  height: "35px",
                  borderRadius: "none",
                  marginRight: "100px",
                  marginLeft: "10px",
                }}
              />
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={styles.navTop}>

              <Nav.Link className={styles.items}>
              <Link to="/" className={styles.singleItem} >             
                <div className={styles.item}>
                  <PhoneIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    1800 54 54 57
                  </div>
                </div>
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.items}>
              <Link to="/book" className={styles.singleItem} >   
                <div className={styles.item}>
                  <CalendarTodayIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Đặt lịch hẹn
                  </div>
                </div>
              </Link>
              </Nav.Link>

              <Nav.Link className={styles.items}>
              <Link to="/" className={styles.singleItem} >   
                <div className={styles.item}>
                  <HistoryIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Lịch sử đơn hàng
                  </div>
                </div>
                </Link>
              </Nav.Link>

              <Nav.Link className={styles.items}>
              <Link to="/cart" className={styles.singleItem} >   
                <div className={styles.item}>
                  <ShoppingCartIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Giỏ hàng
                  </div>
                </div>
              </Link>
              </Nav.Link>

              <Nav.Link href="#user" className={styles.items}>
              <Link to="/" className={styles.singleItem} >   
                <div className={styles.item}>
                  <PersonIcon className={styles.icon} />
                  <div className={styles.action} href="#">
                    Đăng nhập
                  </div>
                </div>
              </Link>
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
            <Nav variant="tabs" className={"me-auto " + styles.pages}>
              <Nav.Link eventKey="link-1" className={styles.page}>
              <Link to="/" className={styles.singlePage} >
                  Trang chủ
              </Link>
              </Nav.Link>
              {/* <Nav.Link eventKey="link-2" href="#products" className={styles.page}><b style={{fontWeight: "500 "}}>Sản phẩm</b></Nav.Link> */}
              <NavDropdown
                className={styles.page}
                style={{ fontWeight: "500" }}
                title="Sản phẩm"
              >
                <NavDropdown.Item >
                  <Link to="/products/nhan" className={styles.singlePage} style={{fontSize:"17px"}}>Nhẫn</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to="/products/bong-tai" className={styles.singlePage} style={{fontSize:"17px"}}>Bông tai</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                <Link to="/products/day-chuyen" className={styles.singlePage} style={{fontSize:"17px"}}>Dây chuyền</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="link-3" className={styles.page}>
                <Link to="/blog" className={styles.singlePage} >
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link  eventKey="link-4" className={styles.page}>
              <Link to="/aboutus" className={styles.singlePage} >
                  Về chúng tôi
              </Link>
              </Nav.Link>
              <Nav.Link eventKey="link-5" className={styles.page}>
                <Link to="/*" className={styles.singlePage} >
                  Tài khoản
                </Link>
              </Nav.Link>
            </Nav>
            <Form className={"d-flex " + styles.form}>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={"me-2 " + styles.formcontrol}
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
