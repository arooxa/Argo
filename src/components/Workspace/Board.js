//map of list components
import React, { useRef, useState, useEffect } from "react";
import { BoardBodyContainer, BoardContainer} from "./common";
import BoardHeader from "./BoardHeader";
import Group from "./Group";
import { useNavigate } from "react-router-dom";
//test
const Board = (props) => {
  const [groups, setGroups] = useState([]);
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

  async function getGroups(repeated) {
    try {
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/${props.board.id}/groups`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((result) => setGroups(result));
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
                getGroups(true);
              }
            });
          }
        }
      })
      .catch((error) => navigate("/"));
    } catch(error) {
      console.log(error);
      navigate("/")
    }
    
  }

  useEffect(() => {
    getGroups();
  }, []);


  return (
    <BoardContainer>
      <BoardHeader board={props.board} refresh={getGroups}/>
      <BoardBodyContainer>
          {groups.map((group) => (
            <Group key={group.id} group={group} refresh={getGroups}/>
          ))}
      </BoardBodyContainer>
    </BoardContainer>
  );
};

export default Board;
