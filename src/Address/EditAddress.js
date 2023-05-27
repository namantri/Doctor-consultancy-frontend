import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "./edit.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert2";

function EditAddress() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  const addId = new URLSearchParams(location.search).get("addId");

  const [address, setAddress] = useState([]);
  const [Street, SetStreet] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [PostalCode, SetPostalCode] = useState("");
  const [TimeIn, SetTimeIn] = useState("");
  const [TimeOut, SetTimeOut] = useState("");
  const [DaysAvailable, SetDaysAvailable] = useState("");
  const baseURL = `http://localhost:5269/api/Address/${addId}`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

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
  const handleTimeOutChange = (value) => {
    SetTimeOut(value);
  };
  const handleDaysAvailableChange = (value) => {
    SetDaysAvailable(value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      addressId: address.addId,
      street: Street || address.street,
      city: City || address.city,
      state: State || address.state,
      country: Country || address.country,
      postalCode: PostalCode || address.postalCode,
      timeIn: TimeIn || address.timeIn,
      timeOut: TimeOut || address.timeOut,
      daysAvailable: DaysAvailable || address.daysAvailable,
      doctorId: 0,
    };
    console.log(data);
    const url = `http://localhost:5269/api/Address/${addId}`;
    axios
      .put(url, data)
      .then((result) => {
        swal.fire("Good job!", "Address Updated Successfully !", "success");

        navigate(`/address?name=${name}&&id=${id}&&role=${role}`);
      })
      .catch((error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try Again",
        });
        navigate(
          `/editaddress?name=${name}&&id=${id}&&role=${role}&&addId=${addId}`
        );
      });
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
        <div class="main" style={{ marginLeft: "400px" }}>
          <h1>Edit Address</h1>
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
                  placeholder={address.street}
                  required
                  onChange={(e) => handleStreetChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>City:</label>
                <input
                  type="text"
                  placeholder={address.city}
                  required
                  onChange={(e) => handleCityChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>State:</label>
                <input
                  type="text"
                  placeholder={address.state}
                  required
                  onChange={(e) => handleStateChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Postal Code:</label>
                <input
                  type="text"
                  placeholder={address.postalCode}
                  required
                  onChange={(e) => handlePostalCodeChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Country:</label>
                <input
                  type="text"
                  placeholder={address.country}
                  required
                  onChange={(e) => handleCountryChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Time In:</label>
                <input
                  type="text"
                  placeholder={address.timeIn}
                  required
                  onChange={(e) => handleTimeInChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Time Out:</label>
                <input
                  type="text"
                  placeholder={address.timeOut}
                  required
                  onChange={(e) => handleTimeOutChange(e.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Days Available:</label>
                <input
                  type="text"
                  placeholder={address.daysAvailable}
                  required
                  onChange={(e) => handleDaysAvailableChange(e.target.value)}
                />
              </div>

              <br />
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => handleSave(e)}
              >
                Save Address
              </button>
              <br />
              <a
                href="#"
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
export default EditAddress;
