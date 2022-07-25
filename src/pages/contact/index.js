import React from "react";

export default function Contact() {
  return (
    <div>
      <div class="page-header text-center py-5">
        <div class="container">
          <h2 class="page-title pt-2 mb-3 font-weight-bold">Contact Us</h2>
          <div class="page-intro single-col-max-width mx-auto mb-5">
            Want to get in touch? You can either email us at{" "}
            <a class="text-link" href="#">
              hello@yourcompany.com
            </a>{" "}
            or use the contact form below. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </div>
          <h5 class="mb-3">Follow Us</h5>
          <ul class="social-list list-inline mb-3">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter fa-fw fa-lg"></i>{" "}
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f fa-fw fa-lg"></i>{" "}
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-instagram fa-fw fa-lg"></i>{" "}
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-youtube fa-fw fa-lg"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section class="contact-form-section pb-5">
        <div class="container pb-5">
          <div class="form-wrapper shadow-lg single-col-max-width mx-auto p-5">
            <form
              id="contact-form"
              class="contact-form"
              method="post"
              action=""
            >
              <h3 class="text-center mb-4">Contact Form</h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="sr-only" for="cname">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cname"
                    name="name"
                    placeholder="Name"
                    minlength="2"
                    required=""
                    aria-required="true"
                  ></input>
                </div>
                <div class="col-md-6">
                  <label class="sr-only" for="cemail">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="cemail"
                    name="email"
                    placeholder="Email"
                    required=""
                    aria-required="true"
                  ></input>
                </div>
                <div class="col-12">
                  <label class="sr-only" for="cmessage">
                    Your message
                  </label>
                  <textarea
                    class="form-control"
                    id="cmessage"
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    required=""
                    aria-required="true"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn w-100 btn-primary py-2">
                    Send It
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
