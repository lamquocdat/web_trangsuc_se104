import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-white ">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h1 className="text-center">Sign in</h1>
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
          <div>
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            ></input>
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p>
            Forgot password? <Link to="/forgot">Click here</Link>
          </p>

          <Link to="/register" className="text-center">
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
