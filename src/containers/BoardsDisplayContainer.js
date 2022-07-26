//This will display either the dashboard or a board depending on which component is active
import React, { useState } from "react";
import Board from "../components/Workspace/Board";
import BoardsContainer from "./BoardsContainer";
import  { BoardsPageContext } from './BoardsPageContext'
import { DisplayContainer } from "../components/Workspace/common";

const BoardsDisplay = () => {
  const [active, setActive] = useState("boardspage");
  const [board, setBoard] = useState({});

  const switchToBoard = (board) => {
    setActive("board");
    setBoard(board);
  };

  const switchToBoardsPage = () => {
    setActive("boardspage");
  };

  const contextValue = { switchToBoard, switchToBoardsPage };

  return (
    <BoardsPageContext.Provider value={contextValue}>
      <DisplayContainer>
        {active === "boardspage" ? <BoardsContainer /> : <Board board={board} />}
      </DisplayContainer>
    </BoardsPageContext.Provider>
  );
};

export default BoardsDisplay;
