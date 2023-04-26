import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Button } from "react-bootstrap";

function TableTemplate ({rows}) {
  const handleDelete = (id) => {
  };

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={styles.tableCell+ " text-center"}>STT</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Số phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Ngày lập</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Khách hàng</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Sản phẩm</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Loại sản phẩm</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Số lượng</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Đơn vị tính</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Đơn giá</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Thành tiền</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Hoạt động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCell+ " text-center"} >{index +1}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.id}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.date}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.customer}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>
                  <div className={styles.cellWrapper}>
                    <img src={row.img} alt="" className={styles.image} />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.producttype}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.SL}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.DV}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.cost}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.total}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>
                  <div className="d-flex">
                    <Button variant="warning" className="me-1">Sửa</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(row.id)}>Xóa</Button>{' '}
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTemplate;
