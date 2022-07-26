import React from "react";
import DashHeader from "../components/Workspace/DashHeader";
import {
  Background,
  TotalContainer,
  BottomContainer,
  BoardBodyContainer,
  BoardLeftBodyContainer,
  BoardRightBodyContainer,
  HeaderContainer,
  BodyContainer,
  BoardCard,
} from "./common";
import {
  BoardCardLeft,
  BoardCardRight,
  BoardCardTitle,
  BoardCardDesc,
} from "../components/Workspace/common";

function ProfileContainer() {
  return (
    <Background>
      <TotalContainer>
        <BottomContainer>
          <BoardBodyContainer>
            <BoardLeftBodyContainer>
              <HeaderContainer></HeaderContainer>
              <BodyContainer
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                Coming Soon!
              </BodyContainer>
            </BoardLeftBodyContainer>
            <BoardRightBodyContainer>
              <HeaderContainer></HeaderContainer>
              <BodyContainer
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                Coming Soon!
              </BodyContainer>
            </BoardRightBodyContainer>
          </BoardBodyContainer>
        </BottomContainer>
      </TotalContainer>
    </Background>
  );
}

export default ProfileContainer;
