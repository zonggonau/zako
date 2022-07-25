import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header class="header">
        <div class="branding">
          <div class="container position-relative">
            <nav class="navbar navbar-expand-lg">
              <h1 class="site-logo">
                <NavLink to={"/"} className="nav-link">
                  <img
                    class="logo-icon"
                    src="https://themes.3rdwavemedia.com/nova-pro/bs5/2.0/assets/images/logo-icon.svg"
                    alt="logo"
                  />{" "}
                  <span class="logo-text">
                    Za<span class="alt rounded">Ko</span>
                  </span>
                </NavLink>
              </h1>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse p-1 p-lg-0" id="navigation">
                <ul class="navbar-nav ms-lg-auto">
                  <li class="nav-item me-lg-4">
                    <NavLink to={"/"} className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li class="nav-item me-lg-4">
                    <NavLink to={"features"} className="nav-link">
                      Features
                    </NavLink>
                  </li>
                  <li class="nav-item me-lg-4">
                    <NavLink to={"pircing"} className="nav-link">
                      Pricing
                    </NavLink>
                  </li>
                  <li class="nav-item me-lg-4">
                    <NavLink to={"about"} className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item me-lg-4">
                    <NavLink to={"contact"} className="nav-link">
                      Contact
                    </NavLink>
                  </li>

                  <li class="nav-item me-0">
                    <NavLink to={"signup"} className="nav-link">
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <ul class="social-list list-inline mb-0 position-absolute d-none">
              <li class="list-inline-item">
                <a class="text-dark" href="#">
                  <i class="fab fa-twitter fa-fw"></i> Font Awesome
                  fontawesome.com{" "}
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-dark" href="#">
                  <i class="fab fa-facebook-f fa-fw"></i> Font Awesome
                  fontawesome.com{" "}
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-dark" href="#">
                  <i class="fab fa-instagram fa-fw"></i> Font Awesome
                  fontawesome.com{" "}
                </a>
              </li>
              <li class="list-inline-item">
                <a class="text-dark" href="#">
                  <i class="fab fa-youtube fa-fw"></i> Font Awesome
                  fontawesome.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
