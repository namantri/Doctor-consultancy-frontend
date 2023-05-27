import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import "./address.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
// import RegistrationDoctor from "../RegistrationDoctor/RegistrationDoctor";
function Address() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");

  const [address, setAddress] = useState([]);
  const baseURL = `http://localhost:5269/api/Address/${id}/AddressList`;

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(address);
  console.log(address.length);
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const handleDelete = (addId) => {
    const urldel = `http://localhost:5269/api/Address/${addId}`;
    axios
      .delete(urldel)
      .then((response) => {
        setAddress(address.filter((item) => item.addressId !== id));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Address deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/address?name=${name}&&id=${id}&&role=${role}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (address.length >= 1) {
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

          <div class="main1" style={{ width: "100%" }}>
            <h1>ADDRESSES </h1>
            <button
              className="btn btn-primary"
              style={{ marginLeft: "85%", marginTop: "3%" }}
              onClick={() =>
                navigate(`/addaddress?name=${name}&&id=${id}&&role=${role}`)
              }
            >
              Add Address
            </button>
            {address.map((item) => (
              <div class="card1">
                <div class="card-body1">
                  <img
                    src="https://thumbs.dreamstime.com/b/doctor-cartoon-character-thumbs-up-cartoon-doctor-wearing-lab-white-coat-stethoscope-peeking-above-sign-giving-thumbs-108876449.jpg"
                    alt=""
                  />
                  <p class="card-text">Street &nbsp;: &nbsp; {item.street}</p>
                  <p class="card-text">City &nbsp;: &nbsp;{item.city}</p>
                  <p class="card-text">State &nbsp;: &nbsp; {item.state}</p>
                  <p class="card-text">
                    Postal Code &nbsp;: &nbsp;{item.postalCode}
                  </p>

                  <p class="card-text">Country &nbsp;: &nbsp;{item.country}</p>
                  <p class="card-text">Time In&nbsp;: &nbsp;{item.timeIn}</p>
                  <p class="card-text">Time Out &nbsp;: &nbsp;{item.timeOut}</p>
                  <p class="card-text">
                    Days Available &nbsp;: &nbsp;{item.daysAvailable}
                  </p>

                  <a
                    href="#"
                    class="card-link"
                    onClick={() =>
                      navigate(
                        `/editaddress?name=${name}&&id=${id}&&role=${role}&&addId=${item.addressId}`
                      )
                    }
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="card-link"
                    onClick={() => handleDelete(item.addressId)}
                  >
                    delete
                  </a>
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
                Sorry, You don't have any address......{" "}
              </div>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "45%", marginTop: "3%" }}
                onClick={() =>
                  navigate(`/addaddress?name=${name}&&id=${id}&&role=${role}`)
                }
              >
                Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Address;
