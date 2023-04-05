import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';
function Username() {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
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
            <h4 className="text-5xl font-bold">Login</h4>
            <span className="py-4 text-large text-center text-gray-500">
              Please enter your username
            </span>
          </div>
          <form className="py-1 flex flex-col" onSubmit={formik.handleSubmit}>
            <div className="proflie flex justify-center py-4">
              <img
                className={style.profile_img}
                src={avatar}
                alt="avatar"
              ></img>
            </div>
            <div className=" flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps('username')}
                className={style.textbox}
                type="text"
                placeholder="Username"
              ></input>
              <button className={style.btn} type="submit">
                Let's go
              </button>
              <span className="text-gray-500 flex flex-col">Not a member</span>
              <Link className="text-red-500 " to="/register">
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Username;
