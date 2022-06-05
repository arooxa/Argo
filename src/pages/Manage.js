import * as React from "react";
import Display from "../components/Display";
import styled from "styled-components";

const Manage = () => {

  return (
    <Background>
      <Display />
    </Background>
  );
};

const Background = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 5px solid black;
`;


export default Manage;
