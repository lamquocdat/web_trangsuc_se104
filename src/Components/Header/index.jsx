import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './Header.module.css'
function Header() {
  return (
    <>
    {/* nav 1 */}
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
          <Container className={styles.myContainer}>
            <Navbar.Brand href="#home">
                <a className="navbar-brand text-info" href="http://localhost:3000/">
                <img src={require('../../assets/images/logo.png')} 
                alt="" className="logo" 
                style={{width:"250px", height:"35px", borderRadius:"none", marginRight:"100px", marginLeft:"10px"}}/>
                </a>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      
                      
                  </Nav>
                  <Nav>
                        <Nav.Link href="#phone" className={styles.items}>
                            <div className={styles.item}>
                            <PhoneIcon className={styles.icon}/>       
                            <div className={styles.action} href="#">1800 54 54 57</div>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#phone" className={styles.items}>
                            <div className={styles.item}>
                            <CalendarTodayIcon className={styles.icon}/>       
                            <div className={styles.action} href="#">Đặt lịch hẹn</div>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#phone" className={styles.items}>
                            <div className={styles.item}>
                            <HistoryIcon className={styles.icon}/>      
                            <div className={styles.action} href="#">Lịch sử đơn hàng</div>
                            </div>
                        </Nav.Link>
                        <Nav.Link href="#phone" className={styles.items}>
                            <div className={styles.item}>
                            <ShoppingCartIcon className={styles.icon}/>     
                            <div className={styles.action} href="#">Giỏ hàng</div>
                            </div>
                        </Nav.Link>     
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      
      {/* nav 2 */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className={styles.myContainer}>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={"me-auto " + styles.pages}>
            <Nav.Link href="#features" className={styles.page}>Trang chủ</Nav.Link>
            <Nav.Link href="#pricing" className={styles.page}>Sản phẩm</Nav.Link>
            <Nav.Link href="#pricing" className={styles.page}>Blog</Nav.Link>
            <Nav.Link href="#pricing" className={styles.page}>Về chúng tôi</Nav.Link>
            <Nav.Link href="#pricing" className={styles.page}>Tài khoản</Nav.Link>
            
          </Nav>
          <Form className={"d-flex " + styles.form}>
                          <Form.Control
                              type="search"
                              placeholder="Search"
                              className={"me-2 " + styles.formcontrol}
                              aria-label="Search" 
                              />
                              
                          <Button variant="outline-success">Search</Button>
                      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      </>
  );
}

export default Header;