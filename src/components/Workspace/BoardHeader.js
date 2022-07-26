//map of list components
import React, { useState, useEffect, useRef } from "react";
import {
  BoardHeaderBottomContainer,
  BoardHeaderContainer,
  BoardHeaderQuad1,
  BoardHeaderQuad2,
  BoardHeaderQuad3,
  BoardHeaderQuad4,
  BoardHeaderTopContainer,
  BoardTitleText,
  BoardDescText,
  AddGroup,
  BoardSearch,
  DelBoard
} from "./common";
import EditableInput from "./EditableInput";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TableChartIcon from "@mui/icons-material/TableChart";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BoardHeader = (props) => {
  const [name, setName] = useState(props.board.board_name);
  const [desc, setDesc] = useState(props.board.board_desc);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchRef = useRef();
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

  async function updateBoardDesc(updated, repeated) {
    const BoardObject = {
      ...props.board,
      board_desc: updated,
      board_name: name,
    };

    try {
      setError("");
      setLoading(true);
      await fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/${props.board.id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(BoardObject),
      })
        .then((res) => {
          if (res.status === 200) {
            setDesc(updated);
            props.refresh();
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
                  updateBoardName(updated, true);
                }
              });
            }
          }
        })
        .catch((error) => navigate("/"));
    } catch (err) {
      setError("Failed to add");
      window.alert(error);
    }
    setLoading(false);
  }

  async function updateBoardName(updated, repeated) {
    const BoardObject = {
      ...props.board,
      board_name: updated,
      board_desc: desc,
    };

    try {
      setError("");
      setLoading(true);
      await fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/${props.board.id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(BoardObject),
      })
        .then((res) => {
          if (res.status === 200) {
            setName(updated);
            props.refresh();
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
                  updateBoardName(updated, true);
                }
              });
            }
          }
        })
        .catch((error) => navigate("/"));
    } catch (err) {
      setError("Failed to add");
      window.alert(error);
    }
    setLoading(false);
  }

  async function deleteBoard(repeated) {

    try {
      setError("");
      setLoading(true);
      await fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/${props.board.id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("navigating")
            window.location.reload(false);
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
                  deleteBoard(true);
                }
              });
            }
          }
        })
        .catch((error) => navigate("/"));
    } catch (err) {
      setError("Failed to add");
      window.alert(error);
    }
    setLoading(false);
  }

  async function createGroup(repeated) {
    const GroupObject = {
      group_name: "New Group",
    };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/${props.board.id}/group`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(GroupObject),
      })
        .then((res) => {
          if (res.status === 200) {
            setName(props.name);
            props.refresh();
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
                createGroup(true);
              }
            });
          }
        })
        .catch((error) => navigate("/"));
    } catch (err) {
      setError("Failed to add");
      window.alert(error);
    }
    setLoading(false);
  }

  return (
    <BoardHeaderContainer>
      <BoardHeaderTopContainer>
        <BoardHeaderQuad1>
          <BoardTitleText>
            <EditableInput
              value={name ? name : ""}
              action={updateBoardName}
              type={"BoardName"}
            />
          </BoardTitleText>
          <BoardDescText>
            <EditableInput
              value={desc ? desc : ""}
              action={updateBoardDesc}
              type={"BoardDesc"}
            />
          </BoardDescText>
        </BoardHeaderQuad1>
        <BoardHeaderQuad2>
          <TableChartIcon style={{ marginRight: "5px" }} /> Table View{" "}
          <ArrowDropDownIcon />
        </BoardHeaderQuad2>
      </BoardHeaderTopContainer>
      <BoardHeaderBottomContainer>
        <BoardHeaderQuad3>
          <DelBoard onClick={deleteBoard}>Delete Board</DelBoard>
        </BoardHeaderQuad3>
        <BoardHeaderQuad4>
          <AddGroup onClick={createGroup}>Add Group</AddGroup>
          <BoardSearch
            type="search"
            ref={searchRef}
            placeholder="Search / Filter Board"
            required
          />
          <AccountCircleIcon style={{fontSize: "40px", color: "#A9A9A9"}}/>
        </BoardHeaderQuad4>
      </BoardHeaderBottomContainer>
    </BoardHeaderContainer>
  );
};

export default BoardHeader;
