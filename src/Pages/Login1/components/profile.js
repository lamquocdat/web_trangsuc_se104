import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Profile() {
  return (
    <section class="wrapper">
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
          <div class="logo">
            <img
              decoding="async"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/102a8b118185567.61feca019a8b1.jpg"
              class="img-fluid"
              alt="logo"
            />
          </div>
          <form class="rounded bg-white shadow p-5">
            <h3 class="text-dark fw-bolder fs-4 mb-2">Profile</h3>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingFirstName"
                placeholder="name@example.com"
              />
              <label for="floatingFirstName">First Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingLastName"
                placeholder="name@example.com"
              />
              <label for="floatingLastName">Last Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com/"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <button type="submit" class="btn btn-primary submit_btn w-100 my-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Profile;
