import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/style.css';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import { loginValidate, passwordForgotValidate } from './validate/validate';
import { resetPassword, verifyLogin } from '../helpers/helper';
import { useNavigate } from 'react-router-dom';
function Recovery() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: passwordForgotValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      let resetPromise = resetPassword({
        _id,
        password: values.password,
      });
      toast.promise(resetPromise, {
        loading: 'Checking...',
        success: <b>Cập nhật mật khẩu thành công </b>,
        error: <b>Xảy ra lỗi</b>,
      });
      resetPromise.then(function (res) {
        navigate('/login');
      });
    },
  });
  return (
    <section class="wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div class="container ">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center py-5 ">
          <form
            class="rounded bg-white shadow py-5 px-4 "
            onSubmit={formik.handleSubmit}
          >
            <h3 class="text-dark fw-bolder fs-4 mb-2"> Đặt lại mật khẩu</h3>

            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Mật khẩu mới</label>
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
                placeholder="Password"
              />
              <label htmlFor="floatingConfirmPassword">Xác nhận mật khẩu mới</label>
            </div>

            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Xác nhận
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Recovery;
