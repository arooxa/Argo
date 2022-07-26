import { React, useContext, useRef, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Signup from "./Signup";
import {
  LeftBackground,
  RightBackground,
  Background,
  BoxContainer,
  LeftBox,
  LandingTitleBox,
  DescTitleBox,
} from "./accountStyles";

export function AccountBox() {
  const [active, setActive] = useState("signin");

  const switchToSignUp = () => {
    setActive("signup");
  };
  const switchToSignIn = () => {
    setActive("signin");
  };

  const contextValue = { switchToSignUp, switchToSignIn };

  return (
    <AuthContext.Provider value={contextValue}>
      <Background>
        <LeftBackground>
          <LeftBox>
            <LandingTitleBox>ARGO</LandingTitleBox>
            <DescTitleBox>Project Management Software</DescTitleBox>
          </LeftBox>
        </LeftBackground>
        <RightBackground>
          <BoxContainer>
            {active === "signin" && <Login />}
            {active === "signup" && <Signup />}
          </BoxContainer>
        </RightBackground>
      </Background>
    </AuthContext.Provider>
  );
}
