// import React from "react";
// import "./registration.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import RegistrationDoctor from "../RegistrationDoctor/RegistrationDoctor";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from 'axios';
// import swal from "sweetalert2";

// function Registration() {
//   const navigate = useNavigate();
//   const [Name, SetName] = useState('');
//   const [Email, SetEmail] = useState('');
//   const [Password, SetPassword] = useState('');
//   const [ConfirmPassword, SetConfirmPassword] = useState('');
//   const [Role, SetRole] = useState('');

//   const handleNameChange = (value) => {
//     SetName(value);

//   }
//   const handleEmailChange = (value) => {

//     SetEmail(value);

//   }
//   const handlePasswordChange = (value) => {
//     SetPassword(value);

//   }
//   const handleConfirmPasswordChange = (value) => {
//     SetConfirmPassword(value);

//   }
//   const handleRoleChange = (value) => {
//     SetRole(value);

//   }

//   const checkRole = () => {

//     navigate("/registrationpatient");

//   }

//   const handleSave = () => {
//     if (!Name || !Email || !Password || !Role || !ConfirmPassword) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Some fields are empty',

//       })
//       navigate("/signup");
//     } else if (Password != ConfirmPassword) {
//       swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Password and Confirm Password does not match',

//       })
//       navigate("/signup");

//     }
//     else {
//       const data = {
//         name: Name,
//         email: Email,
//         password: Password,
//         role: Role

//       };
//       const url = 'http://localhost:5269/api/Auth/SignUp';
//       axios.post(url, data).then((result) => {
//         //alert(result.data.message);
//         if (result.data.message == "User already exists") {
//           swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'User already exists',

//           })
//           navigate("/signup");
//         } else if (result.data.message == "Something went wrong") {
//           swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong',

//           })
//           navigate("/signup");
//         } else if (result.data.message == "Successful") {
//           swal.fire(
//             'Good job!',
//             'Registration Successfull !',
//             'success'
//           )

//           navigate("/signin")
//         } else if (result.data.message == "Invalid Email Address") {
//           swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Email address is invalid',

//           })
//         }

//       })
//         .catch((error) => {
//           console.log(error);
//         })
//     }
//   }
//   return (
//     // <
//     <div className="main__div">
//       {" "}
//       <div class="card">
//         <div class="card-body">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWM3myFcMZVVWZibKGnlk8Qe1tDQ2aBw39FbsAJjKM2XLD3uO4l0ey1yVLb0D9cXQKN0&usqp=CAU"
//             class="image-fluid"
//             alt="image"
//           ></img>
//           <h2 class="text-uppercase text-center mb-5">Create an account</h2>

//           <form>
//             <div class="form-outline mb-4">
//               <label class="form-label " for="form3Example1cg">
//                 Enter Your Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 id="form3Example1cg"
//                 class="form-control form-control-lg" onChange={(e) => handleNameChange(e.target.value)}
//                 value={Name.form3Example1cg}
//               />
//             </div>
//             <div class="form-outline mb-4">
//               <label class="form-label" for="form3Example3cg">
//                 Enter Your Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 id="form3Example3cg"
//                 class="form-control form-control-lg" onChange={(e) => handleEmailChange(e.target.value)}
//                 value={Email.form3Example3cg}
//               />
//             </div>
//             <div class="form-outline mb-4">
//               <label class="form-label" for="form3Example4cg">
//                 Enter Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 id="form3Example4cg"
//                 class="form-control form-control-lg" onChange={(e) => handlePasswordChange(e.target.value)}
//                 value={Password.form3Example4cg}
//               />
//             </div>
//             <div class="form-outline mb-4">
//               <label class="form-label" for="form3Example4cdg">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Re-enter Password"
//                 id="form3Example4cdg"
//                 class="form-control form-control-lg"
//                 onChange={(e) => handleConfirmPasswordChange(e.target.value)}
//               />
//             </div>
//             <label class="form-label" for="form3Example4cdg">
//               Role
//             </label>
//             <div class="form-check">
//               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Patient" onChange={(e) => handleRoleChange(e.target.value)} />
//               <label class="form-check-label" for="flexRadioDefault1">
//                 Patient
//               </label>
//             </div>
//             <div class="form-check">
//               <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Doctor" onChange={(e) => handleRoleChange(e.target.value)} />
//               <label class="form-check-label" for="flexRadioDefault2">
//                 Doctor
//               </label>
//             </div>
//             <br />
//             <div class="form-check d-flex justify-content-center mb-5">
//               <input
//                 class="form-check-input me-2"
//                 type="checkbox"
//                 value=""
//                 id="form2Example3cg"
//               />
//               <label class="form-check-label" for="form2Example3g">
//                 I agree all statements in{" "}
//                 <a href="#!" class="text-body">
//                   <u>Terms of service</u>
//                 </a>
//               </label>
//             </div>
//             <div class="d-flex justify-content-center">
//               <button
//                 type="button"
//                 class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
//                 onClick={() => handleSave()}>
//                 Register
//               </button>
//             </div>
//             <p class="text-center text-muted mt-5 mb-0">
//               Have already an account? {" "}
//               <a
//                 href="#!"
//                 class="fw-bold text-body"
//                 onClick={() => navigate("/signin")}
//               >
//                 <u>Login here</u>
//               </a>
//             </p>
//             &nbsp;
//             <p className="nextoption">

