import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  //justify-content: center;
  //align-items: center;
`;

export const TotalContainer = styled.div`
  height: 100%;
  width: 100%;
  //border: 2px solid green;
  flex-direction: column;
  display: flex;
`;

export const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px 80px 20px;
`;

export const BoardBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  //border: 2px solid blue;
  // padding: 2% 4%;
`;

export const BoardLeftBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: white;
  margin-right: 15px;
`;

export const BoardRightBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: white;
  margin-left: 15px;

`;

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
  //border: 1px solid black;
`;

export const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  //border: 1px solid black;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 10px 20px 10px 20px;
`;

export const BoardCard = styled.button`
  all: unset;
  display: flex;
  //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  // margin-left: 20px;
  // margin-right: 20px;
  //margin: 20px;
  border-radius: 5px;
  //border-bottom: 1px solid #d3d3d3;
  outline: 1px solid #d3d3d3;
  width: 80%;
  height: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
  padding: 10px 20px 0px 20px;
`;


export const BoardCardLeft = styled.div`
  height: 100%;
  width: 80%;
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
  width: 20%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  color: #3c6382;
  font-weight: bold;
  //border: 1px solid red;
  font-family: "Lato", sans-serif;
  font-size: 20px;
`;


