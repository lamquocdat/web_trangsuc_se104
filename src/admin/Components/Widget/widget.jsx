import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DiamondIcon from '@mui/icons-material/Diamond';
import styles from "./widget.module.css"
import DataTable from "./dataTable";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Widget() {
  //lấy tổng số user
  const [users, setUsers ] = useState(0);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
    .then((res)=>{
      setUsers(res.data.length);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  //lấy tổng số đơn hàng với tình trạng đã giao hàng
  const [orders, setOrder ] = useState(0);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/tinhtrang/%C4%90%C3%A3%20giao%20h%C3%A0ng`)
    .then((res)=>{
      setOrder(res.data.length);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  //lây tổng số sản phẩm
  const [Products, setProducts ] = useState(0);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`)
    .then((res)=>{
      setProducts(res.data.length);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  //lấy doanh thu từ các hóa đơn đã giao hàng
  const [revenue, setRevenue ] = useState(0);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/order/tinhtrang/Đã%20giao%20hàng`)
    .then((res)=>{
      let total = 0;
      console.log(res.data)
      for (const order of res.data){
        for(const sp of order.sanphams)
          total+=sp.thanhtien;
      }
      setRevenue(total);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  //hàm fomat định dạng tiền việt nam
  const formatCurrency = (value) => {
    const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formattedValue} đ`;
  };

    const products = [
      {
        id: "p1",
        title: "Người dùng",
        isMoney: false,
        amount:users,
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
        title: "Đơn hàng",
        isMoney: false,
        amount: orders,
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
        title: "Sản phẩm",
        isMoney: false,
        amount:Products,
        icon: (
          <DiamondIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",fontSize:"28px", padding:"5px",borderRadius:"5px", alignSelf:"flex-end" }}
          />
        ),
      },
      {
        id: "p4",
        title: "Doanh thu",
        isMoney: true,
        amount: formatCurrency(revenue),
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
            <DataTable products={products}/>
          </Row> 
        </Container>
      </div>
    );
  }

export default Widget;
