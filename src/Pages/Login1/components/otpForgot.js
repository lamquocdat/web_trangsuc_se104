import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import '../styles/style.css';
import { otpValidate } from './validate/validate.js';
import { getUserbyId, myFunction, sentOTP, verifyOTP } from '../helpers/helper';

function Reset() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    // This function will run once when the component mounts.
    let forgotPromise = getUserbyId(_id);
    forgotPromise.then(function (res) {
      let { email, otp } = res.data;
      setEmail(email);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  const handleKeyUp = (event, nextInput) => {
    const input = event.target;
    if (input.value.length >= input.maxLength) {
      nextInput.focus();
    }
  };

  const formik = useFormik({
    initialValues: {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    },
    validate: otpValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function check(values) {
      const code = `${values.input1}${values.input2}${values.input3}${values.input4}${values.input5}${values.input6}`;
      console.log(_id, code);

      let otpPromise = verifyOTP({
        _id,
        code,
      });
      toast.promise(otpPromise, {
        loading: 'Checking...',
        success: <b>Xác thực thành công </b>,
        error: <b>Sai mã xác thực</b>,
      });
      otpPromise.then(function (res) {
        navigate(`/recovery/${_id}`);
      });
    },
  });
  return (
    <section class="wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 py-5 text-center">
          <form
            class="rounded bg-white shadow p-5"
            onSubmit={formik.handleSubmit}
          >
            <h3 class="text-dark fw-bolder fs-4 mb-2">Xác thực tài khoản</h3>

            <div class="fw-normal text-muted mb-4">
              Nhập mã xác thực được gửi đến
            </div>
            <div class="fw-normal text-muted mb-4">{email}</div>

            <div class="otp_input text-start mb-2">
              <label htmlFor="digit">Mã xác thực gồm 6 chữ số</label>
              <div class="d-flex align-items-center justify-content-between mt-2">
                <input
                  type="text"
                  {...formik.getFieldProps('input1')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                  onKeyUp={(event) =>
                    handleKeyUp(event, event.target.nextSibling)
                  }
                />
                <input
                  type="text"
                  {...formik.getFieldProps('input2')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                  onKeyUp={(event) =>
                    handleKeyUp(event, event.target.nextSibling)
                  }
                />
                <input
                  type="text"
                  {...formik.getFieldProps('input3')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                  onKeyUp={(event) =>
                    handleKeyUp(event, event.target.nextSibling)
                  }
                />
                <input
                  type="text"
                  {...formik.getFieldProps('input4')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                  onKeyUp={(event) =>
                    handleKeyUp(event, event.target.nextSibling)
                  }
                />
                <input
                  type="text"
                  {...formik.getFieldProps('input5')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                  onKeyUp={(event) =>
                    handleKeyUp(event, event.target.nextSibling)
                  }
                />
                <input
                  type="text"
                  {...formik.getFieldProps('input6')}
                  className="form-control"
                  maxLength="1"
                  pattern="[0-9]"
                />
              </div>
            </div>

            <button type="submit" class="btn btn-primary submit_btn my-4">
              Submit
            </button>

            <div class="fw-normal text-muted mb-2">
              Không nhận được mã xác thực?{' '}
              <a
                href="#"
                onClick={() => {
                  toast.success('Đã gửi lại mã xác nhận');
                  sentOTP(email);
                }}
                class="text-primary fw-bold text-decoration-none"
              >
                Gửi lại
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Reset;
