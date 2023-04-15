import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Profile() {
  return (
    <div className="register template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary ">
      <div className="form_container p-5 rounded bg-white">
        <div className="title justify-content-center align-items-center">
          <h4 className="text-5xl font-bold">Profile</h4>
          <p className="text-center">Your profile</p>
        </div>
        <form>
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
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="form-control"
            ></input>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Update</button>
          </div>

          <Link to="/login">Change password</Link>
        </form>
      </div>
    </div>
  );
}
export default Profile;
