import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q3 from "../../assets/Q3.svg";
import { useState } from "react";

const Question3 = () => {
  const navigate = useNavigate();

  const navigateToQ1 = () => {
    navigate("/question2");
  };

  const navigateToQ3 = () => {
    navigate("/question4");
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
          <S.Title>딴따라라 따란따라~</S.Title>
          <S.Title>기상송이 울렸다! 당신의 등교 시간은?</S.Title>
          <S.Img src={Q3} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>안전하게 일찍 나가야지! 빠르게 일어나</S.Q>
              <S.Q>준비하고 등교송이 끝나기 전 학교를 가는</S.Q>
              <S.Q>스타일</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>벌점만 안 받으면 되지ㅎ 등교송이 끝나고</S.Q>
              <S.Q>나가야하는 시간을 딱 맞춰 학교를 가는 </S.Q>
              <S.Q>스타일</S.Q>
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
          <S.NextBtn onClick={navigateToQ1}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ3}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question3;
