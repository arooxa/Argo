import styled from "styled-components";
import background from "../../images/LandingPageBackground2.jpg";

export const Background = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  border: 5px solid black;
  background-image: url(${background});
  background-size: cover;
  //background: #efe2ba;
`;

export const LeftBackground = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid black;
  padding: 50px;

  //background: #efe2ba;
`;

export const LeftBox = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
  //border: 1px solid blue;
  padding: 20px;
  color: white;
`;

export const LandingTitleBox = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  //justify-content: center;
  //align-items: center;
  //border: 1px solid blue;
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

export const DescTitleBox = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  //justify-content: center;
  //align-items: center;
  //border: 1px solid blue;
  color: white;
  font-size: 15px;
`;

export const RightBackground = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid black;
  //background: #efe2ba;
`;

export const BoxContainer = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 30px;
`;

export const LoginTitleBox = styled.div`
  height: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid blue;
  font-size: 20px;
  font-family: "Arvo", serif;
`;

export const LoginTitleBox2 = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid blue;
  margin-top: -15px;
  font-size: 40px;
  font-family: "Arvo", serif;
  font-weight: bold;
`;

export const LoginTitleBox3 = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //border: 1px solid blue;
  color: #a9a9a9;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: "Arvo", serif;
`;

export const LoginTitleBox4 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //border: 1px solid blue;
  color: #a9a9a9;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: "Arvo", serif;
`;

export const LoginAlertBox = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
  background: #eb4d4b;
  opacity: 0.5;
  color:  white;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  font-family: "Arvo", serif;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 45px;
  width: 70%;
  align-self: center;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.4);
  padding: 20px 10px;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  border-radius: 20px;
  margin: 10px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border: 2px solid #f0932b;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 0px;
  width: 70%;
  border-radius: 20px;
  background: #fff;
  color: #f0932b;
  outline: none;
  border: 1px solid #f0932b;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 20px;
  font-family: "Arvo", serif;
  margin: 20px;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #f0932b;
    color: #fff;
  }
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: #f0932b;
  font-weight: 500;
  text-decoration: none;
  margin-left: 0.2rem;
`;
