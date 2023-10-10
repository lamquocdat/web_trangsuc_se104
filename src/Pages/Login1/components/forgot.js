import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import '../styles/style.css';
import { emailForgotValidate } from './validate/validate';
import { useNavigate } from 'react-router-dom';
import { getUser, sentOTP } from '../helpers/helper';

function Forgot() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: emailForgotValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      try {
        let forgotPromise = sentOTP(values.email);

        await toast.promise(forgotPromise, {
          loading: 'Xác nhận...',
          success: 'Hãy nhập mã xác thực được gửi tới email của bạn',
          error: <b>Email không tồn tại</b>,
        });

        forgotPromise.then(function (res) {
          let { _id } = res.data;
          console.log(_id);
          navigate(`/reset/${_id}`);
        });

        // navigate(`/reset/${id}`);
      } catch (error) {}
    },
  });

  return (
    <section class="wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center py-5">
          <form
            class="rounded bg-white shadow p-5"
            onSubmit={formik.handleSubmit}
          >
            <h3 class="text-dark fw-bolder fs-4 mb-2">Quên mật khẩu</h3>

            <div class="fw-normal text-muted mb-4">
              Nhập email bạn đã đăng ký để đặt lại mật khẩu
            </div>

            <div class="form-f loating mb-3">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email </label>
            </div>

            <button type="submit" class="btn btn-primary submit_btn my-4">
              Tiếp tục
            </button>

            <Link to="/login">
              <button class="btn btn-secondary submit_btn my-4 ms-3">
                Quay lại
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Forgot;
