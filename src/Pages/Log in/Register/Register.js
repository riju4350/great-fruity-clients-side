import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorMessage;
  let updateErrorMessage;
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate("/home");
  }

  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (updateError) {
    updateErrorMessage = (
      <p className="text-danger">Error: {updateError?.message}</p>
    );
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
  };
  return (
    <div className="register-form ">
      <h2 style={{ textAlign: "center", color: "#30b030", fontWeight: "600" }}>
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`ps-2 ${agree ? "checkText2" : "checkText"}`}
          htmlFor="terms"
        >
          Accept Our Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-primary mt-2"
          style={{ background: "#30b030" }}
          type="submit"
          value="Register"
        />
        {errorMessage}
        {updateErrorMessage}
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
