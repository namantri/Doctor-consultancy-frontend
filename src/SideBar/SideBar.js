import "./sidebar.css";
import React, { Component } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function SideBar() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  //const approved = new URLSearchParams(location.search).get("Approved");
  const navigate = useNavigate();
  return (
    <div class="wrapper">
      <div class="sidebar">
        <h2
          style={{ backgroundColor: "black" }}
          onClick={() =>
            navigate(`/approved?name=${name}&&id=${id}&&role=${role}`)
          }
        >
          E-Consult
        </h2>
        <ul style={{ backgroundColor: "black" }}>
          <li style={{ backgroundColor: "black" }}>
            <a
              href=" "
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/appointment?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-home"></i>Appointments
            </a>
          </li>
          <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(
                  `/userprofiledoctor?name=${name}&&id=${id}&&role=${role}`
                )
              }
            >
              <i class="fas fa-user"></i>Profile
            </a>
          </li>
          {/* <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/prescription?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-address-card"></i>Generate Prescription
            </a>
          </li> */}

          <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/feedback?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-blog"></i>Feedback
            </a>
          </li>
          {/* <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/contactdetails?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-address-book"></i>Contact
            </a>
          </li> */}
          <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() => navigate("/")}
            >
              <i class="fas fa-address-book"></i>Logout
            </a>
          </li>
          <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/address?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-address-book"></i>Address/Timings
            </a>
          </li>
          <li style={{ backgroundColor: "black" }}>
            <a
              href="#"
              style={{ backgroundColor: "black" }}
              onClick={() =>
                navigate(`/prescription?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              <i class="fas fa-address-card"></i>Previous Appointments
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
