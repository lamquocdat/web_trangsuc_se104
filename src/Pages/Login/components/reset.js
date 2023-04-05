import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import {
  usernameValidate,
  passwordValidate,
  confirmPasswordValidate,
} from '../helper/validate';
function Reset() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: confirmPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
    },
  });
  return (
    <div className="container items-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center  h-screen">
        <div className={style.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Recovery</h4>
            <span className="py-4 text-lg  text-center text-gray-500">
              Enter your new password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={style.textbox}
                type="password"
                placeholder="New password"
              ></input>
              <input
                {...formik.getFieldProps('confirmPassword')}
                className={style.textbox}
                type="password"
                placeholder="Confirm new password"
              ></input>
              <button className={style.btn} type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Reset;
