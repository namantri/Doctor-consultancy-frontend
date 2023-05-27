import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./appointment.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
function PatientAppointment() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  //patientid=1&&addressid=6&&appointmentid=1
  const patientId = new URLSearchParams(location.search).get("patientid");
  const addId = new URLSearchParams(location.search).get("addressid");
  const appId = new URLSearchParams(location.search).get("appointmentid");
  const navigate = useNavigate();
  const [Patient, SetPatient] = useState([]);
  const [Appointment, SetAppointment] = useState([]);
  const [Address, SetAddress] = useState([]);

  const baseURL = `http://localhost:5269/api/Appointment/${appId}`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        SetPatient(res.data.patient);
        SetAppointment(res.data.appointment);
        SetAddress(res.data.address);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5269/api/Appointment/${appId}`
      );
      console.log(response.data);
      // Handle the response data
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Appointment Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/appointment?name=${name}&&id=${id}&&role=${role}`);
    } catch (error) {
      console.error(error); // Handle the error
    }
  };
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
          <div class="leftpage">
            <div class="View-details">
              <header>Patient Details</header>
              <hr />
              <div class="patient">
                <div class="patient-img" style={{ marginLeft: "100px" }}>
                  {Patient.image ? (
                    <img src={Patient.image} alt="" />
                  ) : (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRoShkMgb_Ahu5LneLySnJb89rYL6WC5bAcN6rzhp&s"
                      alt=""
                    />
                  )}
                  <br />
                  <br />
                  <p style={{ color: "black", fontSize: "1.5rem" }}>
                    Patient Image
                  </p>
                  <br />
                  <div class="different-btn" style={{ marginTop: "40px" }}>
                    <button type="button" class="btn btn-primary">
                      Join meeting
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      style={{ marginTop: "10px" }}
                    >
                      Upload prescription
                    </button>
                    <br />

                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ marginTop: "10px" }}
                      onClick={handleDelete}
                    >
                      Cancel
                    </button>
                    <br />
                  </div>
                </div>
                <div class=" leftpatient-details">
                  <p>Full Name:</p>
                  <p>Gender:</p>

                  <p>Date of Birth:</p>
                  <p>Blood Group:</p>
                  <p>Mobile Number:</p>
                  <p>Email Address:</p>
                  <p> Street1:</p>
                  <p>Stree2:</p>
                  <p>Postal Code:</p>
                  <p>City:</p>
                  <p>State:</p>
                  <p>Country:</p>
                </div>
                <div class=" rightpatient-details">
                  <p>{Patient.name}</p>
                  <p>{Patient.gender}</p>
                  <p>{Patient.birthDate}</p>
                  <p>{Patient.bloodGroup}</p>
                  <p>{Patient.phone}</p>
                  <p>{Patient.email}</p>
                  <p>{Patient.street1}</p>
                  <p>{Patient.street2}</p>
                  <p>{Patient.postalCode}</p>
                  <p>{Patient.city}</p>
                  <p>{Patient.state}</p>
                  <p>{Patient.country}</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div style={{ fontSize: "30px", fontWeight: "3px" }}>
            Previous Appointments
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default PatientAppointment;
