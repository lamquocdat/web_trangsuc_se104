import axios from 'axios';
import jwt_decode from 'jwt-decode';
axios.defaults.baseURL = 'http://localhost:8080';
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
    } = await axios.post('/api/register', credentials);

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
    const { data } = await axios.post('/api/login', { email, password });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}

export async function sentOTP(email) {
  try {
    const { data } = await axios.post(`/api/user/${email}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function getUserbyId(_id) {
  try {
    const { data } = await axios.get(`/api/userid/${_id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function verifyOTP({ _id, code }) {
  try {
    const { data, status } = await axios.get('/api/verifyOTP', {
      params: { _id, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function resetPassword({ _id, password }) {
  try {
    const { data, status } = await axios.put('/api/recovery', {
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
    const { data, status } = await axios.put('/api/changepassword', {
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

    const { data, status } = await axios.put('/api/updateuser', { user, _id });
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
    const { data } = await axios.get(`/api/Orders/${_id}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
export async function getOrderbyId(_orderid) {
  try {
    const { data } = await axios.get(`/api/orderdetail/${_orderid}`);
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: 'Password doesnt match' });
  }
}
