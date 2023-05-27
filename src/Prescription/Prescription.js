import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./prescription.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
// import RegistrationDoctor from "../RegistrationDoctor/RegistrationDoctor";
function Prescription() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");

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
            <div>Your Upcoming appointments are listed below : </div>
            <div>hii</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prescription;
