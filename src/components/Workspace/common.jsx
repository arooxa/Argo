import styled from "styled-components";

export const ItemCreator = styled.input`
  display: flex;
  height: 10%;
  width: 60%;
  border: 1px solid #000;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  text-align: center;
  margin-top: 2%;
  &::placeholder {
    color: #000;
  }
  &:focus {
    outline: none;
    border: 2px solid rgb(239, 87, 119);
  }
`;

/*
    INPUT STYLES =========================
*/

export const EditBoardDesc = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px;
  margin-right: 10px;
  font-family: "Arvo", serif;
  color: #a9a9a9;
  font-size: 16px;
  font-weight: normal;
  outline: 0;
  width: 80%;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export const EditBoardHeader = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px;
  margin-right: 10px;
  font-family: "Arvo", serif;
  font-size: 32px;
  font-weight: normal;
  outline: 0;
  width: 80%;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export const EditGroupHeader = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px;
  margin-right: 10px;
  font-family: "Arvo", serif;
  font-size: 20px;
  color: #7f8fa6;
  outline: 0;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export const EditItemName = styled.input`
  background-color: transparent;
  border: none;
  padding: 8px;
  margin-right: 10px;
  font-family: "Arvo", serif;
  font-size: 12px;
  font-weight: normal;
  width: 100%;
  outline: 0;

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

/*
    BOARD STYLES =========================
*/

export const BoardContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid #d3d3d3;
  flex: 1;
  padding: 20px 20px 10px 20px;
`;

export const BoardHeaderTopContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  margin-left: 20px;
`;

export const BoardHeaderQuad1 = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  //border: 1px solid black;
  flex: 1;
  justify-content: flex-end;
`;

export const BoardTitleText = styled.h1`
  all: unset;
  display: flex;
  
`;

export const BoardDescText = styled.h1`
  all: unset;
  display: flex;
  margin-top: -10px;
`;

export const BoardHeaderQuad2 = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  //border: 1px solid black;
  flex: 1;
  margin-left: 5px;
  align-items: flex-end;
`;

export const BoardHeaderBottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoardHeaderQuad3 = styled.div`
  display: flex;
  //border: 1px solid black;
  flex: 2;
  justify-content: flex-end;
  padding: 0px 20px 0px 20px;
`;

export const BoardSearch = styled.input`
all: unset;
display: flex;
height: 80%;
width: 200px;
align-self: center;
outline: 1px solid black;
//border: 1px solid black;
// padding: 10px 10px;
transition: all 200ms ease-in-out;
font-size: 14px;
border-radius: 20px;
//justify-content: center;
margin-left: 20px;
margin-right: 15px;
padding-left: 15px;

&::placeholder {
  color: #808080;
}

&:focus {
  //outline: none;
  outline: 2px solid #7f8fa6;
}
`

export const BoardHeaderQuad4 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //border: 1px solid black;
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

export const AddGroup = styled.button`
  all: unset;
  height: 80%;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
  border-radius: 20px;
  color: white;
  background: #7f8fa6;
  border: none;
  
  &:hover {
    transition: all 0.4s ease-in-out;
    background: none;
    border: 1px solid #7f8fa6;
    color: #7f8fa6;
  }

`;

export const DelBoard = styled.button`
  all: unset;
  height: 50px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #fff;
  border-radius: 20px;
  color: white;
  background: #ED4C67;
  border: none;
  
  &:hover {
    transition: all 0.4s ease-in-out;
    background: none;
    border: 1px solid #ED4C67;
    color: #ED4C67;
  }

`;

export const BoardBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  flex: 6;
  align-items: center;
  padding: 2% 4%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 0px;
  width: 70%;
  border-radius: 20px;
  background: #fff;
  color: #ef5777;
  outline: none;
  border: 1px solid #ef5777;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 30px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #ef5777;
    color: #fff;
  }
`;

export const BoardBodyRightContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  border: 2px solid blue;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoardInputsContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  border: 2px solid blue;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/*
    DASHBOARD STYLES =========================
*/

export const DashboardContainer = styled.div`
  height: 100%;
  width: 100%;
  //border: 2px solid green;
  flex-direction: column;
  display: flex;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  height: 6%;
  width: 100%;
  //border: 1px solid red;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
`;

