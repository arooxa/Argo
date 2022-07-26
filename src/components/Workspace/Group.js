//each Group component should have a list of item components displayed
import React, { useRef, useState, useEffect } from "react";
import { GroupContainer, GroupBodyContainer } from "./common";
import GroupHeader from "./GroupHeader";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

const Group = (props) => {
  const [items, setItems] = useState([]);
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

  async function getItems(repeated) {
    try {
      fetch(`http://ec2-35-165-0-139.us-west-2.compute.amazonaws.com/group/${props.group.id}/items`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            res.json().then((result) => {
              setItems(result)
            });
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
                  getItems(true);
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
    getItems();
  }, []);

  return (
    <GroupContainer>
      <GroupHeader group={props.group} refresh={props.refresh} />
      <GroupBodyContainer>
        {items.map((item) => (
          <Item
            key={item.item_id}
            add={false}
            date={item.item_date}
            name={item.item_name}
            item={item}
            refresh={getItems} 
          />
        ))}
        <Item
          add={true}
          date={null}
          name={"Add Task"}
          refresh={getItems}
          group={props.group}
          item={"placeholder"}
        />
      </GroupBodyContainer>
    </GroupContainer>
  );
};

export default Group;
