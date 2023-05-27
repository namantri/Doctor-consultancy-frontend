import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "./edit.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert2";

function AddAddress() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");

  const [address, setAddress] = useState([]);
  const [Street, SetStreet] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [PostalCode, SetPostalCode] = useState("");
  const [TimeIn, SetTimeIn] = useState("");
  const [TimeOut, SetTimeOut] = useState("");
  const [DaysAvailable, SetDaysAvailable] = useState("");

  const baseURL = `http://localhost:5269/api/Address/${id}`;
  const handleStreetChange = (value) => {
    SetStreet(value);
  };
  const handleCityChange = (value) => {
    SetCity(value);
  };
  const handleStateChange = (value) => {
    SetState(value);
  };
  const handleCountryChange = (value) => {
    SetCountry(value);
  };
  const handlePostalCodeChange = (value) => {
    SetPostalCode(value);
  };
  const handleTimeInChange = (value) => {
    SetTimeIn(value);
  };
  const handleTimOutChange = (value) => {
    SetTimeOut(value);
  };
  const handleDaysAvailabelChange = (value) => {
    SetDaysAvailable(value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      addressId: 0,
      street: Street,
      city: City,
      state: State,
      country: Country,
      postalCode: PostalCode,
      timeIn: TimeIn,
      timeOut: TimeOut,
      daysAvailable: DaysAvailable,
      doctorId: id,
    };
    console.log(data);
    const url = `http://localhost:5269/api/Address/${id}`;
    axios
      .post(url, data)
      .then((result) => {
        swal.fire("Good job!", "Address Added Successfully !", "success");

        navigate(`/address?name=${name}&&id=${id}&&role=${role}`);
      })
      .catch((error) => {
        console.log(error);

        navigate(`/addaddress?name=${name}&&id=${id}&&role=${role}`);
      });
  };
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
        <div class="main" style={{ marginLeft: "400px" }}>
          <h1>Add Address</h1>
          <div class="container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQmgYubmEHhLK3NgapXu21Z7XGUOZYoHyLy5YcnRh6ZycejH0B5nECAfm9tXnhYuZ0Bk&usqp=CAU"
              alt=""
            />
            <div class="form">
              <div class="input-box">
                <label>Street:</label>
                <input
                  type="text"
                  placeholder="Enter your Street"
                  required
                  onChange={(e) => handleStreetChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>City:</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  required
                  onChange={(e) => handleCityChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>State:</label>
                <input
                  type="text"
                  placeholder="Enter your State"
                  required
                  onChange={(e) => handleStateChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Postal Code:</label>
                <input
                  type="text"
                  placeholder="Enter your postal code"
                  required
                  onChange={(e) => handlePostalCodeChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Country:</label>
                <input
                  type="text"
                  placeholder="Enter your Country"
                  required
                  onChange={(e) => handleCountryChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Time In:</label>
                <input
                  type="text"
                  placeholder="Enter your entry time"
                  required
                  onChange={(e) => handleTimeInChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Time Out:</label>
                <input
                  type="text"
                  placeholder="Enter your exit time"
                  required
                  onChange={(e) => handleTimOutChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Days Available:</label>
                <input
                  type="text"
                  placeholder="Enter your available days"
                  required
                  onChange={(e) => handleDaysAvailabelChange(e.target.value)}
                />
              </div>
              <br />
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => handleSave(e)}
              >
                Save
              </button>
              <br />
              <a
                href=" "
                class="card-link"
                onClick={() =>
                  navigate(`/address?name=${name}&&id=${id}&&role=${role}`)
                }
              >
                Back to list
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
