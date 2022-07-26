import React, { useRef, useState } from "react";
import {
  HeaderAddButton,
  HeaderContainer,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  HeaderSearch,
  SearchIconContainer,
} from "./common";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function DashHeader(props) {
  const searchRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState();
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

  async function addBoard(repeated) {
    const BoardObject = { board_name: "New Project", board_desc: "Project Description" };
    try {
      setError("");
      setLoading(true);
      fetch("http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/board/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },                                                                                                                                                                                                                                                                                                                                                                                                                                        
        body: JSON.stringify(BoardObject),
      })
        .then((res) => {
          if (res.status === 200) {
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
                  addBoard(true);
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

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderSearch
          type="search"
          ref={searchRef}
          placeholder="Search projects..."
          required
        ></HeaderSearch>
        <SearchIcon />
      </HeaderLeft>
      <HeaderMiddle>
        <HeaderAddButton onClick={() => addBoard(false)}>Add a new project</HeaderAddButton>
      </HeaderMiddle>
      <HeaderRight>
        <NotificationsNoneIcon
          style={{ color: "#7f8fa6", margin: "10px", alignSelf: "center" }}
        />
        Full Name
        <AccountCircleIcon
          style={{ color: "#7f8fa6", margin: "10px", alignSelf: "center" }}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default DashHeader;
