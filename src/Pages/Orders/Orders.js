import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './order.module.css';
import 'bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  cancelOrderbyId,
  deliveredOrderbyId,
  getAllOrders,
  getUserbyId,
} from '../Login1/helpers/helper';
import {
  CancelModal,
  CancelSuccessModal,
  DeliveredModal,
} from './Modals/OrderModal';
import { Container } from 'react-bootstrap';
import axios from 'axios';
const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'green',
};

const Orders = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [orders, setOrders] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [showCancel, setShowCancel] = useState(false);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [showDelivered, setShowDelivered] = useState(false);
  const [currentOrder, setCurrentOrder] = useState('');
  const handleCancelClose = () => setShowCancel(false);
  const handleCancelSuccessClose = () => {
    setShowCancelSuccess(false);
    window.location.reload();
  };
  const handleDeliveredClose = () => setShowDelivered(false);
  const handleCancelShow = (_orderid) => {
    setShowCancel(true);
    setCurrentOrder(_orderid);
  };
  const handleCancelSuccessShow = () => {
    setShowCancelSuccess(true);
  };
  const handleDeliveredShow = (_orderid) => {
    setShowDelivered(true);
    setCurrentOrder(_orderid);
  };
  const handleCancelOrder = async () => {
    let cancelPromise = cancelOrderbyId(currentOrder);
    cancelPromise
      .then(function (res) {
        console.log(res);
        setShowCancel(false);
        handleCancelSuccessShow();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDelivered = async () => {
    //cap nhat lai so luong da ban va so luong con lai cua product
    axios.put(`https://dialuxury.onrender.com/product/increase_sold/${currentOrder}`)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((e)=>{ 
      console.log(e);
    })
    //cap nhat lai tinh trang order
    let deliveredPromise = deliveredOrderbyId(currentOrder);
    deliveredPromise
      .then(function (res) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getAllOrders(_id);
    forgotPromise.then(function (res) {
      setOrders(res);
      setIsLoading(false);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="scrollable-div">
            <div>
              {' '}
              <ClipLoader
                color="#36d7b7"
                loading={isLoading}
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <CancelModal
                showCancel={showCancel}
                handleCancelClose={handleCancelClose}
                handleCancelOrder={handleCancelOrder}
              />
              <CancelSuccessModal
                showCancelSuccess={showCancelSuccess}
                handleCancelSuccessClose={handleCancelSuccessClose}
              />
              <DeliveredModal
                showDelivered={showDelivered}
                handleDeliveredClose={handleDeliveredClose}
                handleDelivered={handleDelivered}
              />
              {isLoading ? (
                <div className="w-40 h-40"></div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"> Mã đơn hàng </th>
                      <th scope="col"> Ngày đặt hàng </th>{' '}
                      <th scope="col"> Tổng tiền </th>{' '}
                      <th scope="col"> Tình trạng giao hàng </th>
                      <th scope="col" className="text-end">
                        Thao tác{' '}
                      </th>{' '}
                    </tr>{' '}
                  </thead>{' '}
                  <tbody>
                    {orders?.map((order) => (
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
                        <td className="d-flex justify-content-end align-item-center">
                          <div>
                            {order.tinhtrang === 'Đang giao hàng' ? (
                              <i
                                className=" fa fa-check-square"
                                style={{
                                  marginRight: '20px',
                                  cursor: 'pointer',
                                  color: 'blue',
                                  fontSize: '20px',
                                }}
                                onClick={() => handleDeliveredShow(order._id)}
                              >
                                {' '}
                              </i>
                            ) : (
                              <i
                                className=" fa fa-check-square"
                                style={{
                                  marginRight: '20px',
                                  color: '#6c757d',
                                  fontSize: '20px',
                                }}
                              >
                                {' '}
                              </i>
                            )}
                          </div>{' '}
                          <Link
                            to={`/orders/detail/${order._id}`}
                            className="text-success"
                          >
                            <i
                              className="fas fa-eye"
                              style={{ fontSize: '20px' }}
                            >
                              {' '}
                            </i>{' '}
                          </Link>{' '}
                          <div>
                            {order.tinhtrang === 'Đang giao hàng' ||
                            order.tinhtrang === 'Đã hủy' ||
                            order.tinhtrang === 'Đã giao hàng' ? (
                              <i
                                className=" fa fa-cart-arrow-down"
                                style={{
                                  marginLeft: '20px',
                                  color: '#6c757d',
                                  fontSize: '20px',
                                }}
                              >
                                {' '}
                              </i>
                            ) : (
                              <i
                                className=" fa fa-cart-arrow-down"
                                style={{
                                  marginLeft: '20px',
                                  color: 'red',
                                  fontSize: '20px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => handleCancelShow(order._id)}
                              >
                                {' '}
                              </i>
                            )}
                          </div>{' '}
                        </td>{' '}
                      </tr>
                    ))}
                  </tbody>{' '}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
