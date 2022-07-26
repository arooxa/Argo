import { React, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
  Input,
  FormContainer,
  LoginTitleBox,
  LoginTitleBox2,
  LoginTitleBox3,
  LoginTitleBox4,
  BoldLink,
  LoginAlertBox,
} from "./accountStyles";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { switchToSignUp } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          username: `${usernameRef.current.value}`,
          password: `${passwordRef.current.value}`,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            setError("Invalid Credentials");
          } else {
            res
              .json()
              .then((result) => {
                localStorage.setItem("access_token", result.access_token);
                localStorage.setItem("refresh_token", result.refresh_token);
                console.log(localStorage.getItem("access_token"));
              })
              .then(() => navigate("/dash"));
          }
        })
        .catch((error) => {
          setError("Failed to sign in! Try again later");
        });
    } catch (error) {
      setError("Failed to sign in! Try again later");
    }
    setLoading(false);
  }

  return (
    <>
      <LoginTitleBox>WELCOME BACK TO</LoginTitleBox>
      <LoginTitleBox2>ARGO</LoginTitleBox2>
      <LoginTitleBox3>
        Log in and start making your ideas come to life
      </LoginTitleBox3>
      <FormContainer>
        {error && (
          <LoginAlertBox>{error}</LoginAlertBox>
        )}
        <Input
          type="username"
          ref={usernameRef}
          placeholder="Username"
          required
        />
        <Input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
      </FormContainer>
      <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>
        LOG IN
      </SubmitButton>
      <LoginTitleBox4>
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignUp}>
          {" "}
          Sign Up
        </BoldLink>
      </LoginTitleBox4>
    </>
  );
};

export default Login;
