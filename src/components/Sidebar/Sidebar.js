//Sidebar should include profile, calendar, search buttons
import * as React from "react";
import { SidebarData } from "./SidebarData";
import { SidebarContainer, SidebarDataContainer, SidebarRow, SidebarIconContainer, SidebarTitleContainer, SidebarHeaderContainer } from "./SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeaderContainer>
        ARGO
      </SidebarHeaderContainer>
      <SidebarDataContainer>
        {SidebarData.map((val, key) => {
          return (
            <SidebarRow key={key} active={window.location.pathname == val.link} onClick={() => {window.location.pathname = val.link}}>
              {" "}
              <SidebarIconContainer>{val.icon}</SidebarIconContainer>{" "}
              <SidebarTitleContainer>{val.title}</SidebarTitleContainer>
            </SidebarRow>
          );
        })}
      </SidebarDataContainer>
      <SidebarDataContainer />
    </SidebarContainer>
  );
};

export default Sidebar;
