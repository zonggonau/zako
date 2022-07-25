import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="footer theme-bg-primary">
        <div class="container py-5 mb-3">
          <div class="row">
            <div class="footer-col col-6 col-lg-3">
              <h4 class="col-heading">About Nova</h4>
              <ul class="list-unstyled">
                <li>
                  <a class="text-link" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col col-6 col-lg-3">
              <h4 class="col-heading">Resources</h4>
              <ul class="list-unstyled">
                <li>
                  <a class="text-link" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Support
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Developer APIs
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col col-6 col-lg-3">
              <h4 class="col-heading">Legal</h4>
              <ul class="list-unstyled">
                <li>
                  <a class="text-link" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a class="text-link" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-col col-6 col-lg-3">
              <h4 class="col-heading">Stay Connected</h4>
              <ul class="social-list list-unstyled mb-0">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-instagram fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-youtube fa-fw"></i>
                  </a>
                </li>
              </ul>

              <div class="mb-2">
                Company Name
                <br />
                2419 Locust View Drive <br />
                San Francisco, CA, 94143
              </div>
              <div>
                <a class="text-link" href="#">
                  hello@yourcompany.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <hr />
        </div>
        <div class="download-area py-4">
          <div class="container text-center">
            <h3 class="mb-3">Get the app</h3>
            <div class="section-intro mb-4 single-col-max-width mx-auto">
              Download our apps now. lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis.{" "}
            </div>
            <ul class="app-stores list-unstyled list-inline mx-auto  d-inline-block">
              <li class="list-inline-item me-3">
                <a href="#">
                  <img
                    class="ios"
                    src="https://themes.3rdwavemedia.com/nova-pro/bs5/2.0/assets/images/appstore-apple.svg"
                    alt="app-store"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <img
                    class="android"
                    src="https://themes.3rdwavemedia.com/nova-pro/bs5/2.0/assets/images/appstore-android.svg"
                    alt="google play"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom text-center pb-5">
          <small class="copyright">
            Template Copyright ©{" "}
            <a
              class="text-link"
              href="https://themes.3rdwavemedia.com/"
              target="_blank"
            >
              3rd Wave Media
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
