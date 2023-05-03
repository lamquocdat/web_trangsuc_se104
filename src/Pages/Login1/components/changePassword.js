import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/style.css';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import {
  loginValidate,
  passwordChangeValidate,
  passwordForgotValidate,
} from './validate/validate';
import { changePassword, resetPassword, verifyLogin } from '../helpers/helper';
import { useNavigate } from 'react-router-dom';
function ChangePassword() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: passwordChangeValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      let changePasswordPromise = changePassword({
        _id,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      toast.promise(changePasswordPromise, {
        loading: 'Checking...',
        success: <b>Cập nhật mật khẩu thành công </b>,
        error: <b>Mật khẩu không chính xác</b>,
      });
      changePasswordPromise.then(function (res) {
        navigate(`/account/${_id}`);
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
            <h3 class="text-dark fw-bolder fs-4 mb-2"> Đổi mật khẩu</h3>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('currentPassword')}
                type="password"
                class="form-control"
                id="currentPassword"
                placeholder="Password"
              />
              <label for="currentPassword">Mật khẩu hiện tại</label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('newPassword')}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Mật khẩu mới</label>
            </div>
            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('confirmPassword')}
                type="password"
                class="form-control"
                id="floatingConfirmPassword"
                placeholder="Password"
              />
              <label for="floatingConfirmPassword">Xác nhận mật khẩu mới</label>
              <span class="password-info mt-2">
                Mật khẩu gồm 8 kí tự trở lên và có ít nhất 1 kí tự đặc biệt
              </span>
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
export default ChangePassword;
