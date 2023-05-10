import styles from "./viewService.module.css"
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewService = () => {

  const { s_id } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        axios
          .get(`https://dialuxury.onrender.com/service/sid/${s_id}`)
          .then((response) => {
            setService(response.data)
            console.log(response.data);
          })
          .catch((error) => {
              console.log(error);
            });
    }, []);
    // Tính toán total money của Phiếu Dịch Vụ
    // const totalMoney = service.reduce((accumulator, currentValue, index) => {

    //   let temp = 0;
    //   service[0].serviceTypes.map((svt, index) => {
    //     temp = accumulator + currentValue.svt[index].total;
        
    //     return (
    //     index++
          
    //     )
    //   })
    //   return temp;
    // }, 0);


  return (
    <div className={styles.servicePage} >
      {/* PHIẾU DỊCH VỤ */}
      <div className={styles.datatable_1} style={{marginTop:"40px"}}>
      <div className={styles.datatableTitle}>
        <b>Bảng Chi Tiết Phiếu Dịch Vụ</b>
        <div className={styles.buttonFuction}>
        
        <Link to="/service/adjustService" className={styles.link}>
          Chỉnh Sửa
        </Link>
        </div>
      </div>
      <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell className={styles.tableCell+ " text-center"}>Mã Phiếu</TableCell>
          <TableCell className={styles.tableCell+ " text-center"}>Tên Phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Số Phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Khách hàng</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Ngày lập</TableCell>
          
          
            
          </TableRow>
        </TableHead>
        <TableBody>
          {service.map((service) => (
            <TableRow
              key={service.s_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={styles.tableCell+ " text-center"}>{service.s_id}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{service.s_name}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{service.s_number}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{service.makh}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{service.s_date}</TableCell>
           
     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>

    <div className={styles.datatable_2} style={{marginTop:"40px"}}>
      <div className={styles.datatableTitle}>
        <b>Loại Dịch Vụ Bao Gồm Trong Phiếu:</b>
        <div className={styles.buttonFuction}>
        <Link to="/service/addTypeInService" className={styles.link} style={{marginRight:"20px"}}>
        Thêm Loại
        </Link>
        <Link to="/service/adjustTypeInService" className={styles.link}>
          Chỉnh Sửa
        </Link>
        </div>
      </div>
    
    <Container fluid>
            <div className={"border-l-3 py-4"}>
                <TableContainer component={Paper} className={styles.table}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                        <TableCell className={styles.tableCell+ " text-center"}>STT</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Tên Dịch Vụ</TableCell>
                            
                            <TableCell className={styles.tableCell+ " text-center"}>Số lượng</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Giá</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Tổng Tiền</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Trả Trước</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Còn Lại</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Ngày Lập</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {service.length > 0 && service[0].serviceTypes.map((serviceTypes, index) => {
                                return (
                                    <TableRow key={index+1}>
                                        <TableCell className={styles.tableCell+ " text-center"} >{index +1}</TableCell>
                                       
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.name}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.number}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.price} VNĐ</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.total} VNĐ</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.payFirst} VNĐ</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.payLeft} VNĐ</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{serviceTypes.ngaygiao}</TableCell>
                                    </TableRow>
                                );
                            })}  
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
        </Container>  
    {/* <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Tổng Tiền: </b>
    </div>
    <div className={styles.totalCost}>
          {totalMoney} VNĐ
    </div>
    
       
    </div>
      <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Đã Trả: </b>
    </div>
    <div className={styles.totalCost}>
          5.000.000 VNĐ
    </div>
    
       
      </div>
      <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Còn Lại: </b>
    </div>
    <div className={styles.totalCost}>
          5.500.000 VNĐ
    </div>
    
       
      </div> */}
      
    </div>
    </div>
  );
};

export default ViewService;
