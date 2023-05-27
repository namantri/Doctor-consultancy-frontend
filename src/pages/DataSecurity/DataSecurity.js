import React from "react";
import "./datasecurity.css";
import "bootstrap/dist/css/bootstrap.min.css";
function DataSecurity() {
  return (
    <div
      className="body"
      style={{
        backgroundColor: "white",
        fontSize: "20px",
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "rgb(0, 0, 0)",
      }}
    >
      <h1>Trust:the foundation on which E-consult is built</h1>
      <div class="h1">
        <div class="left-container">
          <h1>Your data has only one owner</h1>
          <h2>You!!</h2>
          <span class="left-container-para">
            <p>&#10003; E-consult does not have access to your data</p>
            <p>
              {" "}
              &#10003; E-consult does not sell or share your data with any third
              party{" "}
            </p>
            <p> &#10003; E-consut follows stringent policies </p>
          </span>
          <br />
          <div class="img-bin">
            <div class="img-text">
              <img
                alt="256-bit encryption"
                title="256-bit encryption"
                src="https://www.practo.com/providers/static/images/pages/company/256.png"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <p>254-Bit</p>
              <p>Encryption</p>
            </div>
            <div class="img-text">
              <img
                class=""
                alt="ISO 27001"
                title="ISO 27001"
                src="https://www.practo.com/providers/static/images/pages/company/iso.png"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <p>254-Bit</p>
              <p>Encryption</p>
            </div>
            <div class="img-text">
              <img
                class=""
                alt="HIPAA compliant data centers"
                title="HIPAA compliant data centers"
                src="https://www.practo.com/providers/static/images/pages/company/hipaa.png"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <p>254-Bit</p>
              <p>Encryption</p>
            </div>
          </div>
        </div>
        <div class="right-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eRLmerDaKsv2tqYkvpK_uwYo85IyjHLX9w&usqp=CAU" />
        </div>
      </div>
      <div class="h2">
        <div class="h2-leftContainer">
          <img
            class="size60"
            alt="secure platform"
            title="secure platform"
            src="https://www.practo.com/providers/static/images/pages/company/providers.png"
          />
        </div>

        <div class="h2-rightContainer">
          <h1>Secure platform for healthcare providers</h1>
          <br />
          <p>Each E-consult product is designed to</p>
          <p>protect data security and privacy</p>
        </div>
      </div>

      <div class="h3">
        <div class="h3-left">
          <h1>Secure place for your health data</h1>
          <p>Keeping your data safe is the core of every decision we</p>{" "}
          <p>make at Practo</p>
        </div>
        <div class="h3-right">
          <img
            src="https://www.dresnergroup.com/images/easyblog_shared/August_2018/8-20-18/b2ap3_large_email_security_encryption_400.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default DataSecurity;
