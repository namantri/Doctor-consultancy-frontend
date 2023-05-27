
import React from "react";
import "./userprofilepatient.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../NavbarPortal/Navbar"
function UserProfilePatient() {
    const inputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [FullName, SetFullName] = useState("");
    const [Email, SetEmail] = useState("");
    const [PhoneNumber, SetPhoneNumber] = useState("");
    const [BirthDate, SetBirthDate] = useState("");
    const [Gender, SetGender] = useState("");
    const [BloodGroup, SetBloodGroup] = useState("");
    const [Street1, SetStreet1] = useState("");
    const [Street2, SetStreet2] = useState("");
    const [Country, SetCountry] = useState("");

    const [City, SetCity] = useState("");
    const [State, SetState] = useState("");
    const [PostalCode, SetPostalCode] = useState("");
    const [OtherDetails, SetOtherDetails] = useState("");
    const [Language, SetLanguage] = useState("");

    const [Image, SetImage] = useState({
        myFile: "",
    });
    const [patient, setPatient] = useState([]);

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
    const handleStreet1Change = (value) => {
        SetStreet1(value);
    };
    const handleStreet2Change = (value) => {
        SetStreet2(value);
    };
    const handleStateChange = (value) => {
        SetState(value);
    };
    const handleCountryChange = (value) => {
        SetCountry(value);
    };

    const handleCityChange = (value) => {
        SetCity(value);
    };
    const handlePostalCodeChange = (value) => {
        SetPostalCode(value);
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
        console.log(SetImage);
    };
    const handleImageClick = () => {
        inputRef.current.click();
    };
    const name = new URLSearchParams(location.search).get("name");
    const id = new URLSearchParams(location.search).get("id");
    const role = new URLSearchParams(location.search).get("role");

    const baseURL = `http://localhost:5269/api/Patient/${id}`;

    useEffect(() => {
        axios
            .get(baseURL)
            .then((res) => {
                setPatient(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    console.log(patient)
    const handleSave = (e) => {
        e.preventDefault();


        const data = {
            patientId: id,
            name: FullName || patient.name,
            email: Email || patient.email,
            phone: PhoneNumber || patient.phone,
            birthDate: BirthDate || patient.birthDate,
            gender: Gender || patient.gender,
            bloodGroup: BloodGroup || patient.bloodGroup,
            street1: Street1 || patient.street1,
            street2: Street2 || patient.street2,
            city: City || patient.city,
            district: "string" || patient.district,
            state: State || patient.state,
            country: Country || patient.country,
            postalCode: PostalCode || patient.postalCode,

            otherDetails: OtherDetails || patient.otherDetails,
            language: Language || patient.language,
            image: Image || patient.image,
            userId: 0,

        };
        console.log(data);

        const url = `http://localhost:5269/api/Patient/${id}`;
        axios
            .put(url, data)
            .then((result) => {
                swal.fire("Good job!", "Profile Updated Successfully !", "success");

                navigate(`/?name=${name}&&id=${id}&&role=${role}`);
            })
            .catch((error) => {
                console.log(error);
                swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Try Again",
                });
                navigate(`/userprofilepatient?name=${name}&&id=${id}&&role=${role}`);
            });
    };
    return (
        <div>
            <Navbar />

            <section className="container" style={{ maxWidth: "1500px" }}>

                <form className="form" style={{ marginLeft: "0px", marginTop: "0px" }}>

                    <div>

                        <div onClick={handleImageClick} style={{ marginLeft: "500px" }}>
                            {Image ? (
                                <img src={patient.image} alt="" />
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
                    </div>
                    <hr />
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>Personal Details</div>
                    <hr />
                    <div class="column">
                        {" "}
                        <div className="input-box">
                            <label> Full Name</label>
                            <input
                                type="text"
                                placeholder={patient.name}
                                required
                                onChange={(e) => handleNameChange(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder={patient.email}
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
                                placeholder={patient.phone}
                                required
                                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Birth Date</label>
                            <input
                                type="text"
                                placeholder={patient.birthDate}
                                required
                                onChange={(e) => handleBirthDateChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-box address">
                        <div className="column">
                            <div className="input-box">
                                <label> Gender</label>
                                <input
                                    type="text"
                                    placeholder={patient.gender}
                                    required
                                    onChange={(e) => handleGenderChange(e.target.value)}
                                />
                            </div>
                            <div className="input-box">
                                <label> Blood Group</label>
                                <input
                                    type="text"
                                    placeholder={patient.bloodGroup}
                                    required
                                    onChange={(e) => handleBloodGroupChange(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-box">
                        <label> Other Details</label>
                        <input
                            type="text"
                            placeholder={patient.otherDetails}
                            required
                            onChange={(e) => handleDetailsChange(e.target.value)}
                        />
                        <label> Language</label>
                        <div className="column">
                            <input
                                type="text"
                                placeholder={patient.language}
                                required
                                onChange={(e) => handleLanguageChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <hr />
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>Address Details</div>
                    <hr />
                    <div className="column">
                        <div className="input-box">
                            <label> Street1</label>
                            <input
                                type="text"
                                placeholder={patient.street1}
                                required
                                onChange={(e) => handleStreet1Change(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Street2</label>
                            <input
                                type="number"
                                placeholder={patient.street2}
                                required
                                onChange={(e) => handleStreet2Change(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>City</label>
                            <input
                                type="text"
                                placeholder={patient.city}
                                required
                                onChange={(e) => handleCityChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>State</label>
                            <input
                                type="number"
                                placeholder={patient.state}
                                required
                                onChange={(e) => handleStateChange(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Country</label>
                            <input
                                type="text"
                                placeholder={patient.country}
                                required
                                onChange={(e) => handleCountryChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-box address">
                        <br />
                        <label>Postal Code</label>
                        <div className="column">
                            <input
                                type="text"
                                placeholder={patient.postalCode}
                                required
                                onChange={(e) => handlePostalCodeChange(e.target.value)}
                            />



                        </div>
                    </div>
                    <button onClick={(e) => handleSave(e)}>Submit</button>
                </form>
            </section>
        </div>
    );
}
export default UserProfilePatient;
