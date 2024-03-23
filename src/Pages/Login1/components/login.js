import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { loginValidate } from './validate/validate';
import { verifyLogin } from '../helpers/helper';
import { useNavigate } from 'react-router-dom';
import google from '../images/google.jpg';
import GoogleButton from 'react-google-button';
function Login() {
  const googleOnclick = async function () {
    const url = `${process.env.REACT_APP_BACKEND_URL}/google`;
    window.location.href = url;
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      let loginPromise = verifyLogin({
        email: values.email,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Đăng nhập thành công </b>,
        error: <b>Sai email hoặc mật khẩu</b>,
      });
      loginPromise.then(function (res) {
        let { token, _id, ten, role } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('_id', _id);
        localStorage.setItem('ten', ten);
        localStorage.setItem('role', role);
        navigate('/');
      });
    },
  });
  return (
    <section className="wrapper ">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="container mr-100 ">
        <div className=" justify-content-center align-items-center col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center py-5 ">
          <form
            className="rounded bg-white shadow py-5 px-4 "
            onSubmit={formik.handleSubmit}
          >
            <h3 className="text-dark fw-bolder fs-4 mb-2"> Đăng nhập</h3>

            <div className="form-floating mb-3">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email </label>
            </div>
            <div className="form-floating">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Mật khẩu</label>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="mt-2 text-left">
                <Link
                  to="/register"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Tạo tài khoản
                </Link>
              </div>
              <div className="text-right !important">
                <Link
                  to="/forgot"
                  className="text-primary fw-bold text-decoration-none"
                >
                  Quên mật khẩu
                </Link>
              </div>
            </div>
            <button type="submit" className="btn btn-primary submit_btn w-100 my-4">
              Đăng nhập
            </button>
            <div className="d-flex align-items-center justify-content-center">
              <GoogleButton
                className="w-100 h-100"
                type="light"
                label="Đăng nhập bằng Google"
                onClick={googleOnclick}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;
