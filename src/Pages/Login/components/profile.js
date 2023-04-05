import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import style from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import {
  usernameValidate,
  registerValidate,
  passwordValidate,
} from '../helper/validate';
import convertToBase64 from '../helper/convert';

function Profile() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
      address: '',
      firstname: '',
      lastname: '',
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  const onUpload = async function (e) {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container items-center mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center  h-auto ">
        <div className={style.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Your profile
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="proflie flex  justify-center py-4">
              <label htmlFor="profile">
                <img
                  className={style.profile_img}
                  src={file || avatar}
                  alt="avatar"
                ></img>
              </label>
              <input onChange={onUpload} id="profile" type="file"></input>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="flex w-auto gap-4 py-4">
                <input
                  {...formik.getFieldProps('firstname')}
                  className={style.textbox}
                  type="text"
                  placeholder="First name"
                ></input>
                <input
                  {...formik.getFieldProps('lastname')}
                  className={style.textbox}
                  type="text"
                  placeholder="Last name"
                ></input>
              </div>
              <div className="flex w-auto gap-4 py-4">
                <input
                  {...formik.getFieldProps('email')}
                  className={style.textbox}
                  type="text"
                  placeholder="Email"
                ></input>
                <input
                  {...formik.getFieldProps('username')}
                  className={style.textbox}
                  type="text"
                  placeholder="Username"
                ></input>
              </div>
              <div className="flex w-auto gap-4 py-4">
                <input
                  {...formik.getFieldProps('password')}
                  className={style.textbox}
                  type="password"
                  placeholder="Password"
                ></input>
                <input
                  {...formik.getFieldProps('confirmPassword')}
                  className={style.textbox}
                  type="password"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <div className=" textbox flex flex-col gap-6 items-center w-full">
                <input
                  {...formik.getFieldProps('address')}
                  className={style.textbox}
                  type="text"
                  placeholder="Address"
                ></input>
                <input
                  {...formik.getFieldProps('address')}
                  className={style.textbox}
                  type="text"
                  placeholder="Numberphone"
                ></input>
              </div>
              <button className={style.btn} type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Profile;
