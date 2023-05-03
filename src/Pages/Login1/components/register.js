import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidate } from './validate/validate';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../helpers/helper';
function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: '',
      confirmPassword: '',
      name: '',
      address: '',
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      try {
        await toast.promise(registerUser(values), {
          loading: 'Đăng ký...',
          success: <b>Đăng ký thành công!</b>,
          error: <b>Không thể đăng ký, vui lòng thử lại</b>,
        });
        navigate('/login');
      } catch (error) {
        if (error.message === 'Email already exists') {
          toast.error(
            <b>Email đã được sử dụng, vui lòng nhập một email khác</b>
          );
        }
        if (error.message === 'Phone already exists') {
          toast.error(
            <b>Số điện thoại đã được sử dụng, vui lòng nhập một số khác</b>
          );
        }
      }
    },
  });

  return (
    <section class="wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 py-5 text-center">
          <form
            class="rounded bg-white shadow p-5"
            onSubmit={formik.handleSubmit}
          >
            <h3 class="text-dark fw-bolder fs-4 mb-2">Tạo tài khoản</h3>

            <div class="fw-normal text-muted mb-2">
              Đã có tài khoản?{' '}
              <Link
                to="/login"
                class="text-primary fw-bold text-decoration-none"
              >
                Đăng nhập ngay
              </Link>
            </div>

            <div class="text-center text-muted text-uppercase mb-2">
              hoặc đăng ký
            </div>

            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('name')}
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="Nguyễn Văn A"
              />
              <label for="floatingName">Họ và tên</label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="name@example.com/"
              />
              <label for="floatingEmail">Email </label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('phone')}
                type="tel"
                pattern="^0\d{9,10}$"
                class="form-control"
                id="floatingPhone"
                placeholder="Phone"
              />
              <label for="floatingPhone">Số điện thoại </label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('address')}
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Thành phố"
              />
              <label for="floatingAddress">Địa chỉ </label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Mật khẩu</label>
              <span class="password-info mt-2">
                Mật khẩu gồm 8 kí tự trở lên và có ít nhất 1 kí tự đặc biệt
              </span>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('confirmPassword')}
                type="password"
                class="form-control"
                id="floatingConfirmPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingConfirmPassword">Xác nhận mật khẩu</label>
            </div>

            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Register;