export const HeaderLeft = styled.div`
  height: 100%;
  flex: 5;
  // border: 1px solid red;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: white;
  padding-right: 10px;
`;

export const HeaderSearch = styled.input`
  height: 100%;
  width: 100%;
  align-self: center;
  outline: none;
  border: none;
  padding: 10px 10px;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  border-radius: 15px;
  //justify-content: center;
  font-family: "Lato", sans-serif;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border-left: 3px solid #7f8fa6;
  }
`;

export const HeaderAddButton = styled.button`
  height: 100%;
  padding: 10px 0px;
  width: 200px;
  border-radius: 15px;
  background: #fff;
  color: #7f8fa6;
  outline: none;
  border: none;
  border: 1px solid #7f8fa6;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin: 40px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #7f8fa6;
    color: #fff;
    border: 1px solid #293846;
  }
`;

export const HeaderMiddle = styled.div`
  height: 100%;
  flex: 3;
  //border: 1px solid red;
  flex-direction: row;
  display: flex;
  //justify-content: flex-end;
  align-items: center;
`;

export const HeaderRight = styled.div`
  height: 100%;
  flex: 2;
  //border: 1px solid red;
  flex-direction: row;
  display: flex;
  padding-right: 10px;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;
export const HeaderRightName = styled.div`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  border: 1px solid red;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderRightPic = styled.div`
  height: 100%;
  width: 50px;
  border: 1px solid red;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockContainer = styled.div`
  height: 22%;
  width: 100%;
  //border: 1px solid red;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px 20px 20px;
`;

export const Block = styled.div`
  height: 90%;
  width: 100%;
  background: #7f8fa6;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const BlockLeft = styled.div`
  height: 100%;
  flex: 4;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  //border: 2px solid black;
  padding: 20px;
`;

export const BlockTitle = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  //justify-content: center;
  align-items: center;
  border-radius: 20px;
  //border: 1px solid black;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;

export const BlockDesc = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  //justify-content: center;
  //align-items: center;
  border-radius: 20px;
  //border: 1px solid black;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: white;
`;

export const BlockRight = styled.div`
  height: 100%;
  flex: 1;
  flex-direction: row;
  display: flex;
  //justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-size: 300px 100px;
  background-repeat: no-repeat;
  //border: 2px solid black;
`;

export const BottomContainer = styled.div`
  height: 72%;
  width: 100%;
  //border: 2px solid blue;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 20px 20px;
`;

export const LeftDashContainer = styled.div`
  height: 100%;
  flex: 4;
  //border: 1px solid blue;
  //border-right: 1px solid #d3d3d3;
  flex-direction: column;
  display: flex;
  //justify-content: center;
  //align-items: center;
  padding-right: 10px;
`;

export const DashProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  //border: 1px solid green;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  //border-bottom: 1px solid #d3d3d3;
  background: white;
  padding: 10px 20px 20px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const DashTasksContainer = styled.div`
  height: 35%;
  width: 100%;
  //border: 1px solid green;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
`;

export const DashTeamContainer = styled.div`
  height: 30%;
  width: 100%;
  //border: 1px solid green;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
`;

export const DashCompHeader = styled.div`
  height: 80px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashCompStatusHeader = styled.div`
  height: 80px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashHeaderLeft = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: row;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
`;

export const DashHeaderRight = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  color: #3c6382;
  font-weight: bold;
  //text-decoration-line: underline;
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;

export const DashBody = styled.div`
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const RightDashContainer = styled.div`
  height: 100%;
  //border: 2px solid blue;
  flex: 3;
  //border: 1px solid blue;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const DashCalendarContainer = styled.div`
  height: 100%;
  width: 100%;
  //border: 1px solid green;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 10px 20px 20px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const BoardCard = styled.button`
  all: unset;
  display: flex;
  //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-bottom: 1px solid #d3d3d3;
  border-top: 1px solid #d3d3d3;
  width: 100%;
  height: 20%;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
  padding: 10px 20px 20px 20px;
