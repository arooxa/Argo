//This will display either the dashboard or a board depending on which component is active
import React, { useState } from "react";
import {
  EditItemName,
  EditGroupHeader,
  EditBoardHeader,
  EditBoardDesc,
} from "./common";

const EditableInput = ({ value, action, type, add }) => {
  const [editValue, setEditValue] = useState(value);

  const onChange = (event) => {
    setEditValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (
      event.target.value.trim() === "" ||
      event.target.value.trim() === value
    ) {
      setEditValue(value);
    } else {
      if (add) {
        setEditValue("Add Task");
      }
      action(event.target.value);
    }
  };

  return (
    <>
      {type === "BoardDesc" && (
        <EditBoardDesc
          type="text"
          aria-label="Board Desc"
          value={editValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      )}
      {type === "BoardName" && (
        <EditBoardHeader
          type="text"
          aria-label="Board Name"
          value={editValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      )}
      {type === "GroupName" && (
        <EditGroupHeader
          type="text"
          aria-label="Group Name"
          value={editValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      )}
      {type === "ItemName" && (
        <EditItemName
          type="text"
          aria-label="Item Name"
          value={editValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      )}
      {add && (
        <EditItemName
          type="text"
          aria-label="Empty Item Name"
          value={editValue}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      )}
    </>
  );
};

export default EditableInput;
