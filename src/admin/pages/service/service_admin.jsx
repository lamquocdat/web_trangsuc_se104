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
import ReactPaginate from 'react-paginate';
const Service = () => {
  //Service Types

  const [tableDataSVT, setTableDataSVT] = useState([]);

  //Pagination SVT
  const [svtPerPage, setSvtPerPage] = useState(4);
  const [CsvtPerPage, setCSvtPerPage] = useState(1);
  const numOfToTalPages = Math.ceil(tableDataSVT.length / svtPerPage);
  // const pages = [...Array(numOfToTalPages + 1).keys()].slice(1);
  const indexOfLastSVT = CsvtPerPage * svtPerPage;
  const indexOfFirstSVT = indexOfLastSVT - svtPerPage;
  const visibleSVT = tableDataSVT.slice(indexOfFirstSVT, indexOfLastSVT);

  const changePage = ({ selected }) => {
    setCSvtPerPage(selected + 1);
  };
  //

  useEffect(() => {
    loadSVT();
  }, []);

  const loadSVT = async () => {
    axios
      .get('https://dialuxury.onrender.com/serviceType')
      .get('https://dialuxury.onrender.com/serviceType')
      .then((response) => {
        setTableDataSVT(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function deleteSVT(id) {
  function deleteSVT(id) {
    fetch(`http://localhost:3001/serviceType/svtid/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    loadSVT();
  }

  //Services

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://dialuxury.onrender.com/service')
    fetch('https://dialuxury.onrender.com/service')
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div className={styles.servicePage}>
      <div className={styles.datatable}>
        <div className={styles.datatableTitle}>
          <b>Danh Sách Loại Dịch Vụ</b>
          <Link to="/serviceType/addServiceType" className={styles.link}>
            Thêm Mới
          </Link>
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  STT
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Mã Loại Dịch Vụ
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tên Loại Dịch Vụ
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Giá
                </TableCell>{' '}
                <TableCell className={styles.tableCell + ' text-center'}>
                  Lựa Chọn
                </TableCell>{' '}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleSVT.map((tableDataSVT, index) => (
                <TableRow
                  key={tableDataSVT.svt_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {index + 1}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.svt_id}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.svt_name}
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableDataSVT.svt_price} VNĐ
                  </TableCell>{' '}
                  <TableCell className={styles.tableCell + ' text-center'}>
                    <div className={styles.cellAction}>
                      <Link
                        to={`/serviceType/adjustServiceType/${tableDataSVT.svt_id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className={styles.viewButton}>Edit</div>
                      </Link>{' '}
                      <Button
                        onClick={() => deleteSVT(tableDataSVT.svt_id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </Button>{' '}
                    </div>
                  </TableCell>{' '}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div style={{display: "flex", float:"right", marginRight:"15px", marginTop:"15px", cursor:"pointer"}}>
        <span onclick={prevPage}>Prev</span>
        <p>{pages.map(page => <span kry={page} onClick={() => setCSvtPerPage(page)}>{`  ${page}  `}</span>)}</p>
        <span onclick={nextPage}>Next</span>
        </div> */}
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={numOfToTalPages}
          onPageChange={changePage}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>

      <div className={styles.datatable}>
        <div className={styles.datatableTitle}>
          <b>Danh Sách Phiếu Dịch Vụ</b>
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table sx={{ minWidth: 1200 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableCell + ' text-center'}>
                  STT
                </TableCell>

                <TableCell className={styles.tableCell + ' text-center'}>
                  Tên Khách Hàng
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Email
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Ngày lập
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tổng phí
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Tình trạng
                </TableCell>
                <TableCell className={styles.tableCell + ' text-center'}>
                  Lựa Chọn
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((tableData, index) => (
                <TableRow
                  key={tableData.s_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {index + 1}
                  </TableCell>

                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableData.tenkh}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableData.makh}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableData.s_date}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableData.total.toLocaleString()} VND
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    {tableData.tinhtrang}
                  </TableCell>
                  <TableCell className={styles.tableCell + ' text-center'}>
                    <div className={styles.cellAction}>
                      <Link
                        to={`/service/view/${tableData._id}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className={styles.viewButton}>View</div>
                      </Link>
                      <Button className={styles.deleteButton}>Delete</Button>{' '}
                    </div>
                  </TableCell>
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
