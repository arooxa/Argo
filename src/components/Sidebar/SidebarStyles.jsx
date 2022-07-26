import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100%;
  width: 300px;
  background: #7f8fa6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8%;
  font-size: 40px;
  font-family: "Arvo", serif;
  font-weight: bold;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const SidebarDataContainer = styled.ul`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const SidebarRow = styled.li`
  width: 100%;
  height: 60px;
  //border: 1px solid black;
  list-style-type: none;
  margin: 0%;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  background: ${props => (props.active ? "#293846" : "#7f8fa6")};

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    background: #293846;
  }

  &.id {
    background: #293846;
  }
`;

export const SidebarIconContainer = styled.div`
  flex: 30%;
  display: grid;
  place-items: center;
`;

export const SidebarTitleContainer = styled.div`
  flex: 70%;
`;
