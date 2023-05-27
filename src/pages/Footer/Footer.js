import React from "react";
import logo from "./logo.png";
import "./footer.css";
function Footer() {
  return (
    <footer class="page-footer font-small blue pt-2">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="ft col mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">E-Consult</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* <hr class="clearfix w-100 d-md-none pb-3" /> */}
          <div class="col mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              For Patient
            </h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Search for doctors</a>
              </li>
              <li>
                <a href="#!">Search for clinics</a>
              </li>
              <li>
                <a href="#!">Online Appointment</a>
              </li>
              <li>
                <a href="#!">Offline Appointment</a>
              </li>
              <li>
                <a href="#!">Order Medicine</a>
              </li>
            </ul>
          </div>
          {/* <hr class="clearfix w-100 d-md-none pb-3" /> */}
          <div class="col mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              For Doctors
            </h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Doctors profile</a>
              </li>
            </ul>
          </div>
          {/* <hr class="clearfix w-100 d-md-none pb-3" /> */}
          <div class="col mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">More</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Help</a>
              </li>
              <li>
                <a href="#!">Privacy policy</a>
              </li>
              <li>
                <a href="#!">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          {/* <hr class="clearfix w-100 d-md-none pb-3" /> */}
        </div>
      </div>
      <div class="imagediv">
        <img src={logo} alt="logo"></img>
      </div>
      <div class="footer-copyright text-center py-3">
        Copyright © 2023, E-Consult.All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