//               Patient? To complete registration{" "}
//               <a href="" onClick={() => checkRole()}>
//                 click here
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;
import React from "react";
import "./registration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationDoctor from "../RegistrationDoctor/RegistrationDoctor";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
const Registration = () => {
  const navigate = useNavigate();
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const [Role, SetRole] = useState("");

  const handleNameChange = (e) => {
    SetName(e.target.value);
  };
  const handleEmailChange = (e) => {
    SetEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    SetPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    SetRole(e.target.value);
  };

  const checkRole = () => {
    navigate("/registrationpatient");
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!Name || !Email || !Password || !Role) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some fields are empty",
      });
      navigate("/signup");
    } else {
      const data = {
        name: Name,
        email: Email,
        password: Password,
        role: Role,
      };
      const url = "http://localhost:5269/api/Auth/SignUp";
      axios
        .post(url, data)
        .then((result) => {
          //alert(result.data.message);
          if (result.data.message == "User already exists") {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "User already exists",
            });
            navigate("/signup");
          } else if (result.data.message == "Something went wrong") {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong",
            });
            navigate("/signup");
          } else if (result.data.message == "Successful") {
            swal.fire("Good job!", "Registration Successfull !", "success");

            navigate("/signin");
          } else if (result.data.message == "Invalid Email Address") {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email address is invalid",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <section class="login-container">
      <article class="form-container">
        <div class="intro">
          <h1>Create Account</h1>
          <p>Enter your personal details and start journey with us</p>
        </div>

        <form onSubmit={handleSave} class="form-login">
          <div class="email-input">
            <i class="fa-solid fa-user"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Name</p>
              <input
                type="text"
                name="name"
                id="name"
                value={Name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div class="email-input">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Email Address</p>
              <input
                type="email"
                name="usermail"
                id="email"
                value={Email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <div class="email-input">
            <i class="fa fa-key" aria-hidden="true"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Password</p>
              <input
                type="password"
                name="userpass"
                id="password"
                value={Password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div class="email-input">
            <i class="fa-solid fa-user"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Role</p>
              <div onChange={handleRoleChange}>
                <input
                  type="radio"
                  id="doctor"
                  name="role"
                  value="doctor"
                  style={{ marginRight: "20px" }}
                  checked
                />
                <label for="doctor" style={{ marginRight: "30px" }}>
                  Doctor
                </label>

                <input
                  type="radio"
                  id="patient"
                  name="role"
                  value="patient"
                  style={{ marginRight: "20px" }}
                />
                <label for="patient">Patient</label>
              </div>
            </div>
          </div>

          <button id="submit">Register</button>
          <p className="nextoption">
            Patient? To complete registration{" "}
            <a href="" onClick={() => checkRole()}>
              click here
            </a>
          </p>
        </form>

        <article class="outro">
          <div class="ending">
            <p>Or Continue With</p>
          </div>

          <div class="socials">
            <a class="social-btn" href="" id="g-btn">
              <p>Google</p>
            </a>
            <a class="social-btn" href="" id="a-btn">
              <p>Apple</p>
            </a>
            <a class="social-btn" href="" id="fb-btn">
              <p>Facebook</p>
            </a>
          </div>
        </article>
      </article>
      <article class="login-side-bg"></article>
    </section>
  );
};

export default Registration;
