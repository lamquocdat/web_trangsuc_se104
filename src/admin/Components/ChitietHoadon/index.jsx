import Container from "react-bootstrap/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ChitietHoadon.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
    const { mahd } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/order/hd/${mahd}`)
          .then((response) => {
            setOrders(response.data)
            console.log(response.data)
          })
          .catch((error) => {
              console.log(error);
            });
    }, []);

    return(
        <Container fluid>
            <div className={"border-l-3 py-4"}>
                <TableContainer component={Paper} className={styles.table}>
                    <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                        <TableCell className={styles.tableCell+ " text-center"}>STT</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Sản phẩm</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Loại sản phẩm</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Số lượng</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Đơn vị tính</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Đơn giá</TableCell>
                            <TableCell className={styles.tableCell+ " text-center"}>Thành tiền</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.length > 0 && orders[0].sanphams.map((sp, index) => {
                                return (
                                    <TableRow key={index+1}>
                                        <TableCell className={styles.tableCell+ " text-center"} >{index +1}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>
                                        <div className={styles.cellWrapper}>
                                            <img src={sp.hinhanh} alt="" className={styles.image} />
                                            {sp.sanpham}
                                        </div>
                                        </TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{sp.loaisp}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{sp.sl}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{sp.dvt}</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{sp.dongia} vnđ</TableCell>
                                        <TableCell className={styles.tableCell+ " text-center"}>{sp.thanhtien} vnđ</TableCell>
                                    </TableRow>
                                );
                            })}  
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
        </Container>  
    );
}