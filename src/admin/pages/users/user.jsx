// import { DataGrid } from "@mui/x-data-grid";
// import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './service.module.css';
import Button from 'react-bootstrap/Button';
import { getAllUsers } from './helper';

const Users = () => {
  //Service Types
  const [tableDataSVT, setTableDataSVT] = useState();

  async function getData() {
    const data = await getAllUsers();
    console.log(data);
    setTableData(data);
  }

  async function deleteSVT(_id) {
    const response = await axios.delete(`/user/delete/${_id}`);
    getData();
  }

  //Services

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.servicePage}>
      <div className={styles.datatable}>
        <div className={styles.datatableTitle}>
          <b>Danh Sách Người dùng</b>
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  STT
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Email
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tên người dùng
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Số điện thoại
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Địa chỉ
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Thao tác
                </TableCell>{' '}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((data, index) => (
                <TableRow
                  key={data._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {index + 1}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {data.email}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {data.name}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {data.phone}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {data.address}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    <div className={styles.cellAction}>
                      <Link className='btn btn-success'
                        to={`/users/${data._id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        View
                      </Link>{' '}
                    </div>
                  </TableCell>{' '}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
