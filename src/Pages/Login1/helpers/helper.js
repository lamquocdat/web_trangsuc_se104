import axios from 'axios';
import jwt_decode from 'jwt-decode';
axios.defaults.baseURL = 'https://dialuxury.onrender.com';
// axios.defaults.baseURL = 'http://localhost:3001';
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
    } = await axios.post('/register', credentials);

    //send email

    return Promise.resolve(msg);
  } catch (error) {
    if (
      error.response &&
      error.response.status === 500 &&
      error.response.data.error === 'Email already exists'
    ) {
      throw new Error('Email already exists');
    } else if (
      error.response &&
      error.response.status === 500 &&
      error.response.data.error === 'Phone already exists'
    ) {
      throw new Error('Phone already exists');
    } else {
      throw new Error('Could not register');
    }
  }
}

export async function verifyLogin({ email, password }) {
  try {
    const data = await axios.post('/login', { email, password });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function verifyAdminLogin({ email, password, role }) {
  try {
    const { data, status } = await axios.post('/loginAdmin', {
      email,
      password,
      role,
    });
    if (status === 200) return Promise.resolve({ data, status });
  } catch (error) {
    const { status } = error.response;
    console.log(status);
    if (status === 402 || status === 401) return Promise.reject({ status });
    if (status === 409) return Promise.reject({ status });
  }
}

export async function sentOTP(email) {
  try {
    const { data } = await axios.post(`/user/${email}/forgot`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Error when sent OTP' });
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
export async function getServiceType() {
  try {
    const { data } = await axios.get('/serviceType');
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Can not get user' });
  }
}
export async function verifyOTP({ _id, code }) {
  try {
    const { data, status } = await axios.get('/verifyOTP', {
      params: { _id, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function resetPassword({ _id, password }) {
  try {
    const { data, status } = await axios.put('/recovery', {
      _id,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
export async function changePassword({ _id, currentPassword, newPassword }) {
  try {
    const { data, status } = await axios.put('/changepassword', {
      _id,
      currentPassword,
      newPassword,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
export function myFunction() {
  console.log('click');
}
export async function updateUser(user, _id) {
  try {
    const token = await localStorage.getItem('token');

    const { data, status } = await axios.put('/updateuser', { user, _id });
    return Promise.resolve({ data });
  } catch (error) {
    if (
      error.response &&
      error.response.status === 409 &&
      error.response.data.error === 'Email already exists'
    ) {
      throw new Error('Email already exists');
    }
    if (
      error.response &&
      error.response.status === 409 &&
      error.response.data.error === 'Phone already exists'
    ) {
      throw new Error('Phone already exists');
    }
  }
}

export async function getAllOrders(_id) {
  try {
    const { data } = await axios.get(`/orders/${_id}`);
    return Promise.resolve(data);
  } catch (error) {
    console.log('vai loz');
    return Promise.reject({ error: 'can not get Orders' });
  }
}
export async function getAllOrdersAllUser() {
  try {
    const { data } = await axios.get('/orderall');
    console.log(await axios.get('/orderall'));
    return Promise.resolve(data);
  } catch (error) {
    console.log('vai loz');
    return Promise.reject({ error: 'can not get Orders' });
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

export async function deliveredOrderbyId(_orderid) {
  try {
    console.log(_orderid);
    const { data } = await axios.put('/deliveredorder', {
      tinhtrang: 'Đã giao hàng',
      _orderid,
    });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function confirmOrderbyId(_orderid, email, total) {
  try {
    const { data } = await axios.put('/confirmorder', {
      tinhtrang: 'Đang giao hàng',
      _orderid,
      email,
      total,
    });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function scheduleMail(date, email, body) {
  try {
    const { data } = await axios.post('/service', { body });
    return Promise.resolve({ data });
  } catch (error) {
    console.log(error);
    return Promise.reject({ error: 'can not schedule' });
  }
}
