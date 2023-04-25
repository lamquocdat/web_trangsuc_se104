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
