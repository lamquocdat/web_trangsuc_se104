import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap';
import { getAllOrders, getUserbyId } from '../Login1/helpers/helper';
const Orders = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getAllOrders('644bb3a570cf5b27446bb748');
    forgotPromise.then(function (res) {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  return (
    <main>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> Mã đơn hàng </th> <th scope="col"> Email </th>{' '}
            <th scope="col"> Ngày đặt hàng </th>{' '}
            <th scope="col"> Tổng tiền </th>{' '}
            <th scope="col"> Tình trạng giao hàng </th>
            <th scope="col" className="text-end">
              Chi tiết{' '}
            </th>{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          {orders?.map((order) => (
            <tr key={order._id}>
              <td>
                <b>{order.mahd}</b>{' '}
              </td>{' '}
              <td>{order.makh}</td> <td>{order.ngaylap}</td>{' '}
              <td>{order.tongtien}</td> <td>{order.tinhtrang}</td>{' '}
              <td className="d-flex justify-content-end align-item-center">
                <Link
                  to={`/orders/detail/${order._id}`}
                  className="text-success"
                >
                  <i className="fas fa-eye"> </i>{' '}
                </Link>{' '}
              </td>{' '}
            </tr>
          ))}
        </tbody>{' '}
      </table>
    </main>
  );
};

export default Orders;
