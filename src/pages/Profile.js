import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

function Profile() {
    return (
        <div>
            <Sidebar/>
            <h1>This is Profile Page</h1>
        </div>
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
  border: 5px solid black;
  background: white;
`;

export default Profile
