import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black fg-white pt-5 pb-4 mt-5" id="about">
      <div className="container" id="contact">
        {/* Optional Heading Row */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="h3 fw-bold">Contact</h1>
          </div>
        </div>

        {/* 4-Column Content Row */}
        <div className="row">
          {/* Column 1: Website Name & About */}
          <div className="col-12 sm:col-6 md:col-3 mb-4">
            <h5 className="fw-bold text-uppercase mb-3">my second site</h5>
            <p className="small fg-3">
              Welcome to my second site. We build clean, responsive, and
              user-friendly web experiences designed to help your business grow
              online.
            </p>
          </div>

          {/* Column 2: Navigation Tabs */}
          <div className="col-12 sm:col-6 md:col-3 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="fg-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="fg-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="fg-white text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="fg-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media with Logos */}
          <div className="col-12 sm:col-6 md:col-3 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Follow Us</h6>
            <ul className="list-unstyled ">
              <li className="mb-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fg-white fg-white text-decoration-none"
                >
                  <i className="bi bi-facebook me-2"></i>Facebook
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fg-white text-decoration-none"
                >
                  <i className="bi bi-instagram me-2"></i>Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fg-white text-decoration-none"
                >
                  <i className="bi bi-twitter-x me-2"></i>Twitter / X
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="fg-white text-decoration-none"
                >
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details & Address */}
          <div className="col-12 sm:col-6 md:col-3 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">Contact Us</h6>
            <p className="small mb-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Main Street, Pune, Maharashtra, India
            </p>
            <p className="small mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              info@mysecondsite.com
            </p>
            <p className="small mb-0">
              <i className="bi bi-telephone-fill me-2"></i>
              +91 98765 43210
            </p>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="row border-top border-secondary pt-3">
          <div className="col-12 text-center small fg-3">
            © {new Date().getFullYear()} <strong>my second site</strong>. All
            rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
