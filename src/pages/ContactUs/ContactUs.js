import React from "react";
import "./contactus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
function ContactUs() {
  const navigate = useNavigate();
  const [Name, SetName] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [Country, SetCountry] = useState("");
  const [City, SetCity] = useState("");
  const [Email, SetEmail] = useState("");
  const [Qualification, SetQualification] = useState("");
  const [Message, SetMessage] = useState("");

  const handleNameChange = (value) => {
    SetName(value);
  };
  const handlePhoneNumberChange = (value) => {
    SetPhoneNumber(value);
  };
  const handleCountryChange = (value) => {
    SetCountry(value);
  };
  const handleCityChange = (value) => {
    SetCity(value);
  };
  const handleEmailChange = (value) => {
    SetEmail(value);
  };
  const handleQualificationChange = (value) => {
    SetQualification(value);
  };
  const handleMessageChange = (value) => {
    SetMessage(value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const data = {
      name: Name,
      phonenumber: PhoneNumber,
      country: Country,
      city: City,
      email: Email,
      qualification: Qualification,
      message: Message,
    };

    const url = "http://localhost:5269/api/Auth/ContactUs";
    axios.post(url, data).then((result) => {
      swal.fire("Good job!", "Sent Successfully !", "success");

      navigate("/");
    });
  };
  return (
    <div
      className="body"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      <div className="container contact-us">
        <div className="left-page" style={{ width: "40%" }}>
          <header style={{ width: "400px" }}>Let's Get In Touch</header>
          <br />
          <img
            style={{ height: "400px", width: "500px" }}
            src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png"
          />
        </div>

        <div className="right-page">
          <header
            style={{
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "500",
            }}
          >
            Contact Us
          </header>
          <div className="form-container contact-us">
            <form action="submit" style={{width:"70%"}}>
              <div className="form contact-us">
                <div className="input-box">
                  <label>Name:</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter the patient name"
                    required
                    onChange={(e) => handleNameChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label>Phone Number:</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter your contact number"
                    required
                    onChange={(e) => handlePhoneNumberChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label>Country:</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter your country"
                    required
                    onChange={(e) => handleCountryChange(e.target.value)}
                  />
                </div>

                <div className="input-box">
                  <label>City:</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter your city"
                    required
                    onChange={(e) => handleCityChange(e.target.value)}
                  />
                </div>

                <div className="input-box">
                  <label>Email</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label>I am a</label>
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Doctor/Patient"
                    required
                    onChange={(e) => handleQualificationChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <label>Message</label>
                  <input
                    className="inputField-message"
                    type="text-box"
                    placeholder="Write here...."
                    required
                    style={{ height: "150px" }}
                    onChange={(e) => handleMessageChange(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <hr />
          <button
            style={{ margintop: "10px" }}
            type="button"
            className="btn btn-dark"
            onClick={(e) => handleSave(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
