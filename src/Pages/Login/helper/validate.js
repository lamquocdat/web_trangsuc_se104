//validate username
import toast from 'react-hot-toast';
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.required = toast.error('Username required!');
  } else if (values.username.includes(' ')) {
    error.notValid = toast.error('Username not valid!');
  }
  return error;
}
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
function passwordVerify(error = {}, values) {
  const specialChars = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if (!values.password) error.required = toast.error('Password required!');
  else if (values.password.length < 4)
    error.len = toast.error('Password must be more than 4 characters!');
  else if (!specialChars.test(values.password))
    error.special = toast.error('password must have special character');
  else if (values.password.includes(' '))
    error.wrong = toast.error('Password is wrong');
  return error;
}
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}
export async function confirmPasswordValidate(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirmPassword)
    errors.exist = toast.error('Password not matched!');
  return errors;
}
function addressVerify(error = {}, values) {
  if (!values.address) error.address = toast.error('Invalid Address!');
  return error;
}
function emailVerify(error = {}, values) {
  if (!values.email) error.email = toast.error('Email is required!');
  else if (values.email.includes(' '))
    error.email = toast.error('Wrong email!');
  else if (
    !/^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i.test(
      values.email
    )
  )
    error.email = toast.error('invalid Email!');
  return error;
}
export function registerValidate(values) {
  const errors = emailVerify({}, values);
  usernameVerify(errors, values);
  confirmPasswordValidate(errors, values);
  addressVerify(errors, values);
  return errors;
}
