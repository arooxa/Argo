import * as React from "react";
import Display from "../components/Workspace/Display";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const Manage = () => {

  return (
    <Background>
      <Sidebar/>
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
  //border: 5px solid black;
  background: #e9e9e9;
`;


export default Manage;
