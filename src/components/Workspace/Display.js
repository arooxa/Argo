//This will display either the dashboard or a board depending on which component is active
import React, { useState } from "react";
import Board from "./Board";
import Dashboard from "./Dashboard";
import { DisplayContext } from "./DisplayContext";
import { DisplayContainer } from "./common";

const Display = () => {
  const [active, setActive] = useState("dashboard");
  const [board, setBoard] = useState({});

  const switchToBoard = (board) => {
    setActive("board");
    setBoard(board);
  };

  const switchToDashboard = () => {
    setActive("dashboard");
  };

  const contextValue = { switchToBoard, switchToDashboard };

  return (
    <DisplayContext.Provider value={contextValue}>
      <DisplayContainer>
        {active === "dashboard" ? <Dashboard /> : <Board board={board} />}
      </DisplayContainer>
    </DisplayContext.Provider>
  );
};

export default Display;
