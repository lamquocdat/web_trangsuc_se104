import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './style.css';
import 'bootstrap';
import { getAllOrders } from '../../../Pages/Login1/helpers/helper';
const ViewUser = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [orders, setOrders] = useState();
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  // const [details, setDetails] = useState("");

  useEffect(function () {
    try {
      async function getData() {
        const response = await axios.get(
          `https://dialuxury.onrender.com/userid/${_id}`
        );
        console.log(response.data); // Thêm sản phẩm vào danh sách
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        let forgotPromise = getAllOrders(_id);
        forgotPromise.then(function (res) {
          setOrders(res);
          setIsLoading(false);
        });
      }

      getData();

      // Reset form sau khi gửi thành công
    } catch (error) {
      console.error(error);
    }
  }, []);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };

  return (
    <Container style={{ width: '1000px' }}>
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
                <Link
                  to={`/user/order/detail/${order._id}`}
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
    </Container>
  );
};

export default ViewUser;
