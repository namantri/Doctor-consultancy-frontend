import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./editdoctor.css";
import swal from "sweetalert2";
import { useRef } from "react";
import SideBar from "../../SideBar/SideBar";

function EditDoctor() {
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

  const inputRef = useRef(null);

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
  const handleGenderChange = (value) => {
    SetGender(value);
  };
  const handleBloodGroupChange = (value) => {
    SetBloodGroup(value);
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
  const handleLanguageChange = (value) => {
    SetLanguage(value);
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

    const data = {
      name: FullName || doctor.name,
      email: Email || doctor.email,
      phone: PhoneNumber || doctor.phone,
      birthDate: BirthDate || doctor.birthDate,
      gender: Gender || doctor.gender,
      bloodGroup: BloodGroup || doctor.bloodGroup,
      qualification: Qualification || doctor.qualification,
      specialization: Specialization || doctor.specialization,
      totalExperience: TotalExperience || doctor.totalExperience,

      otherDetails: OtherDetails || doctor.otherDetails,
      language: Language || doctor.language,
      isApproved: 1,
      image: Image || doctor.image,
      userId: 0,
      fees: Fees || doctor.fees,
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
        navigate(`/editdata?name=${name}&&id=${id}&&role=${role}`);
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
        <div class="main_content">
          <div class="header" style={{ fontSize: "30px" }}>
            Hello, Dr. {name}
          </div>

          <div class="info" style={{ height: "100%" }}>
            <div class="img" onClick={handleImageClick}>
              {doctor.image ? (
                <img src={doctor.image} alt="" />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRoShkMgb_Ahu5LneLySnJb89rYL6WC5bAcN6rzhp&s"
                  alt=""
                />
              )}

              <input
                type="file"
                ref={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              ></input>
            </div>
            <div class="input-box1">
              <label>Full Name:</label>
              <input
                type="text"
                placeholder={doctor.name}
                onChange={(e) => handleNameChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Email:</label>
              <input
                type="text"
                placeholder={doctor.email}
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Phone:</label>
              <input
                type="text"
                placeholder={doctor.phone}
                onChange={(e) => handlePhoneNumberChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Birth Date:</label>
              <input
                type="text"
                placeholder={doctor.birthDate}
                onChange={(e) => handleBirthDateChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Gender:</label>
              <input
                type="text"
                placeholder={doctor.gender}
                onChange={(e) => handleGenderChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Blood Group:</label>
              <input
                type="text"
                placeholder={doctor.bloodGroup}
                onChange={(e) => handleBloodGroupChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Qualification:</label>
              <input
                type="text"
                placeholder={doctor.qualification}
                onChange={(e) => handleQualificationChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Specialization:</label>
              <input
                type="text"
                placeholder={doctor.specialization}
                onChange={(e) => handleSpecializationChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Total Experience:</label>
              <input
                type="text"
                placeholder={doctor.totalExperience}
                onChange={(e) => handleTotalExperienceChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Other Details:</label>
              <input
                type="text"
                placeholder={doctor.otherDetails}
                onChange={(e) => handleDetailsChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label>Language:</label>
              <input
                type="text"
                placeholder={doctor.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              />
            </div>
            <div class="input-box1">
              <label> Fees:</label>
              <input
                type="text"
                placeholder={doctor.fees}
                onChange={(e) => handleFeesChange(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              style={{ alignItems: "center", marginLeft: "40%" }}
              onClick={(e) => handleSave(e)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDoctor;
