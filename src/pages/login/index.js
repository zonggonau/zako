import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div class="login-section auth-section">
        <div class="auth-wrapper mx-auto my-md-5 py-4 px-5 shadow-lg bg-white">
          <h1 class="site-logo mb-3 text-center">
            <a class="navbar-brand me-0" href="index.html">
              <img
                class="svg-ie-fix logo-icon"
                src="https://themes.3rdwavemedia.com/nova-pro/bs5/assets/images/logo-icon.svg"
                alt="logo"
              />{" "}
              <span class="logo-text">
                NOVA <span class="alt rounded">Pro</span>
              </span>
            </a>
          </h1>
          <h2 class="auth-heading mb-4 text-center">Log in to your account</h2>
          <div class="social-auth text-center mx-auto">
            <ul class="social-buttons list-unstyled">
              <li class="mb-3">
                <a href="#" class="btn btn-social btn-google w-100">
                  <span class="icon-holder">
                    <i class="fab fa-google fa-fw"></i>{" "}
                  </span>
                  <span class="btn-text">Log in with Google</span>
                </a>
              </li>
              <li class="mb-3">
                <a href="#" class="btn btn-social btn-facebook w-100">
                  <span class="icon-holder">
                    <i class="fab fa-facebook-f fa-fw"></i>{" "}
                  </span>
                  <span class="btn-text">Log in with Facebook</span>
                </a>
              </li>
              <li class="mb-3">
                <a href="#" class="btn btn-social btn-twitter w-100">
                  <span class="icon-holder">
                    <i class="fab fa-twitter fa-fw"></i>{" "}
                  </span>
                  <span class="btn-text">Log in with Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="divider my-5">
            <span class="or-text">OR</span>
          </div>

          <div class="auth-form-container text-start mx-auto">
            <form class="auth-form signup-form">
              <div class="email mb-3">
                <label class="sr-only" for="login-email">
                  Email
                </label>
                <input
                  id="login-email"
                  name="login-email"
                  type="email"
                  class="form-control login-email"
                  placeholder="Email"
                  required="required"
                ></input>
              </div>
              <div class="password mb-3">
                <label class="sr-only" for="login-password">
                  Password
                </label>
                <input
                  id="login-password"
                  name="login-password"
                  type="password"
                  class="form-control login-password"
                  placeholder="Password"
                  required="required"
                ></input>
                <div class="extra mt-2 position-relative">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="RememberPassword"
                    ></input>
                    <label class="form-check-label" for="RememberPassword">
                      Remember me
                    </label>
                  </div>
                  <div class="forgotten-password">
                    <a class="text-link" href="password.html">
                      Forgotten password?
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary theme-btn mx-auto">
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div class="option-container mt-4 pt-3 text-center">
            <div class="lead-text">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-link">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
