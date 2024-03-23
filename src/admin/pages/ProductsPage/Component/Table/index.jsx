import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Button, Image } from "react-bootstrap";
import toast from 'react-hot-toast';
import axios from "axios";

function TableTemplate({ rows }) {
  let navigate = useNavigate();

  let id = useParams();
  const deleteProduct = async ({ id }) => {
    toast.loading('Deleting...');
    await axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/product/${id}`)
      .then((response) => {
        // Xử lý phản hồi thành công từ API
        toast.dismiss();
        toast.success(<b>Xóa sản phẩm thành công</b>);
        console.log("Sản phẩm đã được xóa thành công");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(<b>Xóa sản phẩm thất bại</b>);
        // Xử lý lỗi từ API
        console.error("Lỗi khi xóa sản phẩm:", error);
      });
  };

  return (
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
              Mã sản phẩm
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
              Ảnh sản phẩm
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
              Giá
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
          {rows.map((row, index) => {
            return (
              <TableRow key={row.id}>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {index + 1}
                </TableCell>

                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {row.productid}
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  <Image
                    src={row.image}
                    roundedCircle="true"
                    width="50px"
                    height="50px"
                  ></Image>
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                ></TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {row.dvt}
                </TableCell>
                <TableCell
                  className={styles.tableCell + " text-center"}
                  onClick={() => {
                    navigate(`/admin/productsPage/${row._id}`);
                  }}
                >
                  {row.price} đ
                </TableCell>

                <TableCell className={styles.tableCell + " text-center"}>
                  <div className="d-flex">
                    <Button variant="warning" className="me-1">
                      Sửa
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => deleteProduct({ id })}
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
  );
}

export default TableTemplate;
