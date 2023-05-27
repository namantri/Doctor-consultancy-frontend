import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div
      style={{ height: "600px", width: "100%" }}
      className="row d-flex align-items-center header-container"
    >
      <div
        className="row d-flex align-items-center justify-content-space-around"
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(4px)",
          height: "600px",
          width: "100%",
        }}
      >
        <div
          className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <h1 style={{ backgroundColor: "transparent" }}>
            Your New Smile <br />
            Starts From Here
          </h1>
          <p
            className="text-secondary"
            style={{ backgroundColor: "transparent" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            eveniet necessitatibus et iusto corrupti minima
          </p>
          <Link
            to="/appointment"
            className="btn btn-primary btn-lg shadow rounded"
          >
            {" "}
            GET STARTED
          </Link>
        </div>
        <div
          className="col-md-6 col-sm-6 col-12 ms-5"
          style={{
            backgroundColor: "transparent",
            height: "50vh",
            width: "50vw",
            marginLeft: "100px",
          }}
        >
          <img
            src="https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg"
            className="img-fluid rounded"
            alt=""
            style={{ height: "100%", width: "auto", marginLeft: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
