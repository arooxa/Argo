//each item component should have all the fields of the list component
//each Group component should have a list of item components displayed
import React, { useRef, useState, useEffect } from "react";
import {
  ItemContainer,
  ItemColorCol,
  ItemTitleCol,
  ItemColor,
  ItemDateCol,
  ItemStatusCol,
  ItemComments,
  ItemAddCol,
  ItemPriorityCol,
} from "./common";
import EditableInput from "./EditableInput";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns/";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const priority = ["LOW", "MEDIUM", "HIGH"];
  const priorityColors = ["#add8e6", "#ffc048", "#eb4d4b"];
  const status = ["NOT STARTED", "IN PROGRESS", "FINISHED"];
  const statusColors = ["#add8e6", "#f9ca24", "#badc58"];
  const DEFAULT_DATE_FORMAT = "yyyy-MM-dd";

  const [name, setName] = useState(props.name);
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

  function formatDate(date) {
    if (!date || date === undefined) {
      // console.log("in if loop + " + props.name)
      return new Date();
    }
    try {
      var t = date.split(/[- :]/);
      var d = new Date(t[0], t[1] - 1, t[2]);
      return d;
    } catch (error) {
      window.alert(error + " " + props.name + " " + date + " " + props.item.item_date)
    }
    
  }

  async function createItem(updated, repeated) {
    const ItemObject = {
      item_name: updated,
      status: 0,
      priority: 0,
      item_date: new Date().toISOString().slice(0, 10),
    };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/group/${props.group.id}/item`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(ItemObject),
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
                createItem(updated, true);
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

  async function updateItemName(updated, repeated) {
    const ItemObject = { ...props.item, item_name: updated };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/item/${props.item.item_id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(ItemObject),
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
                  updateItemName(updated, true);
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

  async function updateItemDate(date, repeated) {
    setSelectedDate(date);
    const ItemObject = { ...props.item, item_date: date.toISOString().slice(0, 10) };
    try {
      setError("");
      setLoading(true);
      await fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/item/${props.item.item_id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(ItemObject),
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
                updateItemDate(date, true);
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

  async function deleteItem(repeated) {
    try {
      setError("");
      setLoading(true);
      await fetch(
        `http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/item/${props.item.item_id}/delete`, {
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
                  deleteItem(true);
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

  async function cycleStatus(repeated) {
    let updated = props.item.status;
    if (updated >= 2) {
      updated = -1;
    }
    updated = updated + 1;
    const ItemObject = { ...props.item, status: updated };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/item/${props.item.item_id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(ItemObject),
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
                cycleStatus(true);
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

  async function cyclePriority(repeated) {
    let updated = props.item.priority;
    if (updated >= 2) {
      updated = -1;
    }
    updated = updated + 1;
    const ItemObject = { ...props.item, priority: updated };
    try {
      setError("");
      setLoading(true);
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/item/${props.item.item_id}/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(ItemObject),
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
                cyclePriority(true);
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

  const [selectedDate, setSelectedDate] = useState(formatDate(props.date));

  return (
    <ItemContainer>
      {props.add ? (
        <>
          <ItemColorCol>
            <ItemColor style={{ opacity: 0.5 }} />
          </ItemColorCol>
          <ItemTitleCol style={{ opacity: 0.5 }}>
            <EditableInput
              value={name}
              action={createItem}
              add={props.add}
            ></EditableInput>
          </ItemTitleCol>
        </>
      ) : (
        <>
          <ItemColorCol>
            <ItemColor />
          </ItemColorCol>
          <ItemTitleCol>
            <EditableInput
              value={name}
              action={updateItemName}
              add={props.add}
              type={"ItemName"}
            ></EditableInput>
          </ItemTitleCol>
          <ItemComments></ItemComments>
          <ItemStatusCol
            onClick={cycleStatus}
            background={statusColors[props.item.status]}
          >
            {status[props.item.status]}
          </ItemStatusCol>
          <ItemDateCol>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyy"
                  margin="normal"
                  id="date-picker"
                  value={selectedDate}
                  onChange={updateItemDate}
                />
              </>
            </MuiPickersUtilsProvider>
          </ItemDateCol>
          <ItemPriorityCol
            onClick={cyclePriority}
            background={priorityColors[props.item.priority]}
          >
            {priority[props.item.priority]}
          </ItemPriorityCol>
          <ItemAddCol onClick={deleteItem}>
            <DeleteIcon />
          </ItemAddCol>
        </>
      )}
    </ItemContainer>
  );
};

export default Item;
