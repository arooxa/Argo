import styled from "styled-components";



/*
    BOARD STYLES =========================
*/

export const BoardContainer = styled.div`
    height: 100%;
    width: 100%;
    border: 2px solid green;
    flex-direction: column;
    display: flex;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
`

export const BoardHeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: column;
    display: flex;
    border: 2px solid red;
    flex: 1;
`

export const BoardHeaderTopContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: row;
    display: flex;
    border: 2px solid red;
    flex: 1;
`

export const BoardHeaderQuad1 = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: row;
    display: flex;
    border: 1px solid green;
    flex: 1;
`

export const BoardHeaderQuad2 = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: row;
    display: flex;
    border: 1px solid green;
    flex: 1;
`

export const BoardHeaderBottomContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    border: 2px solid red;
    flex: 1;
`

export const BoardHeaderQuad3 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    border: 1px solid green;
    flex: 1;
`

export const BoardHeaderQuad4 = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    border: 1px solid green;
    flex: 1;
`

export const BoardBodyContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: row;
    display: flex;
    border: 2px solid blue;
    flex: 4;
    justify-content: center;
    align-items: center;
`

export const BoardBodyLeftContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: column;
    display: flex;
    border: 2px solid blue;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const SubmitButton = styled.button`
    padding: 10px 0px;
    width: 70%;
    border-radius: 20px;
    background: #fff;
    color:#ef5777;
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
`



export const BoardInputsContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction: column;
    display: flex;
    border: 2px solid blue;
    flex: 1;
    justify-content: center;
    align-items: center;
`

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

