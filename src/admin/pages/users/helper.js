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
export async function scheduleMail(date, email) {
  try {
    const { data } = await axios.post('/schedule', {
      date,
      email,
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
