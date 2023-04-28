import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Login() {
  return (
    <section class="wrapper">
      <div class="container ">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center py-5 ">
          <form class="rounded bg-white shadow py-5 px-4 ">
            <h3 class="text-dark fw-bolder fs-4 mb-2"> Đăng nhập</h3>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email </label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Mật khẩu</label>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <div class="mt-2 text-left">
                <Link
                  to="/register"
                  class="text-primary fw-bold text-decoration-none"
                >
                  Tạo tài khoản
                </Link>
              </div>
              <div class="text-right !important">
                <Link
                  to="/forgot"
                  class="text-primary fw-bold text-decoration-none"
                >
                  Quên mật khẩu
                </Link>
              </div>
            </div>
            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;