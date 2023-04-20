
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdminSidebar from "../../Components/Sidebar";
import AdminNavbar from "../../admin/Components/Navbar";
import { useEffect, useState } from "react";
// import NorthIcon from "@mui/icons-material/North";


function AdminLayout({ children }) {
    const [backToTopButton, setBackToTopButton] = useState(false);
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY / (scrollHeight - clientHeight) >= 0.7) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Container fluid>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <AdminNavbar />
      <Row>
        <Col sm={2}>
          <div >
            <AdminSidebar />
          </div>
        </Col>
        <Col sm={10}>
        {children}
        </Col>
        
      </Row>
    </Container>
    );
}

export default AdminLayout;

