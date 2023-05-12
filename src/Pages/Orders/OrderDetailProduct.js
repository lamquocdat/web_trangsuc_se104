import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOrderbyId, getUserbyId } from '../Login1/helpers/helper';

const OrderDetailProducts = () => {
  const { _orderid } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [address, setAddress] = useState();
  const [status, setStatus] = useState();

  const _id = localStorage.getItem('_id');
  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getUserbyId(_id);
    forgotPromise.then(function (res) {
      let { email, name, phone } = res.data;
      setEmail(email);
      setPhone(phone);
      setName(name);
    });
    let orderPromise = getOrderbyId(_orderid);
    orderPromise.then(function (res) {
      console.log(res);
      let address = res.data[0].diachigiaohang;
      let date = res.data[0].ngaylap;
      let status = res.data[0].tinhtrang;
      setAddress(address);
      setDate(date);
      setStatus(status);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  return (
    <main>
      <div className="row mb-5 order-info-wrap">
        <div className="col-md-6 col-lg-4">
          <article className="icontext align-items-start">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-user"> </i>{' '}
            </span>{' '}
            <div className="text">
              <h6 className="mb-1"> Khách hàng </h6>{' '}
              <p className="mb-1">
                {name} <br />
                <a href={`mailto:user@example.com`}> {email} </a> <br />
                <p>{phone}</p>
              </p>{' '}
            </div>{' '}
          </article>{' '}
        </div>{' '}
        <div className="col-md-6 col-lg-4">
          <article className="icontext align-items-start">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-truck-moving"> </i>{' '}
            </span>{' '}
            <div className="text">
              <h6 className="mb-1"> Ngày đặt hàng </h6>{' '}
              <p className="mb-1">{date}</p>{' '}
            </div>{' '}
          </article>{' '}
        </div>{' '}
        <div className="col-md-6 col-lg-4">
          <article className="icontext align-items-start">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-map-marker-alt"> </i>{' '}
            </span>{' '}
            <div className="text">
              <h6 className="mb-1"> Địa chỉ giao hàng </h6>{' '}
              <p className="mb-1">{address}</p>{' '}
            </div>{' '}
          </article>{' '}
        </div>{' '}
      </div>
      <table className="table border table-lg">
        <thead>
          <tr>
            <th
              style={{
                width: '40%',
              }}
            >
              {' '}
              Sản phẩm{' '}
            </th>{' '}
            <th
              style={{
                width: '20%',
              }}
            >
              {' '}
              Đơn giá{' '}
            </th>{' '}
            <th
              style={{
                width: '20%',
              }}
            >
              {' '}
              Số lượng{' '}
            </th>{' '}
            <th
              style={{
                width: '20%',
              }}
              className="text-end"
            >
              Thành tiền{' '}
            </th>{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          <tr>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src="https://product.hstatic.net/1000026602/product/dsc05599_65ccb07614ec4d7dbd622aa876765989_master.jpg"
                    alt="product"
                    style={{
                      width: '40px',
                      height: '40px',
                    }}
                    className="img-xs"
                  />
                </div>{' '}
                <div className="info">
                  Velcro Sneakers For Boys & Girls(Blue){' '}
                </div>{' '}
              </Link>{' '}
            </td>{' '}
            <td> $586 </td> <td> 3 </td> <td className="text-end"> $2534 </td>{' '}
          </tr>
          <tr>
            <td colSpan="4">
              <article className="float-end">
                <dl className="dlist">
                  <dt> Phí giao hàng: </dt> <dd>$56,907</dd>
                </dl>{' '}
                <dl className="dlist">
                  <dt> Tổng tiền : </dt>{' '}
                  <dd>
                    <b className="h5"> $2,345 </b>{' '}
                  </dd>{' '}
                </dl>{' '}
                <dl className="dlist">
                  <dt className="text-muted"> Trạng thái: </dt>{' '}
                  <dd>
                    <span className="badge rounded-pill alert alert-success text-success">
                      {status}{' '}
                    </span>{' '}
                  </dd>{' '}
                </dl>{' '}
              </article>{' '}
            </td>{' '}
          </tr>{' '}
        </tbody>{' '}
      </table>
    </main>
  );
};

export default OrderDetailProducts;
