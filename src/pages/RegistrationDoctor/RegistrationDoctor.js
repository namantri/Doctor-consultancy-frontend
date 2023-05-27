import React from "react";
import "./registrationdoctor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function RegistrationDoctor() {
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [BirthDate, SetBirthDate] = useState("");
  const [Gender, SetGender] = useState("");
  const [BloodGroup, SetBloodGroup] = useState("");
  const [Qualification, SetQualification] = useState("");
  const [Specialization, SetSpecialization] = useState("");
  const [TotalExperience, SetTotalExperience] = useState("");

  const [Fees, SetFees] = useState("");
  const [OtherDetails, SetOtherDetails] = useState("");
  const [Language, SetLanguage] = useState("");
  const [Image, SetImage] = useState("");
  // const [Image, SetImage] = useState({
  //   myFile: "",
  // });
  const [doctor, setDoctor] = useState([]);

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
  const handleQualificationChange = (value) => {
    SetQualification(value);
  };
  const handleSpecializationChange = (value) => {
    SetSpecialization(value);
  };
  const handleTotalExperienceChange = (value) => {
    SetTotalExperience(value);
  };

  const handleFeesChange = (value) => {
    SetFees(value);
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
    // console.log(SetImage);
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };
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

  const handleSave = (e) => {
    e.preventDefault();
    if (
      !PhoneNumber ||
      !BirthDate ||
      !Gender ||
      !BloodGroup ||
      !Qualification ||
      !Specialization ||
      !TotalExperience ||
      !Fees ||
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
      name: FullName || doctor.name,
      email: Email || doctor.email,
      phone: PhoneNumber,
      birthDate: BirthDate,
      gender: Gender,
      bloodGroup: BloodGroup,
      qualification: Qualification,
      specialization: Specialization,
      totalExperience: TotalExperience,

      otherDetails: OtherDetails,
      language: Language,
      isApproved: 1,
      image: Image,
      userId: 0,
      fees: Fees,
    };
    console.log(data);

    const url = `http://localhost:5269/api/Doctor/${id}`;
    axios
      .put(url, data)
      .then((result) => {
        swal.fire("Good job!", "Profile Updated Successfully !", "success");

        navigate(`/userprofiledoctor?name=${name}&&id=${id}&&role=${role}`);
      })
      .catch((error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try Again",
        });
        navigate(`/doc?name=${name}&&id=${id}&&role=${role}`);
      });
  };
  return (
    <>
      <h1 style={{ marginLeft: "38vw" }}>Register Doctor</h1>
      <section
        className="container registration doctor"
        style={{ maxWidth: "1500px" }}
      >
        <form className="form" style={{ marginLeft: "0px" }}>
          <div>
            <div onClick={handleImageClick}>
              {Image ? (
                <img
                  src={Image}
                  alt=""
                  style={{ marginLeft: "33vw", borderRadius: "50%" }}
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRoShkMgb_Ahu5LneLySnJb89rYL6WC5bAcN6rzhp&s"
                  alt=""
                  style={{ marginLeft: "33vw", borderRadius: "50%" }}
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
          <div class="column">
            {" "}
            <div className="input-box">
              <label> Full Name</label>
              <input
                type="text"
                placeholder={doctor.name}
                required
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Email</label>
              <input
                type="text"
                placeholder={doctor.email}
                required
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                required
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                placeholder="Enter birth date"
                required
                onChange={(e) => handleBirthDateChange(e.target.value)}
              />
            </div>
          </div>
          <div className="input-box address">
            <div className="column">
              <div className="select-box">
                <select value={Gender} onChange={handleGenderChange}>
                  <option hidden>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="select-box">
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
          <div className="input-box">
            <label> Qualification</label>
            <input
              type="text"
              placeholder="Enter your qualification"
              required
              onChange={(e) => handleQualificationChange(e.target.value)}
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label> Specialization</label>
              <input
                type="text"
                placeholder="Enter your Specialization"
                required
                onChange={(e) => handleSpecializationChange(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Total Experience</label>
              <input
                type="number"
                placeholder="Enter  total number of Experience"
                required
                onChange={(e) => handleTotalExperienceChange(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Doctor Fees</label>
              <input
                type="text"
                placeholder="Enter you charges"
                required
                onChange={(e) => handleFeesChange(e.target.value)}
              />
            </div>
          </div>

          <div className="input-box address">
            <br />
            <label>Others Details</label>
            <div className="column">
              <input
                type="text"
                placeholder="Enter  other Details"
                required
                onChange={(e) => handleDetailsChange(e.target.value)}
              />

              <div className="select-box">
                <select value={Language} onChange={handleLanguageChange}>
                  <option hidden>Language</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
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
export default RegistrationDoctor;
