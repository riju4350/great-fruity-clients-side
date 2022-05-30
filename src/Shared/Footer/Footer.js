import React from "react";
import "./Footer.css";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    // <div id="contact" className="footerStyle row mx-auto">
    //   <h3 className=" text-center my-5">Contact us </h3>
    //   <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
    //     <div>
    //       <p>Address: New York, USA</p>
    //       <p>Email: xyz@gmail.com</p>
    //       <p>Phone: 01822334455</p>
    //     </div>
    //   </div>
    //   <div div className="col-lg-6 col-sm-12 ">
    //     <form>
    //       <label htmlFor="name">Name: </label>
    //       <input
    //         className="inputStyle"
    //         type="text"
    //         id="name"
    //         placeholder="write you name"
    //       />
    //       <label htmlFor="email">Email: </label>
    //       <input
    //         className="inputStyle"
    //         type="email"
    //         id="email"
    //         placeholder="write you email"
    //       />
    //       <label htmlFor="message">Message: </label>
    //       <textarea
    //         className="inputStyle"
    //         id="message"
    //         placeholder="write you opinion"
    //       />
    //       <button type="submit" className="mt-4 submitBtn">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    //   <h3 className=" text-center mt-5">Follow us</h3>
    //   <div className="d-flex justify-content-center">
    //     <p className="iconsStyle">
    //       <BsFacebook></BsFacebook>
    //     </p>
    //     <p className="iconsStyle">
    //       <BsYoutube></BsYoutube>
    //     </p>
    //     <p className="iconsStyle">
    //       <AiFillTwitterCircle></AiFillTwitterCircle>
    //     </p>
    //     <p className="iconsStyle">
    //       <AiFillInstagram></AiFillInstagram>
    //     </p>
    //   </div>
    //   <p className="text-center mt-3">
    //     &copy; All rights reserved to Great-Grocy 2022
    //   </p>
    // </div>
    <div id="contact" className="footerStyle">
      {/*row mx-auto*/}
      <h3 className=" text-center my-5">Contact us </h3>
      {/* <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
      <div>
        <p>Address: New York, USA</p>
        <p>Email: xyz@gmail.com</p>
        <p>Phone: 01822334455</p>
      </div>
    </div> */}
      <div className="footerWidth">
        <form>
          <label htmlFor="name">Name: </label>
          <input
            className="inputStyle"
            type="text"
            id="name"
            placeholder="write you name"
          />
          <label htmlFor="email">Email: </label>
          <input
            className="inputStyle"
            type="email"
            id="email"
            placeholder="write you email"
          />
          <label htmlFor="message">Message: </label>
          <textarea
            rows="4"
            cols="50"
            maxLength="200"
            className="message"
            id="message"
            placeholder="write you opinion"
          />
          <div className="d-flex justify-content-center">
            <button type="submit" className="mt-4 submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <h3 className=" text-center mt-5">Follow us</h3>
      <div className="d-flex justify-content-center">
        <p className="iconsStyle">
          <BsFacebook></BsFacebook>
        </p>
        <p className="iconsStyle">
          <BsYoutube></BsYoutube>
        </p>
        <p className="iconsStyle">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </p>
        <p className="iconsStyle">
          <AiFillInstagram></AiFillInstagram>
        </p>
      </div>
      <p className="text-center mt-3">
        &copy; All rights reserved to Jack-Tools 2022
      </p>
    </div>
  );
};

export default Footer;
