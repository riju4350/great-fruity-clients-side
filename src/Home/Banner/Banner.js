import React from "react";
// import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="home"
      // className="d-flex justify-content-evenly align-items-center pt-5"
      className="row m-5"
    >
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
        <div>
          <h1>Live Organic For Live Healthy</h1>
          <h4>Buy fresh fruits and vegitables here</h4>
          <button className="headerBtn mt-4">Get yours</button>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <img
          src="https://i.ibb.co/48fD9hS/banner2.png"
          alt=""
          className="w-100 mt-5"
        />
      </div>
    </div>
  );
};

export default Banner;
