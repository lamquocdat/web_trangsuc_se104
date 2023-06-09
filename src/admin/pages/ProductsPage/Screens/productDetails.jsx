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

function ProductDetails() {
  //Hiển thị dữ liệu các sản phẩm:
  const [product, setProduct] = useState([]);

  const { id } = useParams(); //lấy id từ url
  console.log(id);

  //lấy thông tin sản phẩm
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/product/${id}`)
      .then((response) => {
        setProduct(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
                  SL Đã Bán
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  SL Còn Lại
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Chất Liệu
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Khối Lượng
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Kích Thước
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Màu Sắc
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={product.id}>
                <TableCell className={styles.tableCell + " text-center"}>
                  {product.quantity_sold}
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                ></TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {product.quality}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {product.mass}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {product.size}
                </TableCell>

                <TableCell className={styles.tableCell + " text-center"}>
                  {product.color}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default ProductDetails;
