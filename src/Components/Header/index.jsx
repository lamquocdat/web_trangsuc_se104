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
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const _id = localStorage.getItem("_id");
  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const [userQuery, setUserQuery] = useState("");
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
      <Navbar collapseOnSelect expand="xl" bg="light" variant="light" className={styles.firstNav}>
        <Container className={styles.myContainer}>
            <Link to="/" className="navbar-brand">
              <img src={require("../../assets/images/logo.png")} alt="Logo Image" className="logo"
                style={{
                  width: "250px",
                  height: "35px",
                  borderRadius: "none",
                  marginRight: "100px",
                  marginLeft: "10px",
                }}
              />
            </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={styles.navTop}>
              <Link to="/" className={styles.items +" nav-link text-center"}>
                <div className={styles.item}>
                  <PhoneIcon className={styles.icon} />
                  1800 54 54 57
                </div>
              </Link>
              <Link to={`/book/${_id}`} className={styles.items + " nav-link text-center"}>
                <div className={styles.item}>
                  <CalendarTodayIcon className={styles.icon} />
                  Đặt lịch hẹn
                </div>
              </Link>
              <Link to={`/order/${_id}`} className={styles.items + " nav-link text-center"}>
                <div className={styles.item}>
                  <HistoryIcon className={styles.icon} />
                  Lịch sử đơn hàng
                </div>
              </Link>
              <Link to="/cart" className={styles.items + " nav-link text-center"}>
                  <div className={styles.item}>
                    <div className="position-relative">
                      <ShoppingCartIcon className={styles.icon + "mr-0"} />
                      <span class="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger m-0" style={{ fontSize: 10 }}>
                        {productAmount}
                      </span>
                    </div>
                      Giỏ hàng
                  </div>
              </Link>
              {token && role === "user" ? (
                <>
                  <Link to="#" className={styles.items + " nav-link"} onClick={handleLogout}>
                    <div className={styles.item}>
                      <PersonIcon className={styles.icon} />
                      Đăng xuất
                    </div>
                  </Link>
                </>
              ) : (
                <Link to="/login" className={styles.items + " nav-link"}>
                  <div className={styles.item}>
                    <PersonIcon className={styles.icon} />
                    Đăng nhập
                  </div>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* nav 2 */}
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className={styles.secondNav}>
        <div className={styles.myContainer + " container-fluid"}>
          <Row className="container-fluid justify-content-between">
          <Col xs={12} md={12} lg={7} className="d-flex text-center" style={{ marginLeft: 10 }}>
            <Link to="/" class="navbar-brand">Trang chủ</Link>
            <Nav className="me-auto">
              <NavDropdown style={{ fontWeight: "500" }} title="Sản phẩm">
                <Link to="/products/nhan" className={styles.singlePage + " dropdown-item"} style={{ fontSize: "17px" }}>
                  Nhẫn
                </Link>
                <NavDropdown.Divider />
                <Link to="/products/bong-tai" className={styles.singlePage + " dropdown-item"} style={{ fontSize: "17px" }}>
                  Bông tai
                </Link>
                <NavDropdown.Divider />
                <Link to="/products/day-chuyen" className={styles.singlePage + " dropdown-item"} style={{ fontSize: "17px" }}>
                  Dây chuyền
                </Link>
              </NavDropdown>
                <Link to="/blog" class="nav-link">Blog</Link>
                <Link to="/aboutus" class="nav-link">Về chúng tôi</Link>
                <Link to={`/account/${_id}`} class="nav-link">Tài khoản</Link>
            </Nav>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Form className={"d-flex " + styles.form}>
              <Form.Control
                type="search"
                placeholder="Tìm kiếm"
                className={"me-2 " + styles.formcontrol}
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
          </Col>
          </Row>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
