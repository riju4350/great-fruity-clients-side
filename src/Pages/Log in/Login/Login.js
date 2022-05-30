import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
// import axios from "axios";
import useToken from "../../../Hooks/useToken";
import "./Login.css";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorMessage;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);
  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorMessage = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  // container w-25 mx-auto loginResponsive" style={{ margin: "50px auto" }}
  return (
    <div>
      <div className="login mx-auto">
        <PageTitle title="Login"></PageTitle>
        <h2 className="text-center mt-2" style={{ color: "#30B030" }}>
          Please Login
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button
            variant="w-50 mx-auto d-block mb-2"
            style={{
              background: "#30B030",
              color: "white",
              fontWeight: "500",
              padding: "10px 30px",
            }}
            type="submit"
          >
            Login
          </Button>
        </Form>
        {errorMessage}
        <p className="mt-3">
          Haven't Register Yet?{" "}
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>{" "}
        </p>
        <p>
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>{" "}
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
