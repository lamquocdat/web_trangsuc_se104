import { DataGrid } from '@mui/x-data-grid';
import { orderColumns, orderRows } from './orderVerificationData';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import './style.css';
import 'bootstrap';
import { getAllOrdersAllUser } from '../../../Pages/Login1/helpers/helper';
const VerifyOrder = () => {
  // const [details, setDetails] = useState("");
  const [orders, setOrders] = useState([]);
  useEffect(function () {
    async function getData() {
      let forgotPromise = getAllOrdersAllUser();
      forgotPromise.then(function (res) {
        console.log(res);
        setOrders(res);
      });
    }

    getData();

    // Reset form sau khi gửi thành công
  }, []);
  const [currentPage, setCurrentPage] = useState(orders.length / 10);
  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const indexOfLastOrder = ordersPerPage * currentPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <Container style={{ width: '1300px' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> Mã đơn hàng </th>
            <th scope="col"> Ngày đặt hàng </th>{' '}
            <th scope="col"> Tổng tiền </th>{' '}
            <th scope="col"> Tình trạng giao hàng </th>
            <th scope="col" className="text-center">
              Thao tác{' '}
            </th>{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          {currentOrders?.map((order) => (
            <tr key={order._id}>
              <td>
                <b>{order.mahd}</b>{' '}
              </td>{' '}
              <td>{order.ngaylap}</td>{' '}
              <td>{order.tongtien.toLocaleString()} VND </td>{' '}
              <td>
                {' '}
                <span
                  className={
                    order.tinhtrang === 'Đã giao hàng'
                      ? 'text-success'
                      : order.tinhtrang === 'Đang xử lý'
                      ? 'text-info'
                      : order.tinhtrang === 'Đang giao hàng'
                      ? 'text-warning'
                      : 'text-danger'
                  }
                >
                  {order.tinhtrang}{' '}
                </span>{' '}
              </td>{' '}
              <td className="d-flex justify-content-center align-item-center">
                <Link
                  to={`/order/detail/${order._id}`}
                  className="text-success"
                >
                  <i className="fas fa-eye" style={{ fontSize: '20px' }}>
                    {' '}
                  </i>{' '}
                </Link>{' '}
              </td>{' '}
            </tr>
          ))}
        </tbody>{' '}
      </table>
      {orders.length > 9 && (
        <Pagination
          color="secondary"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(orders.length / ordersPerPage)}
          //này là để tính số trang cần
          page={currentPage}
          // state của trang hiện tại
          onChange={paginate}
          //handle khi thay đổi trang ở phía trên
          size="large"
        />
      )}
    </Container>
  );
};

export default VerifyOrder;
