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
  }
  return error;
}
function addressVerify(error = {}, values) {
  if (!values.address) {
    error.required = toast.error('Địa chỉ không được bỏ trống!');
  }
  return error;
}
function phoneVerify(error = {}, values) {
  if (!values.phone) {
    error.required = toast.error('Số điện thoại không được bỏ trống!');
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
function curentPasswordVerify(error = {}, values) {
  const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if (!values.currentPassword)
    error.required = toast.error('Mật khẩu không được bỏ trống!');
  if (values.currentPassword.length < 8)
    error.len = toast.error('Mật khẩu phải từ 8 kí tự trở lên ');
  if (!specialChars.test(values.currentPassword))
    error.special = toast.error('Mật khẩu phải có kí tự đặc biệt');
  if (values.currentPassword.includes(' '))
    error.wrong = toast.error('Mật khẩu không hợp lệ');
  return error;
}
function newPasswordVerify(error = {}, values) {
  const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if (!values.newPassword)
    error.required = toast.error('Mật khẩu không được bỏ trống!');
  if (values.newPassword.length < 8)
    error.len = toast.error('Mật khẩu phải từ 8 kí tự trở lên ');
  if (!specialChars.test(values.newPassword))
    error.special = toast.error('Mật khẩu phải có kí tự đặc biệt');
  if (values.newPassword.includes(' '))
    error.wrong = toast.error('Mật khẩu không hợp lệ');
  if (values.newPassword === values.currentPassword)
    error.diff = toast.error('Mật khẩu mới phải khác mật khẩu hiện tại');

  return error;
}
function confirmPasswordVerify(error = {}, values) {
  if (!values.confirmPassword)
    error.required = toast.error('Xin nhập mật khẩu xác nhận');
  else if (values.confirmPassword !== values.password)
    error.notMatch = toast.error('Mật khẩu xác nhận không chính xác');
  return error;
}
function confirmNewPasswordVerify(error = {}, values) {
  if (!values.confirmPassword)
    error.required = toast.error('Xin nhập mật khẩu xác nhận');
  else if (values.confirmPassword !== values.newPassword)
    error.notMatch = toast.error('Mật khẩu xác nhận không chính xác');
  return error;
}
export function registerValidate(values) {
  const errors = emailVerify({}, values);
  usernameVerify(errors, values);
  addressVerify(errors, values);
  phoneVerify(errors, values);
  passwordVerify(errors, values);
  confirmPasswordVerify(errors, values);
  return errors;
}
export function updateProfileValidate(values) {
  const errors = emailVerify({}, values);
  usernameVerify(errors, values);
  addressVerify(errors, values);
  phoneVerify(errors, values);
  return errors;
}
function otpVerify(error = {}, values) {
  if (
    !values.input1 ||
    !values.input2 ||
    !values.input3 ||
    !values.input4 ||
    !values.input5 ||
    !values.input6
  ) {
    error.required = toast.error('Xin vui lòng nhập 6 chữ số');
  }
  return error;
}
export function otpValidate(values) {
  const errors = otpVerify({}, values);

  return errors;
}
function passwordLoginVerify(error = {}, values) {
  if (!values.password)
    error.passwordRequired = error.required = toast.error(
      'Xin vui lòng nhập mật khẩu'
    );
}
export function loginValidate(values) {
  const errors = emailVerify({}, values);
  passwordLoginVerify(errors, values);

  return errors;
}
export function emailForgotValidate(values) {
  const errors = emailVerify({}, values);

  return errors;
}
export function passwordForgotValidate(values) {
  const errors = passwordVerify({}, values);
  confirmPasswordVerify(errors, values);

  return errors;
}
export function passwordChangeValidate(values) {
  const errors = curentPasswordVerify({}, values);
  newPasswordVerify(errors, values);
  confirmNewPasswordVerify(errors, values);

  return errors;
}
