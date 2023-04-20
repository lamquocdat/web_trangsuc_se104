

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styles from "./widget.module.css"
import DataTable from "./dataTable";
function Widget() {
    const products = [
    {
      id: "p1",
      title: "USERS",
      isMoney: false,
      link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              fontSize:"28px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end"
            }}
          />
        ),
   
    },
    {
      id: "p2",
      title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              fontSize:"28px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end"
            }}
          />
        ),
  
    },
    {
      id: "p3",
      title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",fontSize:"28px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end" }}
          />
        ),
      
    },
    {
      id: "p4",
      title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              fontSize:"28px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end"
            }}
          />
        ),
   
    },
   
  
  ];
  
    return (
      <div>
        <Container fluid className={styles.myContainer}>
          
          <Row>
            <h4 className="pb-3" style={{ color: "rgb(189, 120, 189)", marginTop: "15px", textAlign: "center", fontSize:"27px"}}>
            Bảng Thống Kê Dữ Liệu
            </h4>
          </Row>
          <Row style={{marginTop:"-50px"}}>
          <DataTable products={products} />
          </Row>
         
          
  
          
          
        </Container>
      </div>
    );
  }

export default Widget;
