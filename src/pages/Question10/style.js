import styled from "styled-components";

export const Img = styled.img`
  position: relative;
  top: 1em;
`;
export const Question1Layout = styled.div`
  max-width: 100%;
  display: flex;
  padding: 7% 20% 0 20%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Question1Title = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const QusetionContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Question = styled.div`
  border: 2px solid #fc8cb4;
  padding: 1%;
  width: 100%;
  text-align: center;
  color: #4e4e4e;
`;

export const LeftQuestion = styled.div`
  width: 30%;
  margin-right: auto;
`;

export const RightQuestion = styled.div`
  width: 30%;
  margin-left: auto;
`;

export const QusetionBtn = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5%;
  justify-content: center;
  gap: 9%;
`;

export const Btn5 = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 2px solid #fc8cb4;
  background-color: ${(props) => (props.isSelected ? "#fc8cb4" : "white")};
`;
export const Btn4 = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 2px solid #fc8cb4;
  background-color: ${(props) => (props.isSelected ? "#fc8cb4" : "white")};
`;
export const Btn3 = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 2px solid #fc8cb4;
  background-color: ${(props) => (props.isSelected ? "#fc8cb4" : "white")};
`;
export const Btn2 = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: white;
  border: 2px solid #fc8cb4;
  background-color: ${(props) => (props.isSelected ? "#fc8cb4" : "white")};
`;
export const Btn1 = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  border: 2px solid #fc8cb4;
  background-color: ${(props) => (props.isSelected ? "#fc8cb4" : "white")};
`;

export const Q = styled.p`
  line-height: 5px;
`;

export const NextBtn = styled.button`
  width: 12%;
  height: 8vh;
  background-color: #fc8cb4;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 10px;
  font-size: 15px;
`;

export const BackBtn = styled.button`
  width: 12%;
  height: 8vh;
  background-color: #fc8cb4;
  font-size: 15px;
  cursor: pointer;
  border: none;
  color: white;
  border-radius: 10px;
`;
