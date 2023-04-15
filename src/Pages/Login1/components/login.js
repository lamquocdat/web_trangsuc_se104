import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Login() {
  return (
    <section class="wrapper">
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
          <div class="logo">
            <img
              decoding="async"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/102a8b118185567.61feca019a8b1.jpg"
              class="img-fluid"
              alt="Logo"
            />
          </div>
          <form class="rounded bg-white shadow py-5 px-4">
            <h3 class="text-dark fw-bolder fs-4 mb-2">Sign In to HILLTOP</h3>
            <div class="fw-normal text-muted mb-4">
              {' '}
              New Here?
              <Link
                to="/register"
                class="text-primary fw-bold text-decoration-none"
              >
                Create an Account
              </Link>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="mt-2 text-end">
              <Link
                to="/forgot"
                class="text-primary fw-bold text-decoration-none"
              >
                Forget Password?
              </Link>
            </div>
            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;
