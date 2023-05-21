import styles from './viewOrderVerification.module.css';

import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const ViewOrderVerification = () => {
  function createData(maDatHang, maKH, money, orderDate) {
    return { maDatHang, maKH, money, orderDate };
  }

  const rows = [createData('o01', 'u05', '240.000 VNĐ', '10/4/2002')];

  const userColumns = [
    { field: 'id', headerName: 'STT', width: 60 },
    {
      field: 'p_id',
      headerName: 'Mã Sản Phẩm',
      width: 150,
    },
    {
      field: 'p_name',
      headerName: 'Tên Sản Phẩm',
      width: 220,
    },

    {
      field: 'number',
      headerName: 'Số Lượng',
      width: 100,
    },

    {
      field: 'price',
      headerName: 'Chi Phí',
      width: 150,
    },
    {
      field: 'totalPrice',
      headerName: 'Thành Tiền',
      width: 150,
    },
  ];

  //temporary data
  const userRows = [
    {
      id: 1,
      p_name: 'Nhẫn kim cương kara',
      status: 'active',
      p_id: 'p02',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 2,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 3,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 4,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 5,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 6,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
    {
      id: 7,
      p_name: 'Cân Thử Vàng',
      status: 'active',
      p_id: 'p01',

      totalPrice: '1.750.000 VNĐ',

      number: 5,

      price: '350.000 VNĐ',
    },
  ];
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Lựa Chọn',
      width: 75,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link to="/*" style={{ textDecoration: 'none' }}>
              <div className={styles.viewButton}>View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.servicePage}>
      {/* PHIẾU DỊCH VỤ */}
      <div className={styles.datatable_1} style={{ marginTop: '40px' }}>
        <div className={styles.datatableTitle}>
          <b>Mã Đặt Hàng o01</b>
          <div className={styles.buttonFuction}>
            <Link
              to="/ConfirmationNotification"
              className={styles.link_approve}
              style={{ marginRight: '20px' }}
            >
              Xác Nhận
            </Link>
            <Link to="/*" className={styles.link_decline}>
              Huỷ Đơn Hàng
            </Link>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 1150 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Mã Đặt Hàng
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Mã KH
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tổng Giá
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Ngày
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {row.maDatHang}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {row.maKH}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {row.money}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {row.orderDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.datatable_2} style={{ marginTop: '40px' }}>
        <div className={styles.datatableTitle}>
          <b>Các Sản Phẩm Trong Đơn Hàng:</b>
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
          <div className={styles.totalCost}>10.500.000 VNĐ</div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderVerification;
