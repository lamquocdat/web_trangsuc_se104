import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate, passwordValidate } from '../helper/validate';
function Recovery() {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
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
              Enter a 6 digits OTP sent to your email
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="proflie flex justify-center py-4">
              <img
                className={style.profile_img}
                src={avatar}
                alt="avatar"
              ></img>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('password')}
                className={style.textbox}
                type="number"
                placeholder="OTP"
              ></input>
              <button className={style.btn} type="submit">
                Recover
              </button>
            </div>
          </form>
          <div className="text-center py-4">
            <span className="text-gray-500">
              Did not receive OTP?
              <button className="text-red-500 ml-6">Resend</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recovery;
