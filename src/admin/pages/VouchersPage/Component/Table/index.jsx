import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Button } from "react-bootstrap";

function TableTemplate({ rows }) {
  let navigate = useNavigate();
  const handleDelete = (id) => {};

  return (
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
          {rows.map((row, index) => {
            return (
              <TableRow
                key={row.id}
                onClick={() => {
                  navigate(`/admin/vouchersPage/${row._id}`);
                }}
              >
                <TableCell className={styles.tableCell + " text-center"}>
                  {index + 1}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {row.vouchersId}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {row.createdAt}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {row.production}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {row.address}
                </TableCell>
                <TableCell className={styles.tableCell + " text-center"}>
                  {row.PhoneNumber}
                </TableCell>

                <TableCell className={styles.tableCell + " text-center"}>
                  <div className="d-flex">
                    <Button variant="warning" className="me-1">
                      Sửa
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(row.id)}
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
