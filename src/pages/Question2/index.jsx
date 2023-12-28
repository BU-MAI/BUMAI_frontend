import * as S from "./style";
import Header from "../../components/Header";
import Q1 from "../../assets/Q1.png";
import { useState } from "react";

const Question1 = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <>
      <Header />
      <S.Question1Layout>
        <S.Question1Title>
          <S.Title>당신의 동아리 속 역할과 가까운 것은?</S.Title>
          <img src={Q1} />
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
          <S.NextBtn>이전</S.NextBtn>
          <S.BackBtn>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question1;
