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
import styles from "./warehouse.module.css";
import { Image } from "react-bootstrap";

function WarehouseAdmin() {
  const [warehouse, setWarehouse] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/warehouse`)
      .then((res) => {
        setWarehouse(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Container fluid>
      <div className={"border-l-3 py-4"}>
        <h3 style={{ color: "#646161" }}>Chi tiết tồn kho</h3> 
        <div className="d-flex align-items-center my-3">
    <label htmlFor="monthSelect" className="me-3">Tháng:</label>
      <select
        id="monthSelect"
        className="form-select"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        <option value="">Tất cả</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
</div>
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
                  Tồn đầu kỳ
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Nhập trong kỳ
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Xuất trong kỳ
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Tồn cuối kỳ
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Đơn vị tính
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {warehouse
              .filter((product) => {
                if (selectedMonth === '') {
                  return true; // Hiển thị tất cả sản phẩm nếu không có tháng được chọn
                } else {
                  return product.thang.toString() === selectedMonth.toString(); // Chỉ hiển thị sản phẩm có tháng tương ứng
                }
              })
              .map((product, index) => (
                <TableRow key={index}>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {index + 1}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.tenSP}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.ton_dauKy}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.nhap_trongKy}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.xuat_trongKy}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.ton_cuoiKy}
                  </TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {product.DVT}
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

export default WarehouseAdmin;
