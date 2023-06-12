import { Container } from 'react-bootstrap';
import './styles.css';
import { Toaster, toast } from 'react-hot-toast';
import { loginValidate } from '../../Pages/Login1/components/validate/validate';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  verifyAdminLogin,
  verifyLogin,
} from '../../Pages/Login1/helpers/helper';
export default function LoginAdmin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (values) {
      console.log(values);
      let loginPromise = verifyAdminLogin({
        email: values.email,
        password: values.password,
        role: 'admin',
      });
      const toastId = toast.loading('Đang xử lý');
      loginPromise
        .then(function (res) {
          toast.dismiss(toastId);
          console.log(res);
          let { token, _id, ten, role } = res.data;
          localStorage.setItem('token', token);
          localStorage.setItem('_id', _id);
          localStorage.setItem('ten', ten);
          localStorage.setItem('role', role);
          navigate('/homeAdmin');
        })
        .catch(function (res) {
          console.log(res);
          toast.dismiss(toastId);
          if (res.status === 402 || res.status === 401) {
            toast.error('Mật khẩu và email không chính xác');
          }
          if (res.status === 409) {
            toast.error('Không phải admin, vui lòng thử lại');
          }
        });
    },
  });

  return (
    <Container style={{ width: '1300px' }}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div class="container mr-100 ">
        <div class=" justify-content-center align-items-center col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center py-5 ">
          <form
            class="rounded bg-white shadow py-5 px-4 "
            onSubmit={formik.handleSubmit}
          >
            <h3 class="text-dark fw-bolder fs-4 mb-2"> Đăng nhập</h3>

            <div class="form-floating mb-3">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email </label>
            </div>
            <div class="form-floating">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Mật khẩu</label>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5"></div>
            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Đăng nhập
            </button>
            <div className="d-flex align-items-center justify-content-center"></div>
          </form>
        </div>
      </div>
    </Container>
  );
}
