//map of list components
import React, { useRef, useState, useEffect } from "react";
import {
  BoardBodyContainer,
  BoardBodyLeftContainer,
  BoardBodyRightContainer,
  BoardContainer,
  ItemCreator,
  SubmitButton,
} from "./common";
import BoardHeader from "./BoardHeader";
//test
const Board = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const titleRef = useRef();
  const statusRef = useRef();
  const priorityRef = useRef();

  async function handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
    const BoardObject = {"board_name" : titleRef.current.value}
    try {
      setError("");
      setLoading(true);
      fetch("http://localhost:8080/board/add", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(BoardObject)
      }).then(() => {
        console.log("NEW BOARD ADDED")
      })
    } catch (err) {
      setError("Failed to add");
      window.alert(error);
    }
    setLoading(false);
  }

  useEffect(() => {
      fetch("http://localhost:8080/board/getAll")
      .then(res => res.json())
      .then( (result) => {
          setBoards(result);
      })
  })

  return (
    <BoardContainer>
      <BoardHeader />
      <BoardBodyContainer>
        <BoardBodyLeftContainer>
          <ItemCreator
            type="text"
            ref={titleRef}
            placeholder="Title"
            required
          />
          <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>
            Add Board
          </SubmitButton>
        </BoardBodyLeftContainer>
        <BoardBodyRightContainer>
            {
                boards.map(board => (
                    <h1>board: {board.board_name}</h1>
                ))
            }
        </BoardBodyRightContainer>
      </BoardBodyContainer>
    </BoardContainer>
  );
};

export default Board;
