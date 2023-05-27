import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./doctorportal.css";
import RegistrationDoctor from "../RegistrationDoctor/RegistrationDoctor";
import { useNavigate } from "react-router-dom";
import Appointment from "../../AppointmentPage/Appointment";
import SideBar from "../../SideBar/SideBar";
function DoctorPortal() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  const approved = new URLSearchParams(location.search).get("Approved");
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "0 px",
        padding: "0 px",
        boxSizing: "bordeBox",
        listStyle: "none",
        textDecoration: "none",
        fonFamily: "Josefin Sans",
      }}
    >
      <div class="wrapper">
        <SideBar />
        <div class="main_content">
          <div class="header" style={{ fontSize: "30px" }}>
            Hello, Dr. {name}
          </div>
          <div class="info">
            <div style={{ fontSize: "40px" }}>
              Lets build your dedicated Profile.........
            </div>
            <hr />
            <div>Complete your Profile if you have not yet completed !!!!!</div>

            <div>
              <RegistrationDoctor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoctorPortal;
