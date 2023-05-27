import React from "react";
import "./RegistrationPatient.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function RegistrationPatient() {
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [BirthDate, SetBirthDate] = useState("");
  const [Gender, SetGender] = useState("");
  const [BloodGroup, SetBloodGroup] = useState("");
  const [Street1, SetStreet1] = useState("");
  const [Street2, SetStreet2] = useState("");
  const [City, SetCity] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [PostalCode, SetPostalCode] = useState("");
  const [OtherDetails, SetOtherDetails] = useState("");
  const [Language, SetLanguage] = useState("");
  const [Image, SetImage] = useState("");

  const handleNameChange = (value) => {
    SetFullName(value);
  };
  const handleEmailChange = (value) => {
    SetEmail(value);
  };
  const handlePhoneNumberChange = (value) => {
    SetPhoneNumber(value);
  };
  const handleBirthDateChange = (value) => {
    SetBirthDate(value);
  };
  const handleGenderChange = (event) => {
    SetGender(event.target.value);
  };
  const handleBloodGroupChange = (event) => {
    SetBloodGroup(event.target.value);
  };

  const handleStreet1Change = (value) => {
    SetStreet1(value);
  };
  const handleStreet2Change = (value) => {
    SetStreet2(value);
  };
  const handleCityChange = (value) => {
    SetCity(value);
  };
  const handleStateChange = (value) => {
    SetState(value);
  };
  const handleCountryChange = (event) => {
    SetCountry(event.target.value);
  };
  const handlePostalCodeChange = (value) => {
    SetPostalCode(value);
  };

  const handleDetailsChange = (value) => {
    SetOtherDetails(value);
  };
  const handleLanguageChange = (event) => {
    SetLanguage(event.target.value);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    SetImage(base64);
    console.log(SetImage);
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };
  console.log(Image);
  const handleSave = (e) => {
    e.preventDefault();
    if (
      !FullName ||
      !Email ||
      !PhoneNumber ||
      !BirthDate ||
      !Gender ||
      !BloodGroup ||
      !Street1 ||
      !Street2 ||
      !City ||
      !State ||
      !Country ||
      !PostalCode ||
      !Language
    ) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some fields are empty",
      });

      return;
    }

    const data = {
      fullName: FullName,
      email: Email,
      phoneNumber: PhoneNumber,
      birthDate: BirthDate,
      gender: Gender,
      bloodGroup: BloodGroup,

      street1: Street1,
      street2: Street2,
      city: City,
      state: State,
      country: Country,
      postalCode: PostalCode,
      otherDetails: OtherDetails,
      language: Language,

      image: Image,
    };

    const url = "http://localhost:5269/api/Auth/UpdatePatient";
    axios
      .post(url, data)
      .then((result) => {
        if (result.data.message == "Something went wrong") {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Try Again",
          });
          navigate("/registrationpatient");
        } else {
          swal.fire("Good job!", "Profile Updated Successfully !", "success");

          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1 style={{ marginLeft: "38vw" }}>Register Patient</h1>
      <section
        class="container registration doctor"
        style={{ maxWidth: "1500px" }}
      >
        <form class="form" style={{ marginLeft: "0px" }}>
          <div>
            <div onClick={handleImageClick}>
              {Image ? (
                <img
                  src={Image}
                  alt=""
                  style={{ marginLeft: "17vw", borderRadius: "50%" }}
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRoShkMgb_Ahu5LneLySnJb89rYL6WC5bAcN6rzhp&s"
                  alt=""
                  style={{ marginLeft: "17vw", borderRadius: "50%" }}
                />
              )}

              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <div class="input-box">
            <label> Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              required
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>
          <div class="input-box">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              required
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>

          <div class="column">
            <div class="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                required
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
              />
            </div>
            <div class="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                required
                onChange={(e) => handleBirthDateChange(e.target.value)}
              />
            </div>
          </div>
          <div class="input-box address">
            <div class="column">
              <div class="select-box">
                <select value={Gender} onChange={handleGenderChange}>
                  <option hidden>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option vlaue="Others">Others</option>
                </select>
              </div>
              <div class="select-box">
                <select value={BloodGroup} onChange={handleBloodGroupChange}>
                  <option hidden>Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>

          <div class="input-box address">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter street address line 1"
              required
              onChange={(e) => handleStreet1Change(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter street address line 2"
              required
              onChange={(e) => handleStreet2Change(e.target.value)}
            />
            <div class="column">
              <div class="select-box">
                <select value={Country} onChange={handleCountryChange}>
                  <option hidden>Country</option>
                  <option value="America">America</option>
                  <option value="Japan">Japan</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter your city"
                required
                onChange={(e) => handleCityChange(e.target.value)}
              />
            </div>
            <div class="column">
              <input
                type="text"
                placeholder="Enter your State"
                required
                onChange={(e) => handleStateChange(e.target.value)}
              />
              <input
                type="number"
                placeholder="Enter postal code"
                required
                onChange={(e) => handlePostalCodeChange(e.target.value)}
              />
            </div>
            <br />
            <h5>Others Details</h5>
            <div class="column">
              <input
                type="text"
                placeholder="Enter  other Details"
                required
                onChange={(e) => handleDetailsChange(e.target.value)}
              />
              <div class="select-box">
                <select value={Language} onChange={handleLanguageChange}>
                  <option hidden>Language</option>
                  <option value="Hindi">Hindi</option>
                  <option option="English">English</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={(e) => handleSave(e)}>Submit</button>
        </form>
      </section>
    </>
  );
}
export default RegistrationPatient;
