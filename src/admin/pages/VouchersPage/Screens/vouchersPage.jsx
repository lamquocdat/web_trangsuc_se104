import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";

function VouchersPage() {
  //Hiển thị dữ liệu các sản phẩm:
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    loadVouchers();
  }, []);

  const loadVouchers = async () => {
    axios
      .get("http://localhost:3001/vouchers")
      .then((response) => {
        setVouchers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let navigate = useNavigate();

  //Xoá sản phẩm:
  let { id } = useParams();
  const deleteVoucher = ({ id }) => {
    axios
      .delete(`http://localhost:3001/vouchers/${id}`)
      .then((response) => {
        //Load lại các sản phẩm:
        loadVouchers();
        console.log("Sản phẩm đã được xóa thành công");
      })
      .catch((error) => {
        // Xử lý lỗi từ API
        console.error("Lỗi khi xóa sản phẩm:", error);
      });
  };

  return (
    <Container fluid>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/admin/vouchersPage/add">
          <Button variant="primary">Thêm mới</Button>{" "}
        </Link>
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
                  Số phiếu
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Ngày lập
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Nhà cung cấp
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Địa chỉ
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Số điện thoại
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Hoạt động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vouchers.map((voucher, index) => {
                return (
                  <TableRow key={voucher.id}>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {voucher.vouchersId}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {voucher.createdAt}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {voucher.production}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {voucher.address}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell + " text-center"}
                      onClick={() => {
                        navigate(`/admin/vouchersPage/${voucher._id}`);
                      }}
                    >
                      {voucher.PhoneNumber}
                    </TableCell>

                    <TableCell className={styles.tableCell + " text-center"}>
                      <div className="d-flex">
                        <Button
                          variant="warning"
                          className="me-1"
                          onClick={() => {
                            return navigate(
                              `/admin/VouchersPage/edit/${voucher._id}`
                            );
                            // { handleEditClick }
                          }}
                        >
                          Sửa
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={() => deleteVoucher({ id })}
                        >
                          Xóa
                        </Button>{" "}
                      </div>
                    </TableCell>
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

export default VouchersPage;
