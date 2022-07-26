import { React, useContext, useRef, useState } from "react";
import styled from "styled-components";
import {
  SubmitButton,
  Input,
  FormContainer,
  LoginTitleBox,
  LoginTitleBox2,
  LoginTitleBox3,
  LoginTitleBox4,
  BoldLink,
  LoginAlertBox
} from "./accountStyles";
import { AuthContext } from "./AuthContext";

const Signup = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { switchToSignIn } = useContext(AuthContext);

  async function handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
    const userObject = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/auth/signup`, {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObject),
      }).then((res) => {
        if(res.status === 200) {
          switchToSignIn();
        } else {
          res.text().then((result) => setError(result))
        }
      }).catch((error) => {
        console.log(error)
        setError("Failed to register! Please try again later");
      });
    } catch (error) {
      console.log(error);
      setError("Failed to register! Please try again later");
    }
    setLoading(false);
  }

  return (
    <>
      <LoginTitleBox>WELCOME TO</LoginTitleBox>
      <LoginTitleBox2>ARGO</LoginTitleBox2>
      <LoginTitleBox3>
        Sign up now to start making your ideas come to life
      </LoginTitleBox3>
      <FormContainer>
      {error && (
          <LoginAlertBox>{error}</LoginAlertBox>
        )}
        <Input
          type="First Name"
          ref={firstNameRef}
          placeholder="First Name"
          required
        />
        <Input
          type="Last Name"
          ref={lastNameRef}
          placeholder="Last Name"
          required
        />
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
        SIGN UP
      </SubmitButton>
      <LoginTitleBox4>
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToSignIn}>
          {" "}
          Log In
        </BoldLink>
      </LoginTitleBox4>
    </>
  );
};

export default Signup;
