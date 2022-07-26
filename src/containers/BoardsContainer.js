import React, { useState, useEffect, useContext, useRef } from "react";
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
  BoardCardLeft,
  BoardCardRight,
  BoardCardTitle,
  BoardCardDesc,
} from "./common";
import { useNavigate } from "react-router-dom";
import { BoardsPageContext } from "./BoardsPageContext";

function BoardsContainer() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      navigate("/");
    }
  }

  useEffect(() => {
    getBoards();
  }, []);

  const { switchToBoard } = useContext(BoardsPageContext);

  return (
    <Background>
      <TotalContainer>
        <DashHeader refresh={getBoards} />
        <BottomContainer>
          <BoardBodyContainer>
            <BoardLeftBodyContainer>
              <HeaderContainer>My Projects</HeaderContainer>
              <BodyContainer>
                {boards.map((board) => (
                  <BoardCard
                    key={board.id}
                    onClick={() => switchToBoard(board)}
                  >
                    <BoardCardLeft>
                      <BoardCardTitle>{board.board_name}</BoardCardTitle>
                      <BoardCardDesc>
                        {board.numTasks + " "}Tasks - Last edit yesterday
                      </BoardCardDesc>
                    </BoardCardLeft>
                    <BoardCardRight></BoardCardRight>
                  </BoardCard>
                ))}
              </BodyContainer>
            </BoardLeftBodyContainer>
            <BoardRightBodyContainer>
              <HeaderContainer>Invited Projects</HeaderContainer>
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

export default BoardsContainer;
