
import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./service.module.css";
import Button from 'react-bootstrap/Button';

// const columns = [
  
//   {
//     field: "s_id",
//     headerName: "Mã",
//     width: 180,
//   },
//   {
//     field: "s_name",
//     headerName: "Tên Phiếu Dịch Vụ",
//     width: 250,
    
//   },
//   {
//     field: "makh",
//     headerName: "Khách Hàng",
//     width: 250,
//   }, 

//   {
//     field: "s_number",
//     headerName: "Số Lượng",
//     width: 250,
//   },
  
//   {
//     field: "s_date",
//     headerName: "Ngày Lập",
//     width: 250,
    
//   },
// ]
const Service = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://dialuxury.onrender.com/service")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Lựa Chọn",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className={styles.cellAction}>
  //           <Link to="/service/view" style={{ textDecoration: "none" }}>
  //             <div className={styles.viewButton}>View</div>
  //           </Link>
  //           <Button className={styles.deleteButton}>Delete</Button>
            

  //         </div>
  //       );
  //     },
  //   },
  // ];


  return (
    
    <div className={styles.servicePage}>
     
    <div className={styles.datatable}>
      <div className={styles.datatableTitle}>
        <b>Danh Sách Phiếu Dịch Vụ</b>
        <Link to="/service/addService" className={styles.link}>
          Thêm Mới
        </Link>
      </div>
    
      {/* <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid getRowId={(row) =>  row.s_id + row.s_name + row.makh + row.s_number + row.s_date}
        className={styles.datagrid}
        rows={tableData}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box> */}
    <TableContainer component={Paper} className={styles.table}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell className={styles.tableCell+ " text-center"}>STT</TableCell>
          <TableCell className={styles.tableCell+ " text-center"}>Mã Phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Tên Phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Số Phiếu</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Khách hàng</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Ngày lập</TableCell>
            <TableCell className={styles.tableCell+ " text-center"}>Lựa Chọn</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((tableData, index) => (
            <TableRow
              key={tableData.s_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={styles.tableCell+ " text-center"} >{index +1}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{tableData.s_id}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{tableData.s_name}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{tableData.s_number}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{tableData.makh}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>{tableData.s_date}</TableCell>
              <TableCell className={styles.tableCell+ " text-center"}>     
              <div className={styles.cellAction}>
        <Link to={`/service/view/${tableData.s_id}`} style={{ textDecoration: "none" }}>
          <div className={styles.viewButton}>View</div>
        </Link>
      <Button className={styles.deleteButton}>Delete</Button>
              </div></TableCell>
     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>


    </div>
  );
};

export default Service;
