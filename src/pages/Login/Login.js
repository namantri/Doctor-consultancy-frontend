import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";
import TextField from "@mui/material/TextField";

function Login() {
  const navigate = useNavigate();

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const handleEmailChange = (value) => {
    SetEmail(value);
  };
  const handlePasswordChange = (value) => {
    SetPassword(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some fields are empty",
      });

      return;
    }

    const data = {
      email: Email,
      password: Password,
    };

    const url = "http://localhost:5269/api/Auth/SignIn";
    axios
      .post(url, data)
      .then((result) => {
        //alert(result.data.message);

        if (result.data.message == "Login Failed") {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Login Failed",
          });
          navigate("/signin");
        } else {
          swal.fire("", "Login Successfull !", "success");
          console.log(result.data.nametag);
          console.log(result.data.id);
          // navigate("/", { state });
          console.log(result.data.role);
          if (result.data.role === "Doctor") {
            if (result.data.isApproved == 1) {
              navigate(
                `/approved?name=${result.data.nametag}&&id=${result.data.id}&&role=${result.data.role}`
              );
            } else {
              navigate(
                `/doc?name=${result.data.nametag}&&id=${result.data.id}&&role=${result.data.role}`
              );
            }
          } else {
            navigate(
              `/?name=${result.data.nametag}&&id=${result.data.id}&&role=${result.data.role}`
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    // <section className="vh-100">

    //   <div className="container-fluid h-custom">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    //         <div className="card ">
    //           <div class="card- body p-5 text center">
    //             <form>
    //               {/* <div> */}
    //               <div className="d-flex flex-row align-items-center justify-content-center ">
    //                 <p className="lead fw-normal mb-0 me-3">Sign In</p>
    //               </div>
    //               <br />

    //               {/* <button className="loginBtn loginBtn--facebook">
    //                   Login with Facebook
    //                 </button>

    //                 <button className="loginBtn loginBtn--google">
    //                   Login with Google
    //                 </button>
    //               </div>

    //               <div className="divider d-flex align-items-center my-4">
    //                 <p className="text-center fw-bold mx-3 mb-0">Or</p>
    //               </div> */}

    //               <div className="form-outline mb-4">
    //                 <input
    //                   type="email"
    //                   id="form3Example3"
    //                   className="form-control form-control-lg"
    //                   required
    //                   placeholder="Enter a valid email"
    //                   onChange={(e) => handleEmailChange(e.target.value)}
    //                 />
    //                 <label className="form-label" for="form3Example3">
    //                   Email
    //                 </label>
    //               </div>

    //               <div className="form-outline mb-3">
    //                 <input
    //                   type="password"
    //                   id="form3Example4"
    //                   className="form-control form-control-lg"
    //                   required
    //                   placeholder="Enter password"
    //                   onChange={(e) => handlePasswordChange(e.target.value)}
    //                 />
    //                 <label className="form-label" for="form3Example4">
    //                   Password
    //                 </label>
    //               </div>

    //               <div className="d-flex justify-content-between align-items-center">
    //                 <div className="form-check mb-0">
    //                   <input
    //                     className="form-check-input me-2"
    //                     type="checkbox"
    //                     value=""
    //                     id="form2Example3"
    //                   />
    //                   <label className="form-check-label" for="form2Example3">
    //                     Remember me
    //                   </label>
    //                 </div>
    //                 <a href="#!" className="text-body">
    //                   Forgot password?
    //                 </a>
    //               </div>

    //               <div className="text-center text-lg-start mt-4 pt-2">
    //                 <button
    //                   type="submit"
    //                   className="btn btn-primary"
    //                   onClick={(e) => handleSave(e)}
    //                 >
    //                   Login
    //                 </button>
    //                 <p className="small fw-bold mt-2 pt-1 mb-0">
    //                   Don't have an account?{" "}
    //                   <a
    //                     href="#!"
    //                     className="link-danger"
    //                     onClick={() => navigate("/signup")}
    //                   >
    //                     Register
    //                   </a>
    //                 </p>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="login-container">
      <article class="form-container login">
        <div class="intro">
          <h1>Welcome Back</h1>
          <p>Welcome Back, Please Enter Your details</p>
        </div>

        <form onsubmit="return false;" class="form-login login">
          <div class="email-input">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Email Address</p>
              <input type="email" name="usermail" id="email" />
            </div>
          </div>

          <div class="email-input">
            <i class="fa fa-key" aria-hidden="true"></i>
            <span id="seperator"></span>
            <div class="input-container">
              <p class="sub-title">Password</p>
              <input type="password" name="userpass" id="password" />
            </div>
          </div>

          <button id="submit">Login</button>
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
}

export default Login;
