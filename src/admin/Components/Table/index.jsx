import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function TableTemplate ({rows}) {

  const [updatedRows, setUpdatedRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const updatedData = await Promise.all(
        rows.map(async (row) => {
          try {
            const response = await axios.get(`https://dialuxury.onrender.com/user/${row.userId}`);
            const name = response.data.name;
            return { ...row, name };
          } catch (error) {
            console.log(error);
            return row;
          }
        })
      );
      setUpdatedRows(updatedData);
    };

    fetchData();
  }, [rows]);

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 1200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={styles.tableCell+ " text-center"}>STT</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Số phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Ngày lập</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Khách hàng</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Hoạt động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {updatedRows.map((row, index) => {
            return (
              <TableRow key={row.mahd}>
                <TableCell className={styles.tableCell+ " text-center"} >{index +1}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.mahd}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.ngaylap}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>{row.name}</TableCell>
                <TableCell className={styles.tableCell+ " text-center"}>
                  <div className="d-flex justify-content-center">
                    <Link to={`/ChitietHoadonAdmin/${row.mahd}`} className="btn btn-success" >View</Link>
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
