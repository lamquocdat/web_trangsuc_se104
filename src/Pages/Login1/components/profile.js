import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import '../styles/style.css';
import { registerValidate, updateProfileValidate } from './validate/validate';
import { toast, Toaster } from 'react-hot-toast';
import { getUserbyId, updateUser } from '../helpers/helper';
function Profile() {
  const { _id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAdress] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // This function will run once when the component mounts.
    let profilePromise = getUserbyId(_id);
    profilePromise.then(function (res) {
      let { email, name, address, phone } = res.data;
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAdress(address);
    });
  }, []); // The empty array as the second argument means this effect will only run once.

  const formik = useFormik({
    initialValues: {
      email: email,
      address: address,
      phone: phone,
      name: name,
    },
    enableReinitialize: true,
    validate: updateProfileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      try {
        await toast.promise(updateUser(values, _id), {
          loading: 'Đang cập nhật',
          success: <b>Cập nhật thành công!</b>,
          error: <b>Có lỗi xảy ra, vui lòng thử lại</b>,
        });
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
    <section className="wrapper">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 py-5 text-center">
          <form
            className="rounded bg-white shadow p-5"
            onSubmit={formik.handleSubmit}
          >
            <h3 className="text-dark fw-bolder fs-4 mb-2">Thông tin tài khoản</h3>

            <div className="form-floating mb-3">
              <input
                {...formik.getFieldProps('name')}
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Nguyễn Văn A"
              />
              <label htmlFor="floatingName">Họ và tên</label>
            </div>
            <div className="form-floating mb-3">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="name@example.com/"
              />
              <label htmlFor="floatingEmail">Email </label>
            </div>
            <div className="form-floating mb-3">
              <input
                {...formik.getFieldProps('phone')}
                type="tel"
                pattern="^0\d{9,10}$"
                className="form-control"
                id="floatingPhone"
                placeholder="Phone"
              />
              <label htmlFor="floatingPhone">Số điện thoại </label>
            </div>
            <div className="form-floating mb-3">
              <input
                {...formik.getFieldProps('address')}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Thành phố"
              />
              <label htmlFor="floatingAddress">Địa chỉ </label>
            </div>

            <Link
              to={`/account/changePassword/${_id}`}
              className="text-primary fw-bold text-decoration-none"
            >
              Đổi mật khẩu
            </Link>
            <button type="submit" className="btn btn-primary submit_btn w-100 my-4">
              Cập nhật
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Profile;
