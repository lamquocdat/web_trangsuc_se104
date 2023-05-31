import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export async function cancelOrderbyId(_orderid) {
  try {
    console.log(_orderid);
    const { data } = await axios.put('/cancelorder', {
      tinhtrang: 'Đã hủy',
      _orderid,
    });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'can not cancel order' });
  }
}

export async function getAllUsers() {
  try {
    const { data } = await axios.get('/users');
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'can not get' });
  }
}
export async function scheduleMail(date, email, total, _id) {
  try {
    const { data } = await axios.post('/schedule', {
      date,
      email,
      total,
      _id,
    });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'can not schedule' });
  }
}
export async function getOrderbyId(_orderid) {
  try {
    const { data } = await axios.get(`/orderdetail/${_orderid}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'can not get order' });
  }
}
export async function getUserbyId(_id) {
  try {
    const { data } = await axios.get(`/userid/${_id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Can not get user' });
  }
}
export async function getServiceById(_id) {
  try {
    const { data } = await axios.get(`/service/${_id}`);
    console.log(data);
    const { makh, s_date, total } = data[0];
    return Promise.resolve({ makh, s_date, total });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'can not get service' });
  }
}
