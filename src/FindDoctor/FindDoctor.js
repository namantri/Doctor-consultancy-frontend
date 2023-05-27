import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./finddoctor.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/NavbarPortal/Navbar";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function FindDoctor() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const id = new URLSearchParams(location.search).get("id");
  const role = new URLSearchParams(location.search).get("role");

  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [search, SetSearch] = useState([]);
  const handleSearchChange = (value) => {
    SetSearch(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5269/api/Doctor");
        setData(response.data); // Set the fetched data in the state
      } catch (error) {
        console.error(error); // Handle the error
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const response = axios.get(
      `http://localhost:5269/api/Patient/DoctorsList?DoctorSearch=${search}`
    );
    SetSearch(response.data); // Set the fetched data in the state
    console.log(SetSearch);
  };

  return (
    <div>
      <Navbar />
      <body
        style={{
          backgroundImage:
            "url(https://www.practostatic.com/web-assets/home/assets/images/homepage.06859593240c3efd483fe48951cfe6ff.svg)",

          height: "300px",
        }}
      >
        <div class="input-box">
          <input
            type="text"
            placeholder="Search for a doctor"
            required
            onChange={(e) => handleSearchChange(e.target.value)}
            style={{
              position: "absolute",
              height: "50px",
              width: "30%",
              outline: "none",
              fontSize: "1rem",
              marginTop: "8px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "0 15px",
              marginTop: "150px",
              marginLeft: "450px",
            }}
          />
          <button
            type="button"
            class="btn btn-warning"
            style={{
              position: "absolute",
              marginTop: "150px",
              marginLeft: "900px",
              height: "50px",
            }}
            onClick={(e) => handleSearch(e)}
          >
            search
          </button>
        </div>
      </body>
      {data ? (
        <ul>
          {data.map((item) => (
            <div class="ViewDoctor-container">
              <div class="Mainview-content">
                {item.image ? (
                  <img src={item.image} alt="" />
                ) : (
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEUiLTqzusC2vcO6wcccKDYfKjgTITAWIzIZJjSss7kRHy8AFyhbY2wLHCyZoKcrNUFMVF6iqrCCiZEAEiY2P0uTmqE9RlFnb3h2fYVsdHwwOkZTW2RHT1l8g4thaXKJkJhg8Gt6AAAD+0lEQVR4nO2a23aqMBCGIecghINCAWl9/7fcgWqrVkOGZnCvvfkvXN7xrT+TmSQzUbRp06ZNmzZt2rTpXxdnIttlYvph/AXfF6wvuqo2VnXVFT0T61KwLG+NppSSSfaPNl2UsPUA9kdjvx7fyHLUxX4dJ7gYSnL3/TMFMY1YgYCx9/ghwAQRtwrdCJWX9BnAKGo4ckSI4fEaXBtxkKgEx+eL8MWgC0QGNehZgpGhQVsLHvkQjAxoMZkZLwLLUGc4BOLNuReuRVOUcOC99iWIY91jLEVWeZtgbagQloI3/gCjEGxI3j1j8VOkDV8t9oBIGBH0PjQBKwCRMIoGz08Stg7jSoTel8w3LX0hGBUYIYKFgpUODMB7YCjYYAi8LdURjlCEjUfpXx++EN7CxqPo4Ahd2OSULEBok6AIS1wInKKXxELghViyIz7ChiNv4AhD2E3Jc2B+Dp+a/oIEHan65WVKtsBgQCjWA/TIEjgaI/DBLY53oQns8RVkA0E4xbMB5AEJXKoned8oJwKDcasE5WiaBj85juL+NhCD88Kg/K8StEAxwW4K3wyJ9r4Q8Wj+pWkiiPGepGXqh4DzwPGpzCc/0SrsofFO8jTLQGvUd0dbKuoZBmqC3+rvxJWbgdb43RHOXGtBT6v0Z7L0vhdxEaEpVkK4k+zrRxCE1j1yJH6LqeOPrgghZcrW6wxZI2Q69obI5fOUmlSuZsFZahelldGaEK1NlfIdUmFyiiupotxq/POCPuU3yCs/vmnTtfik13x5HBxIeJT3VnZbJtMAwVosXAmRN0VXmbLUZ5Wlqbqi6ZnATxBMJvmxNZrQ7/R8SdE0HtNknkjESsGT/dAa8mNu4IaElO2wT3C8kKJpbUWYbxjbqvE+INQsGaUm9r9NxSaNAj9Bq658bv9DL2jZsXCHeSFbfwOurWhlmAdYpj78uuUPrNBvPMAxQjRmPgSfO2GG3xrBsxYWAz+MoO3vZo3EwSwIgjsjyuYXYSlSv9v8jBFxungxFvRBHmtxg2YHmRaYYTgtuWVx0CPfnIiBlw337RUuWoNPE0m4VTgznIAxuYO9OHsxVKCHcfERnGBs3wJ8YIfwAFYEMFWhQm6GK4TSGwE0PgSR96gRK3AArMjRr3bvS5RlmBBKr10hMXbDRX5DDWrpGclL2iMiF/ToIfKyAS8SRpFyfhngUwIwzXetdtDeNFTEzGwKjpOab3RwV231hmyCtWEmIHc41eEGYWYlMnQCG5DOQgGealyE4Gxni3YFF9wzqRJ7S04ItSszcNzUeJZ70AY8t7NI+fPMwPs1TLBnyOcIrFkFwbUlwGM7CxEcxzf0MnlGcBRLla6D4JgBXAvBUaj+W4Q/eLY3FVG6AH0AAAAASUVORK5CYII="
                    alt=""
                  />
                )}

                <div class="Leftview-content">
                  <p>{item.name}</p>
                  <div class="doc-specialist">
                    <ul>
                      <li>Total Experience : {item.totalExperience}</li>
                    </ul>
                    <ul>
                      <li>Specialization : {item.specialization}</li>
                    </ul>
                  </div>
                </div>
                <div class="Controlview-Btn">
                  <button type="button" class="btn btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default FindDoctor;
