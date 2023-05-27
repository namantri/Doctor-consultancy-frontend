import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./appointment.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
function Appointment() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState([]);
  const [patient, setPatient] = useState([]);
  const [address, setAddress] = useState([]);

  const baseURL = `http://localhost:5269/api/Appointment/doctor/${id}`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setAppointment(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(appointment);

  if (appointment.length >= 1) {
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
            <div
              style={{
                marginLeft: "30px",

                fontSize: "1.5rem",
              }}
            >
              Upcoming appointments
            </div>
            {appointment.map((item, index) => (
              <div class="info" key={index}>
                <div class="Appointment-container" style={{ height: "40%" }}>
                  <div class="Main-content">
                    <div class="Left-content">
                      <p>Patient Name:</p>
                      <p>Appointment Date:</p>
                      <p>Appointment Time:</p>
                    </div>
                    <div class="Right-content">
                      <p>{item.patient.name}</p>
                      <p>{item.appointment.appointmentDateTime}</p>
                      <p>{item.appointment.appointmentDateTime}</p>
                    </div>
                    <div class="Control-Btn">
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        style={{ marginLeft: "70px" }}
                        onClick={() =>
                          navigate(
                            `/patientappointment?name=${name}&&id=${id}&&role=${role}&&patientid=${item.patient.patientId}&&addressid=${item.address.addressId}&&appointmentid=${item.appointment.appointmentId}`
                          )
                        }
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
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
              <div
                style={{
                  marginLeft: "40%",
                  marginTop: "20%",
                  fontWeight: "bold",
                }}
              >
                Sorry, You don't have any appointment......{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Appointment;
