import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div class="signup-section auth-section">
        <div class="row m-0">
          <div class="auth-col-main bg-white col-12 col-lg-8 order-2 text-center p-5 h-100 align-self-stretch">
            <h1 class="site-logo mb-3">
              <Link to={"/"} className="navbar-brand me-0">
                <img
                  class="svg-ie-fix logo-icon"
                  src="https://themes.3rdwavemedia.com/nova-pro/bs5/assets/images/logo-icon.svg"
                  alt="logo"
                />{" "}
                <span class="logo-text">
                  NOVA <span class="alt rounded">Pro</span>
                </span>
              </Link>
            </h1>

            <div class="auth-wrapper mx-auto">
              <h2 class="auth-heading mb-2">Create your free account</h2>
              <div class="auth-intro mb-4">
                Try Nova for free. No credit card needed.
              </div>

              <div class="social-auth text-center mx-auto">
                <ul class="social-buttons list-unstyled">
                  <li class="mb-3">
                    <a href="#" class="btn btn-social btn-google w-100">
                      <span class="icon-holder">
                        <i class="fab fa-google fa-fw"></i>{" "}
                      </span>
                      <span class="btn-text">Sign up with Google</span>
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="#" class="btn btn-social btn-facebook w-100">
                      <span class="icon-holder">
                        <i class="fab fa-facebook-f fa-fw"></i>{" "}
                      </span>
                      <span class="btn-text">Sign up with Facebook</span>
                    </a>
                  </li>
                  <li class="mb-3">
                    <a href="#" class="btn btn-social btn-twitter w-100">
                      <span class="icon-holder">
                        <i class="fab fa-twitter fa-fw"></i>{" "}
                      </span>
                      <span class="btn-text">Sign up with Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="divider my-5">
                <span class="or-text">OR</span>
              </div>

              <div class="auth-form-container text-start mx-auto">
                <form class="auth-form signup-form">
                  <div class="full-name mb-3">
                    <label class="sr-only" for="signup-fullname">
                      Name
                    </label>
                    <input
                      id="signup-fullname"
                      name="signup-fullname"
                      type="text"
                      class="form-control signup-email"
                      placeholder="Name"
                      required="required"
                    ></input>
                  </div>
                  <div class="email mb-3">
                    <label class="sr-only" for="signup-email">
                      Your Email
                    </label>
                    <input
                      id="signup-email"
                      name="signup-email"
                      type="email"
                      class="form-control signup-email"
                      placeholder="Your email"
                      required="required"
                    ></input>
                  </div>
                  <div class="password mb-3">
                    <label class="sr-only" for="signup-password">
                      Password
                    </label>
                    <input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      class="form-control signup-password"
                      placeholder="Create a password"
                      required="required"
                    ></input>
                  </div>
                  <div class="legal-note mb-3 text-light text-center">
                    By signing up, you agree to our{" "}
                    <a href="#" class="text-light">
                      terms of service
                    </a>{" "}
                    and{" "}
                    <a href="#" class="text-light">
                      privacy policy
                    </a>
                    .
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary theme-btn mx-auto"
                    >
                      Sign up for free
                    </button>
                  </div>
                </form>
              </div>

              <div class="option-container my-4 pt-3">
                <div class="lead-text">
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-link">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="auth-col-promo col-lg-4 d-none d-lg-block order-1 theme-bg-primary h-100 align-self-stretch">
            <div class="auth-col-promo-inner h-100 position-relative p-0">
              <div class="auth-quote-box mt-5 mb-3 px-3 py-4 rounded text-center shadow-lg bg-white mx-auto">
                <h5 class="auth-quote-title">An absolute time-saver!</h5>
                <div>
                  You can use this area to add customer testimonial or reinforce
                  your app's key benefits. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit.
                </div>
              </div>
              <div class="auth-user-figure-holder mt-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
