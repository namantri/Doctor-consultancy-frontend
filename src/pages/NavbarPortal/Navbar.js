// import React from "react";
import * as React from "react";
import "./navbar.css";
import logo from "./logo.png";
import Login from "../Login/Login";
import DataSecurity from "../DataSecurity/DataSecurity";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Collapse } from "bootstrap";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  const location = useLocation();
  const [user, setUser] = useState(false);
  const [value, setValue] = React.useState("Security and help");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const checkOption = () => {
    if (value === "DataSecurity") {
      navigate("/datasecurity");
    } else {
      navigate("/contactus");
    }
  };

  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");
  return (
    // <div>
    //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container-fluid ">
    //       <a
    //         href=""
    //         class="navbar-brand"
    //         onClick={() => navigate(`/?name=${name}&&id=${id}&&role=${role}`)}
    //       >
    //         <img
    //           src={logo}
    //           class="image"
    //           alt="E-consult"
    //           //onClick={navigate("/")}
    //         />
    //       </a>
    //       <button
    //         type="button"
    //         class="navbar-toggler"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarCollapse"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarCollapse">
    //         <div class="navbar-nav">
    //           <a
    //             href="#"
    //             class="nav-item nav-link active"
    //             onClick={() =>
    //               navigate(`/finddoctor?name=${name}&&id=${id}&&role=${role}`)
    //             }
    //           >
    //             FindDoctors
    //           </a>
    //           <a href="#" class="nav-item nav-link">
    //             VideoConsult
    //           </a>
    //           <a href="#" class="nav-item nav-link">
    //             Medicine
    //           </a>
    //         </div>

    //         <div class="navbar-nav ms-auto">
    //           <label style={{ marginRight: "20px" }}>
    //             {/* Security & Help */}
    //             {/* <select value={value} onChange={handleChange}>
    //               <option value="DataSecurity" onClick={() => checkOption()}>
    //                 Data Security
    //               </option>

    //               <option value="Help">Help</option>
    //             </select> */}
    //             <select value={value} onChange={handleChange}>
    //               <option hidden>Security & Help</option>
    //               <option value="DataSecurity" onClick={() => checkOption()}>
    //                 Data Security
    //               </option>
    //               <option value="Help" onClick={() => checkOption()}>
    //                 Help
    //               </option>
    //             </select>
    //           </label>
    //           &nbsp; &nbsp; &nbsp;
    //           {/* {isUserLoggedIn && ( */}
    //           {name ? (
    //             <div onClick={() => setUser((prev) => !prev)}>
    //               {name}
    //               {user && (
    //                 <div className="collapsable">
    //                   <button
    //                     className="btn"
    //                     style={{ color: "white" }}
    //                     onClick={() => navigate("/")}
    //                   >
    //                     Logout
    //                   </button>
    //                   <button
    //                     className="btn"
    //                     style={{ color: "white" }}
    //                     onClick={() =>
    //                       navigate(
    //                         `/userprofilepatient?name=${name}&&id=${id}&&role=${role}`
    //                       )
    //                     }
    //                     //navigate(`/userprofiledoctor?name=${name}&&id=${id}&&role=${role}`)
    //                   >
    //                     UserProfile
    //                   </button>
    //                 </div>
    //               )}
    //             </div>
    //           ) : (
    //             <button
    //               type="button"
    //               class="Login-btn btn btn-primary"
    //               onClick={() => navigate("/signin")}
    //             >
    //               Login / SignUp
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isSticky ? "stickynav" : "normalnav"
      }`}
      expand="lg"
      style={{ backgroundColor: !isSticky ? "transparent" : "#3482B5" }}
    >
      <div
        className="container-fluid"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="navbar-heading"
          style={{ backgroundColor: "transparent" }}
        >
          <h3 style={{ backgroundColor: "transparent" }}>
            <Link
              className="navbar-h"
              style={{ backgroundColor: "transparent" }}
              to="/"
            >
              <div
                style={{
                  marginTop: "10px",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                E-consult
              </div>
            </Link>
          </h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ backgroundColor: "transparent" }}
        >
          <ul
            className="navbar-nav  mb-2 mb-lg-0 ms-auto"
            style={{ backgroundColor: "transparent" }}
          >
            <li className="nav-item" style={{ backgroundColor: "transparent" }}>
              <a
                className="nav-link active me-3"
                aria-current="page"
                href="/"
                onClick={() =>
                  navigate(`/finddoctor?name=${name}&&id=${id}&&role=${role}`)
                }
              >
                Find Doctors
              </a>
            </li>
            <li
              className="nav-item active"
              style={{ backgroundColor: "transparent" }}
            >
              <a className="nav-link me-3" href="#">
                VideoConsult
              </a>
            </li>

            <li className="nav-item" style={{ backgroundColor: "transparent" }}>
              <a href="#" className="nav-link me-3">
                Medicine
              </a>
              {/* <NavLink activeClassName="ContactPage" className="nav-link me-3" to="#ContactPage">CONTACT</NavLink> */}
            </li>

            <li className="nav-item" style={{ backgroundColor: "transparent" }}>
              {/* <a className={`nav-link me-3 text-white ${isSticky ? "textDark" : "textWhite"}`} href="#BlogContaint">BLOG</a> */}
              <a
                className="nav-link me-3 textDark"
                onClick={() => navigate("/datasecurity")}
              >
                Data Security
              </a>
            </li>

            <li className="nav-item" style={{ backgroundColor: "transparent" }}>
              <a
                className="nav-link me-3 textDark"
                onClick={() => navigate("/contactus")}
              >
                Help
              </a>
            </li>

            <div
              className="dropdown"
              style={{ backgroundColor: "transparent" }}
            >
              <li
                className="nav-item"
                style={{ backgroundColor: "transparent" }}
              >
                <span>
                  <Link
                    className={`nav-link me-3 textDark ${
                      isSticky ? "textDark" : "textWhite"
                    }`}
                    to="/signin"
                  >
                    LOGIN/REGISTER
                  </Link>
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
