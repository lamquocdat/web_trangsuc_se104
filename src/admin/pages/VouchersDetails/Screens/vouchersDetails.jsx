import Container from "react-bootstrap/Container";
import { Button, Table } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";

function VouchersDetails() {
  const [order, setOrder] = useState({});
  let id = useParams();
  console.log("StudentID: ", { id });
  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/vouchers/${id}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Container fluid>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "20px",
            marginTop: "20px",
          }}
        >
          <Button variant="primary">Thêm mới</Button>{" "}
        </div>

        <div className={"border-l-3 py-4"}>
          <TableContainer component={Paper} className={styles.table}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    Sản phẩm
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
                    Đơn giá
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
                {/* {order.products.map((product) => ( */}
                <TableRow key={order.id}>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                  <TableCell className={styles.tableCell + " text-center"}>
                    {order.vouchersId}
                  </TableCell>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                  <TableCell
                    className={styles.tableCell + " text-center"}
                  ></TableCell>
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </>
  );
}

export default VouchersDetails;
