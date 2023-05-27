import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./userprofiledoctor.css";
//import EditDoctor from "./EditDoctor/EditDoctor";
import EditDoctor from "../pages/EditDoctor/EditDoctor";
import SideBar from "../SideBar/SideBar";
function UserProfileDoctor() {
  const navigate = useNavigate();
  const location = useLocation();
  const [doctor, setDoctor] = useState([]);
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");

  const baseURL = `http://localhost:5269/api/Doctor/${id}`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setDoctor(res.data.doctor);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(doctor);

  const navigateToPage = () => {
    navigate(`/editdata?name=${name}&&id=${id}&&role=${role}`);
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
          <div class="header" style={{ fontSize: "30px" }}>
            Hello, Dr. {name}
            <button
              className="btn btn-primary"
              style={{ alignItems: "center", marginLeft: "50%" }}
              onClick={() => navigateToPage()}
            >
              Update Profile
            </button>
          </div>

          <div
            class="info"
            style={{
              marginTop: "20px",

              width: "100%",
              height: "100%",
            }}
          >
            <div class="img">
              {doctor.image ? (
                <img src={doctor.image} alt="" />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRoShkMgb_Ahu5LneLySnJb89rYL6WC5bAcN6rzhp&s"
                  alt=""
                />
              )}
            </div>
            <div class="main-info" style={{ display: "flex" }}>
              <div class="left-info">
                <p>Full Name:</p>
                <p>Email:</p>
                <p>Phone: </p>
                <p>Birth Date: </p>
                <p>Gender: </p>
                <p>Blood Group:</p>
                <p>Qualification:</p>
                <p>Specialization: </p>
                <p>Total Experience:</p>
                <p>Other Details:</p>
                <p>Languages:</p>
                <p>Doctor Fee:</p>
              </div>
              <div class="right-info">
                <p> {doctor.name}</p>
                <p> {doctor.email}</p>
                <p>{doctor.phone}</p>
                <p>{doctor.birthDate}</p>
                <p> {doctor.gender}</p>
                <p> {doctor.bloodGroup}</p>
                <p>{doctor.qualification}</p>
                <p> {doctor.specialization}</p>
                <p>{doctor.totalExperience}</p>
                <p>{doctor.otherDetails}</p>
                <p>{doctor.language}</p>
                <p>{doctor.fees}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDoctor;
