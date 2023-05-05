import styles from "./viewService.module.css"
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const ViewService = () => {
  function createData(maPhieu, phieuNumber, phieuDate, phieuKH, phieuMoney, phieuTraTruoc, phieuConLai, phieuTinhTrang) {
    return { maPhieu, phieuNumber, phieuDate, phieuKH, phieuMoney, phieuTraTruoc, phieuConLai, phieuTinhTrang};
  }
  
  const rows = [
    createData("s01",5, "10/4/2002", "u01", "240.000 VNĐ", "240.000 VNĐ", "240.000 VNĐ", "Hoàn Thành"),
    
  ];

    const userColumns = [
        { field: "id", headerName: "STT", width: 60 },
     
        {
          field: "si_name",
          headerName: "Tên Loại Dịch Vụ",
          width: 220,
          
        },
      
        {
          field: "si_id",
          headerName: "Mã Loại Dịch Vụ",
          width: 150,
          
        },
        {
          field: "number",
          headerName: "Số Lượng",
          width: 100,
        },
      
        {
          field: "price",
          headerName: "Chi Phí",
          width: 150,
        },
        {
          field: "totalPrice",
          headerName: "Thành Tiền",
          width: 150,
        },
        {
          field: "payFirstPlace",
          headerName: "Trả Trước",
          width: 150,
        },
        {
          field: "date",
          headerName: "Ngày Giao",
          width: 120,
        },
  
      ];
      
      //temporary data
    const userRows = [
        {
          id: 1,
          si_name: "Cân Thử Vàng",
          status: "active",
          si_id: "si01",
         
          totalPrice: "1.750.000 VNĐ",
          date: "1/4/2023",
          number: 5,
          payFirstPlace: "100.000 VNĐ",
          price: "350.000 VNĐ",
        },
        {
            id: 2,
            si_name: "Nữ Công Gia Chánh",
            status: "active",
            si_id: "si02",
            
            totalPrice: "1.750.000 VNĐ",
            date: "1/4/2023",
            payFirstPlace: "100.000 VNĐ",
            number: 5,
            price: "350.000 VNĐ",
          },
          {
            id: 3,
            si_name: "Cân Thử Vàng",
            status: "active",
         
            si_id: "si03",
            totalPrice: "1.750.000 VNĐ",
            payFirstPlace: "100.000 VNĐ",
            date: "1/4/2023",
            number: 5,
            price: "350.000 VNĐ",
          },
          {
            id: 4,
            si_name: "Nữ Công Gia Chánh",
            status: "active",
          
            si_id: "si04",
            totalPrice: "1.750.000 VNĐ",
            payFirstPlace: "100.000 VNĐ",
            date: "1/4/2023",
            number: 5,
            price: "350.000 VNĐ",
          },
          {
            id: 5,
            si_name: "Cân Thử Vàng",
            status: "active",
           
            si_id: "si05",
            totalPrice: "1.750.000 VNĐ",
            date: "1/4/2023",
            payFirstPlace: "100.000 VNĐ",
            number: 5,
            price: "350.000 VNĐ",
          },
          {
            id: 6,
            si_name: "Nữ Công Gia Chánh",
            status: "active",
           
            si_id: "si06",
            totalPrice: "1.750.000 VNĐ",
            date: "1/4/2023",
            number: 5,
            payFirstPlace: "100.000 VNĐ",
            price: "350.000 VNĐ",
          },
  
        
        
      ];
      const [data, setData] = useState(userRows);

      const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
    
      const actionColumn = [
        {
          field: "action",
          headerName: "Lựa Chọn",
          width: 75,
          renderCell: (params) => {
            return (
              <div className={styles.cellAction}>
                
                <div
                  className={styles.deleteButton}
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className={styles.servicePage}>
      {/* PHIẾU DỊCH VỤ */}
      <div className={styles.datatable_1} style={{marginTop:"40px"}}>
      <div className={styles.datatableTitle}>
        <b>Phiếu Dịch Vụ 30/4</b>
        <div className={styles.buttonFuction}>
        
        <Link to="/service/adjustService" className={styles.link}>
          Chỉnh Sửa
        </Link>
        </div>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Mã Phiếu</TableCell>
            <TableCell align="right">Số Phiếu</TableCell>
            <TableCell align="right">Ngày lập</TableCell>
            <TableCell align="right">Khách hàng</TableCell>
            <TableCell align="right">Tổng tiền</TableCell>
            <TableCell align="right">Trả trước</TableCell>
            <TableCell align="right">Còn Lại</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.maPhieu}</TableCell>
              <TableCell align="right">{row.phieuNumber}</TableCell>
              <TableCell align="right">{row.phieuDate}</TableCell>
              <TableCell align="right">{row.phieuKH}</TableCell>
              <TableCell align="right">{row.phieuMoney}</TableCell>
              <TableCell align="right">{row.phieuTraTruoc}</TableCell>
              <TableCell align="right">{row.phieuConLai}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>

    <div className={styles.datatable_2} style={{marginTop:"40px"}}>
      <div className={styles.datatableTitle}>
        <b>Loại Dịch Vụ Bao Gồm Trong Phiếu:</b>
        <div className={styles.buttonFuction}>
        <Link to="/service/addTypeInService" className={styles.link} style={{marginRight:"20px"}}>
        Thêm Loại
        </Link>
        <Link to="/service/adjustTypeInService" className={styles.link}>
          Chỉnh Sửa
        </Link>
        </div>
      </div>
    
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Tổng Tiền: </b>
    </div>
    <div className={styles.totalCost}>
          10.500.000 VNĐ
    </div>
    
       
      </div>
      <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Đã Trả: </b>
    </div>
    <div className={styles.totalCost}>
          5.000.000 VNĐ
    </div>
    
       
      </div>
      <div className={styles.datatableBottom}>
    <div className={styles.datatableText}>
        <b>Còn Lại: </b>
    </div>
    <div className={styles.totalCost}>
          5.500.000 VNĐ
    </div>
    
       
      </div>
      
    </div>
    </div>
  );
};

export default ViewService;
