import React from "react";
import "./GetOffer.css";
const GetOffer = () => {
  return (
    <div className="offerDiv">
      <div className="d-flex justify-content-center align-items-center">
        <div className="offerText">
          <h1 className="offerh1">Summer Offer</h1>
          <h4 className="offerh4">Get 20% Off</h4>
        </div>
      </div>
      <div className="offerImgDiv">
        <img
          src="https://i.ibb.co/51Hxx7W/offer.jpg"
          alt=""
          className="w-100"
        />
      </div>
    </div>
  );
};

export default GetOffer;
