import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q1 from "../../assets/Q1.svg";
import { useState, useEffect } from "react";

const Question1 = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  const navigateToQ2 = () => {
    // Save the last selected button value before navigating
    localStorage.setItem("lastSelectedButton", selectedButton);
    navigate("/question2");
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [lastSelectedButton, setLastSelectedButton] = useState(null); // Added state for last selected button

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const logResultToConsole = () => {
    console.log("Result:", lastSelectedButton);
  };

  useEffect(() => {
    const storedLastSelectedButton = localStorage.getItem("lastSelectedButton");
    if (storedLastSelectedButton) {
      setLastSelectedButton(parseInt(storedLastSelectedButton, 10));
    }
  }, []);

  return (
    <>
      <Header />
      <S.Question1Layout>
        <S.Question1Title>
          <S.Title>당신의 코드 스타일은?</S.Title>
          <S.Img src={Q1} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>구현이 먼저!</S.Q>
              <S.Q>더러워도 구현을 먼저 한 후 리펙토링하면</S.Q>
              <S.Q>가독성 높여가는 스타일</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>가독성이 중요!!</S.Q>
              <S.Q>조금 느리더라도 예쁘고 간결하게</S.Q>
              <S.Q>코드를 짜나가는 스타일</S.Q>
            </S.Question>
          </S.RightQuestion>
        </S.QusetionContainer>
        <S.QusetionBtn>
          <S.Btn5
            isSelected={selectedButton === 5}
            onClick={() => {
              handleButtonClick(5);
              setLastSelectedButton(5); // Update last selected button
            }}
          ></S.Btn5>
          <S.Btn4
            isSelected={selectedButton === 4}
            onClick={() => {
              handleButtonClick(4);
              setLastSelectedButton(4); // Update last selected button
            }}
          ></S.Btn4>
          <S.Btn3
            isSelected={selectedButton === 3}
            onClick={() => {
              handleButtonClick(3);
              setLastSelectedButton(3); // Update last selected button
            }}
          ></S.Btn3>
          <S.Btn2
            isSelected={selectedButton === 2}
            onClick={() => {
              handleButtonClick(2);
              setLastSelectedButton(2); // Update last selected button
            }}
          ></S.Btn2>
          <S.Btn1
            isSelected={selectedButton === 1}
            onClick={() => {
              handleButtonClick(1);
              setLastSelectedButton(1); // Update last selected button
            }}
          ></S.Btn1>
        </S.QusetionBtn>
        <S.QusetionBtn>
          <S.NextBtn onClick={navigateToMain}>이전</S.NextBtn>
          <S.BackBtn
            onClick={() => {
              navigateToQ2();
              logResultToConsole();
            }}
          >
            다음
          </S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question1;
