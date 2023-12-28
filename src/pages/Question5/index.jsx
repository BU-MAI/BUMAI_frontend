import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q5 from "../../assets/Q5.svg";
import { useState } from "react";

const Question5 = () => {
  const navigate = useNavigate();

  const navigateToQ4 = () => {
    navigate("/question4");
  };

  const navigateToQ6 = () => {
    navigate("/question6");
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
          <S.Title>미래의 나는..?</S.Title>
          <S.Img src={Q5} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>전체 시스템을 이해하고 다룰 수 있는</S.Q>
              <S.Q>능력을 가진 풀스택 개발자</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>특정 영역에 집중하여 전문성을</S.Q>
              <S.Q> 확보하는 스페셜리스트 개발자</S.Q>
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
          <S.NextBtn onClick={navigateToQ4}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ6}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question5;
