import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';
function Reset() {
  return (
    <section class="wrapper">
      <div class="container">
        <div class="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center">
          <div class="logo">
            <img
              decoding="async"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/102a8b118185567.61feca019a8b1.jpg"
              class="img-fluid"
              alt="logo"
            />
          </div>
          <form class="rounded bg-white shadow p-5">
            <h3 class="text-dark fw-bolder fs-4 mb-2">Two Step Verification</h3>

            <div class="fw-normal text-muted mb-4">
              Enter the verification code we sent to
            </div>

            <div class="d-flex align-items-center justify-content-center fw-bold mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <span>8459</span>
            </div>

            <div class="otp_input text-start mb-2">
              <label for="digit">Type your 6 digit security code</label>
              <div class="d-flex align-items-center justify-content-between mt-2">
                <input type="text" class="form-control" placeholder="" />
                <input type="text" class="form-control" placeholder="" />
                <input type="text" class="form-control" placeholder="" />
                <input type="text" class="form-control" placeholder="" />
                <input type="text" class="form-control" placeholder="" />
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>

            <button type="submit" class="btn btn-primary submit_btn my-4">
              Submit
            </button>

            <div class="fw-normal text-muted mb-2">
              Didn’t get the code ?{' '}
              <a href="#" class="text-primary fw-bold text-decoration-none">
                Resend
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Reset;
