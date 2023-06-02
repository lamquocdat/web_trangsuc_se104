import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Image } from "react-bootstrap";

function VouchersDetails() {
  const [voucher, setVoucher] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/vouchers/${id}`)
      .then((res) => {
        setVoucher(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const calculateTotal = (price, amount) => {
    return price * amount;
  };
  return (
    <Container fluid>
      <div className={"border-l-3 py-4"}>
        <h3 style={{ color: "#646161" }}>Chi tiết phiếu mua hàng</h3>
        <br></br>
        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  STT
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Tên Sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Ảnh Sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Loại sản phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số lượng
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Đơn vị tính
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Giá Sản Phẩm
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Thành tiền
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voucher.products?.map((product, index) => (
                <TableRow key={product.index}>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {index + 1}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.name}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    <Image
                      src={product.image}
                      roundedCircle="true"
                      style={{ width: "50px", height: "50px" }}
                    ></Image>
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.category}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.amount}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.Unit}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.price}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {calculateTotal(product.price, product.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default VouchersDetails;
