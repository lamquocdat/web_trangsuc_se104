import styles from './viewService.module.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ViewService = () => {
  const { _id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dialuxury.onrender.com/service/${_id}`)
      .then((response) => {
        setService(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const navigateToServiceConfirmationForm = () => {
    // 👇️ navigate to /contacts
    navigate('/veriedService');
  };

  return (
    <div className={styles.servicePage}>
      {/* PHIẾU DỊCH VỤ */}
      <div className={styles.datatable_1} style={{ marginTop: '40px' }}>
        <div className={styles.datatableTitle}>
          <b>Bảng Chi Tiết Phiếu Dịch Vụ</b>
          <div className={styles.buttonFuction}>
            {/* <Link to="/service/adjustService" className={styles.link}>
          Chỉnh Sửa
        </Link> */}
          </div>
        </div>
        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Mã Phiếu
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tên
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Email
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Ngày lập
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {service.map((service) => (
                <TableRow
                  key={service.s_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {service._id}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    tên
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {service.makh}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {service.s_date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.datatable_2} style={{ marginTop: '40px' }}>
        <div className={styles.datatableTitle}>
          <b>Loại Dịch Vụ Bao Gồm Trong Phiếu:</b>
          <div className={styles.buttonFuction}></div>
        </div>

        <Container fluid>
          <div className={'border-l-3 py-4'}>
            <TableContainer component={Paper} className={styles.table}>
              <Table sx={{ minWidth: 1200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.tableCell + ' text-center'}>
                      STT
                    </TableCell>
                    <TableCell className={styles.tableCell + ' text-center'}>
                      Mã Loại Dịch Vụ
                    </TableCell>
                    <TableCell className={styles.tableCell + ' text-center'}>
                      Tên Dịch Vụ
                    </TableCell>

                    <TableCell className={styles.tableCell + ' text-center'}>
                      Giá
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {service.length > 0 &&
                    service[0].serviceTypes.map((serviceTypes, index) => {
                      return (
                        <TableRow key={index + 1}>
                          <TableCell
                            className={styles.tableCell + ' text-center'}
                          >
                            {index + 1}
                          </TableCell>

                          <TableCell
                            className={styles.tableCell + ' text-center'}
                          >
                            {serviceTypes.svt_id}
                          </TableCell>
                          <TableCell
                            className={styles.tableCell + ' text-center'}
                          >
                            {serviceTypes.svt_name}
                          </TableCell>
                          <TableCell
                            className={styles.tableCell + ' text-center'}
                          >
                            {serviceTypes.svt_price} VNĐ
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Container>
      </div>
      <div className={styles.buttonUpdate}>
        <button
          onClick={navigateToServiceConfirmationForm}
          className={styles.myButton}
        >
          Xác Nhận
        </button>
      </div>
    </div>
  );
};

export default ViewService;
