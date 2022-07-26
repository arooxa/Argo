import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import BoardsDisplayContainer from '../containers/BoardsDisplayContainer';

function Boards() {
    return (
        <Background>
            <Sidebar/>
            <BoardsDisplayContainer />
        </Background>
    )
}


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

export default Boards
