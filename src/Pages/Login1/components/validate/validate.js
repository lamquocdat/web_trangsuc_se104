import toast from 'react-hot-toast';
function emailVerify(error = {}, values) {
  if (!values.email) error.email = toast.error('Email không được bỏ trống!');
  else if (values.email.includes(' '))
    error.email = toast.error('Email không được có khoảng trống!');
  else if (
    !/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i.test(
      values.email
    )
  )
    error.email = toast.error('Email không hợp lệ!');
  return error;
}
function usernameVerify(error = {}, values) {
  if (!values.name) {
    error.required = toast.error('Tên không được bỏ trống!');
  } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
    error.format = toast.error('Tên không hợp lệ');
  }
  return error;
}
function addressVerify(error = {}, values) {
  if (!values.address) {
    error.required = toast.error('Địa chỉ không được bỏ trống!');
  }
  return error;
}

function passwordVerify(error = {}, values) {
  const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if (!values.password)
    error.required = toast.error('Mật khẩu không được bỏ trống!');
  if (values.password.length < 8)
    error.len = toast.error('Mật khẩu phải từ 8 kí tự trở lên ');
  if (!specialChars.test(values.password))
    error.special = toast.error('Mật khẩu phải có kí tự đặc biệt');
  if (values.password.includes(' '))
    error.wrong = toast.error('Mật khẩu không hợp lệ');
  return error;
}
function confirmPasswordVerify(error = {}, values) {
  if (!values.confirmPassword)
    error.required = toast.error('Xin nhập mật khẩu xác nhận');
  else if (values.confirmPassword != values.password)
    error.notMatch = toast.error('Mật khẩu xác nhận không chính xác');
  return error;
}
export function registerValidate(values) {
  const errors = emailVerify({}, values);
  usernameVerify(errors, values);
  addressVerify(errors, values);
  passwordVerify(errors, values);
  confirmPasswordVerify(errors, values);
  return errors;
}
