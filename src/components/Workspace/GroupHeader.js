//each Group component should have a list of item components displayed
import React, { useRef, useState, useEffect } from "react";
import {
  GroupHeaderContainer,
  GroupDropCol,
  GroupTitleCol,
  GroupStatusCol,
  GroupDateCol,
  GroupCommentsCol,
  GroupAddCol,
  GroupPriorityCol,
} from "./common";
import EditableInput from "./EditableInput";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Group = (props) => {
  const [name, setName] = useState(props.group.group_name);
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

  async function updateGroupName(updated, repeated) {
    const GroupObject = { ...props.group, group_name: updated };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/group/${props.group.id}/update`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(GroupObject),
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
                  updateGroupName(updated, true);
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

  async function deleteGroup(repeated) {
    try {
      setError("");
      setLoading(true);
      await fetch(
        `http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/group/${props.group.id}/delete`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
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
                  deleteGroup(true);
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
    <GroupHeaderContainer>
      <GroupDropCol></GroupDropCol>
      <GroupTitleCol>
        <EditableInput
          value={name}
          action={updateGroupName}
          type={"GroupName"}
        />
      </GroupTitleCol>
      <GroupCommentsCol />
      <GroupStatusCol>Status</GroupStatusCol>
      <GroupDateCol>Date</GroupDateCol>
      <GroupPriorityCol>Priority</GroupPriorityCol>
      <GroupAddCol onClick={deleteGroup}><DeleteIcon /></GroupAddCol>
    </GroupHeaderContainer>
  );
};

export default Group;