`;

export const BoardCardLeft = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  color: #3c6382;
  font-weight: bold;
  //border: 1px solid red;
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;

export const BoardCardTitle = styled.div`
  height: 50%;
  width: 100%;
  flex-direction: row;
  display: flex;
  //justify-content: flex-end;
  align-items: flex-end;
  //border: 1px solid red;
  font-weight: bold;
  font-size: 20px;
  font-family: "Arvo", sans-serif;
  color: black;
`;

export const BoardCardDesc = styled.div`
  height: 50%;
  width: 100%;
  flex-direction: row;
  display: flex;
  //justify-content: flex-end;
  color: #3c6382;
  font-weight: bold;
  //border: 1px solid red;
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;

export const BoardCardRight = styled.div`
  height: 100%;
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  color: #3c6382;
  font-weight: bold;
  //border: 1px solid red;
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;

/*
    DISPLAY STYLES =========================
*/

export const DisplayContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

/*
    GROUP STYLES =========================
*/

export const GroupHeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const GroupDropCol = styled.div`
  height: 100%;
  width: 30px;
  flex-direction: row;
  display: flex;
  //border: 1px solid black;
`;

export const GroupTitleCol = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-direction: row;
  display: flex;
  align-items: flex-end;

  //border: 1px solid black;
`;

export const GroupCommentsCol = styled.div`
  height: 100%;
  width: 50px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  //border: 1px solid black;
`;

export const GroupStatusCol = styled.div`
  height: 100%;
  width: 150px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: "Arvo", serif;
  font-size: 15px;
  //border: 1px solid black;
`;

export const GroupPriorityCol = styled.div`
  height: 100%;
  width: 150px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: "Arvo", serif;
  font-size: 15px;
  //border: 1px solid black;
`;

export const GroupDateCol = styled.div`
  height: 100%;
  width: 160px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: "Arvo", serif;
  font-size: 15px;
  //border: 1px solid black;
`;

export const GroupAddCol = styled.button`
  all: unset;
  height: 100%;
  width: 30px;
  flex-direction: row;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  //border: 1px solid black;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const GroupContainer = styled.div`
  width: 100%;
  //border: 2px solid green;
  flex-direction: column;
  display: flex;
  margin: 20px;
`;

export const GroupBodyContainer = styled.div`
  width: 100%;
  // border: 1px solid blue;
  flex-direction: column;
  display: flex;
`;

/*
    ITEM STYLES =========================
*/

export const ItemContainer = styled.div`
  height: 50px;
  width: 100%;
  margin: 1px;
  flex-direction: row;
  display: flex;
`;

export const ItemColorCol = styled.div`
  height: 100%;
  width: 40px;
  flex-direction: row-reverse;
  display: flex;
`;

export const ItemColor = styled.div`
  height: 100%;
  width: 10px;
  flex-direction: column;
  display: flex;
  background: #7f8fa6;
`;

export const ItemTitleCol = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-direction: row;
  display: flex;
  background: #dcdcdc;
  align-items: center;
  border: 1px solid #d3d3d3;
  border-right: 1px solid white;
  padding-left: 15px;
`;

export const ItemTitleText = styled.h1`
  all: unset;
  display: flex;
  font-family: "Arvo", serif;
  font-size: 12px;
  font-weight: normal;
`;

export const ItemComments = styled.div`
  height: 100%;
  width: 50px;
  flex-direction: row;
  display: flex;
  background: #dcdcdc;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3;
  border-right: 1px solid white;
`;

export const ItemStatusCol = styled.button`
  all: unset;
  cursor: pointer;
  height: 100%;
  width: 150px;
  flex-direction: row;
  display: flex;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-right: 1px solid white;
`;

export const ItemPriorityCol = styled.button`
  all: unset;
  cursor: pointer;
  height: 100%;
  width: 150px;
  flex-direction: row;
  display: flex;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: center;
  border-right: 1px solid white;
`;

export const ItemDateCol = styled.div`
  height: 100%;
  width: 160px;
  flex-direction: row;
  display: flex;
  background: #dcdcdc;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid #d3d3d3;
  border-right: 1px solid white;
`;

export const ItemAddCol = styled.button`
  all: unset;
  height: 100%;
  width: 30px;
  flex-direction: row;
  display: flex;
  background: #dcdcdc;
  align-items: center;
  justify-content: center;
  border-right: 1px solid white;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
