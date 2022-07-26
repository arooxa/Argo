//needs boards
import React, { useState, useEffect, useContext, useRef } from "react";
import {
  BottomContainer,
  DashboardContainer,
  BoardCard,
  LeftDashContainer,
  RightDashContainer,
  DashProjectsContainer,
  DashCalendarContainer,
  DashCompHeader,
  DashHeaderLeft,
  DashHeaderRight,
  DashBody,
  BlockContainer,
  Block,
  BlockLeft,
  BlockMiddle,
  BlockRight,
  BlockTitle,
  BlockDesc,
  BoardCardLeft,
  BoardCardRight,
  BoardCardTitle,
  BoardCardDesc,
} from "./common";
import DashHeader from "./DashHeader";
import { DisplayContext } from "./DisplayContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../images/gahag-muser8.svg";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState();
  const titleRef = useRef();
  const navigate = useNavigate();

  function getCurrentUser() {
    var token = localStorage.getItem("access_token");
    var decoded = jwt_decode(token);
    const currentUser = decoded.sub;
    setUser(currentUser);
  }
  
  async function refreshToken() {
    console.log("refreshing");
    try {
      fetch("http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/auth/refresh", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
        },
      }).then((res) => {
        return res;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getBoards(repeated) {
    try {
      fetch("http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/getAll", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            res.json().then((result) => setBoards(result));
          } else {
            if (refreshToken().status !== 200) {
              localStorage.clear();
              navigate("/");
              return;
            } else {
              res.json().then((result) => {
                localStorage.setItem("access_token", result.access_token);
                localStorage.setItem("refresh_token", result.refresh_token);
                if (repeated) {
                  console.log("tried twice and failed");
                  localStorage.clear();
                  navigate("/");
                  return;
                } else {
                  getBoards(true);
                }
              });
            }
          }
        })
        .catch((error) => navigate("/"));
    } catch (error) {
      console.log(error);
      navigate("/")
    }
  }

  useEffect(() => {
    getCurrentUser();
    getBoards();
  }, []);

  const { switchToBoard } = useContext(DisplayContext);

  return (
    <DashboardContainer>
      <DashHeader refresh={getBoards}/>
      <BlockContainer>
        <Block>
          <BlockRight>
            <ReactLogo />
          </BlockRight>
          <BlockLeft>
            <BlockTitle>Hi, {user}!</BlockTitle>
            <BlockDesc>
              Check out some of our new features to find out how to make Argo
              work for you
            </BlockDesc>
          </BlockLeft>
        </Block>
      </BlockContainer>
      <BottomContainer>
        <LeftDashContainer>
          <DashProjectsContainer>
            <DashCompHeader>
              <DashHeaderLeft>Project Overview</DashHeaderLeft>
              <DashHeaderRight>View all</DashHeaderRight>
            </DashCompHeader>
            <DashBody>
              {boards.slice(0,4).map((board) => (
                <BoardCard key={board.id} onClick={() => switchToBoard(board)}>
                  <BoardCardLeft>
                    <BoardCardTitle>{board.board_name}</BoardCardTitle>
                    <BoardCardDesc>{board.numTasks + " "}Tasks - Last edit yesterday</BoardCardDesc>
                  </BoardCardLeft>
                  <BoardCardRight></BoardCardRight>
                </BoardCard>
              ))}
            </DashBody>
          </DashProjectsContainer>
        </LeftDashContainer>
        <RightDashContainer>
          <DashCalendarContainer>
            <DashCompHeader>
              <DashHeaderLeft>Calendar</DashHeaderLeft>
              <DashHeaderRight>See more</DashHeaderRight>
            </DashCompHeader>
            <DashBody></DashBody>
          </DashCalendarContainer>
        </RightDashContainer>
      </BottomContainer>
    </DashboardContainer>
  );
};

export default Dashboard;