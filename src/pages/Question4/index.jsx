import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q4 from "../../assets/Q4.svg";
import { useState } from "react";

const Question4 = () => {
  const navigate = useNavigate();

  const navigateToQ3 = () => {
    navigate("/question3");
  };

  const navigateToQ5 = () => {
    navigate("/question5");
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <>
      <Header />
      <S.Question1Layout>
        <S.Question1Title>
          <S.Title>더 좋아하는 언어는?</S.Title>
          <S.Img src={Q4} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>저수준의 문법을 가지고 있지만</S.Q>
              <S.Q>빠른 실행 속도를 가진 C언어</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>C보다는 상대적으로 느리지만 간결한</S.Q>
              <S.Q>문법으로 편의성이 높은 python</S.Q>
            </S.Question>
          </S.RightQuestion>
        </S.QusetionContainer>
        <S.QusetionBtn>
          <S.Btn5
            isSelected={selectedButton === 5}
            onClick={() => handleButtonClick(5)}
          ></S.Btn5>
          <S.Btn4
            isSelected={selectedButton === 4}
            onClick={() => handleButtonClick(4)}
          ></S.Btn4>
          <S.Btn3
            isSelected={selectedButton === 3}
            onClick={() => handleButtonClick(3)}
          ></S.Btn3>
          <S.Btn2
            isSelected={selectedButton === 2}
            onClick={() => handleButtonClick(2)}
          ></S.Btn2>
          <S.Btn1
            isSelected={selectedButton === 1}
            onClick={() => handleButtonClick(1)}
          ></S.Btn1>
        </S.QusetionBtn>
        <S.QusetionBtn>
          <S.NextBtn onClick={navigateToQ3}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ5}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question4;
