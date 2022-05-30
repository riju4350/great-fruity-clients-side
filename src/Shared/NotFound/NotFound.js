import React from "react";
// import image from "https://i.ibb.co/rMFkQRV/404-img.png";
import image from "../../images/404_img.png";
const NotFound = () => {
  return (
    <div className="w-75 mx-auto">
      <img src={image} alt="not found" className="w-100" />
    </div>
  );
};

export default NotFound;
