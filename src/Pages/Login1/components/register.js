import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Register() {
  return (
    <div className="register template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary ">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign in</h3>
          <div className="mb-2">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              placeholder="Enter Firstname"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              placeholder="Enter Lastname"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
            ></input>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>

          <p>
            Already register?
            <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
