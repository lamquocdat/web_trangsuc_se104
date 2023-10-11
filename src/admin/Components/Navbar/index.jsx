import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import styles from "./navbarAdmin.module.css";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import SearchIcon from "@mui/icons-material/Search";

function AdminNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className={styles.myContainer}>
        <div className="nav-brand">
          <Link to="/">
            <img
              src={require("../../../assets/images/logo.png")}
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
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={"me-auto my-2 my-lg-0" + styles.pages}
            style={{ maxHeight: "100px", borderLeftColor: "black" }}
            navbarScroll
          >
            <div  className={styles.page}>
              <Link to="/" className={styles.singlePage}>
                <NotificationsNoneOutlinedIcon />
              </Link>
            </div>

            <div  className={styles.page}>
              <Link to="/blog" className={styles.singlePage}>
                <ChatBubbleOutlineOutlinedIcon />
              </Link>
            </div>
          </Nav>
          {/* <Form className={"d-flex " + styles.form}>
          <Form.Control
            type="search"
            placeholder="Tìm kiếm"
            className={"me-2 " + styles.formcontrol}
            aria-label="Search"
          />

          <Button variant="secondary" className={styles.button}>
            <SearchIcon />
          </Button>
      </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
