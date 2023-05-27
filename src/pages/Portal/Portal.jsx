import React, { useState } from "react";
import "./portal.css";
import "./header.css";
//import ListItem from "../listItem/ListItem";
import Navbar from "../NavbarPortal/Navbar";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
// import { Carousel } from "bootstrap"
import Carousel from "./Carousel";
import HeaderTop from "./HeaderTop";
export default function Portal() {
  const location = useLocation();
  console.log(location);
  const name1 = new URLSearchParams(location.search).get("name");

  console.log(name1);
  return (
    <div>
      <header>
        <Navbar name={name1} />
        <HeaderTop></HeaderTop>
      </header>
      <div id="services">
        {/* <div class="box">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
              alt="Instant Video Consultation"
              class="card_img"
            />

            <hr />
            <h2 class="h-secondary center">Instant Video Coansultation</h2>
            <p class="center">Connect within 60secs.</p>
          </div>
          <div class="box">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
              alt="Find Doctors Near You"
              class="card_img"
            />
            <hr />
            <h2 class="h-secondary center">Find Doctors Near You</h2>
            <p class="center">Confirmed Appointments.</p>
          </div>
          <div class="box">
            <img
              src="data:image/jpeg;base64,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"
              alt="Medicines"
              class="card_img"
            />
            <hr />
            <h2 class="h-secondary center">Medicines</h2>
            <p class="center">Essentials at your doorsteps.</p>
          </div> */}

        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div class="col-md-3">
            <div class="card card-01 shadow">
              <img
                class="card-img-top"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <span class="badge-box">
                  <i class="fa fa-check"></i>
                </span>
                <h4 class="card-title">Instant Video Coansultation</h4>
                <p class="card-text">Connect within 60secs.</p>
                <a href="#" class="btn btn-default text-uppercase">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card card-01 shadow">
              <img
                class="card-img-top"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <span class="badge-box">
                  <i class="fa fa-check"></i>
                </span>
                <h4 class="card-title">Find Doctors Near You</h4>
                <p class="card-text">Confirmed Appointments.</p>
                <a href="#" class="btn btn-default text-uppercase">
                  Explore
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card card-01 shadow">
              <img
                class="card-img-top"
                src="data:image/jpeg;base64,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"
                alt="Card image cap"
              />
              <div class="card-body">
                <span class="badge-box">
                  <i class="fa fa-check"></i>
                </span>
                <h4 class="card-title">Medicines</h4><br></br>
                <p class="card-text">Essentials at your doorsteps</p>
                <a href="#" class="btn btn-default text-uppercase">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      &nbsp; &nbsp;
      <div class="lines">
        <h2 class="u-font--24 u-margin--0 u-font--bold u-margin--15__top">
          Consult top doctors online for any health concern
        </h2>
        <div class="u-t-c--black_1 u-font--14 u-margin--5__top">
          Private online consultations with verified doctors in all specialists
        </div>
        <hr />
      </div>
      <div class="consult">
        <div class="boxx1">
          <img
            src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
            alt="Acne, pimple or skin issues"
            class="card_img"
          />
          <h2 height="12px">Acne, pimples or skin issues</h2>
          <a href="#">Consult Now</a>
        </div>
        <div class="boxx1">
          <img
            src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
            alt="Cold, cough or fever"
            class="card_img"
          />
          <h2>Cold, cough or fever</h2>
          <a href="#">Consult Now</a>
        </div>
        <div class="boxx1">
          <img
            src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
            alt="Child not feeling well"
            class="card_img"
          ></img>
          <h2>Child not feeling well</h2>
          <a href="#">Consult Now</a>
        </div>
        <div class="boxx1">
          <img
            src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
            alt="Depression or anxiety"
            class="card_img"
          ></img>
          <h2>Depression or anxiety</h2>
          <a href="#">Consult Now</a>
        </div>
        <div class="boxx1">
          <img
            src="https://media.istockphoto.com/id/1326201883/vector/boy-rubs-his-face-with-his-hand-conjunctivitis-in-child-inflammation-and-injury-of-eye.jpg?s=612x612&w=0&k=20&c=-YGZvJHcNzkZjjvuT20NTabY1OkflF5cU980-pNXAsY="
            alt="Depression or anxiety"
            class="card_img"
          ></img>
          <h2>Eye irritation or issues</h2>
          <a href="#">Consult Now</a>
        </div>
        <div class="boxx1">
          <img
            src="https://media.istockphoto.com/id/1256419680/vector/woman-with-of-earache.jpg?s=612x612&w=0&k=20&c=BJla7sUIZ0eMhG13gpkwHqjNLJtR_uh-hhoONXV7eaE="
            alt="Depression or anxiety"
            class="card_img"
          ></img>
          <h2>Ear, Nose or Teeth issue</h2>
          <a href="#">Consult Now</a>
        </div>
      </div>
      <div class="space"></div>
      <div class="lines">
        <h2 class="u-font--24 u-margin--0 u-font--bold u-margin--15__top">
          Book an appointment for an in-clinic consultation
        </h2>
        <div class="u-t-c--black_1 u-font--14 u-margin--5__top">
          Find experienced doctors across all specialties
        </div>
        <hr />
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Slider />
      <Footer />
    </div>
  );
}
