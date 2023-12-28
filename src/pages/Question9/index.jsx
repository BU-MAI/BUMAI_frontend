import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q9 from "../../assets/Q9.svg";
import { useState } from "react";

const Question9 = () => {
  const navigate = useNavigate();

  const navigateToQ8 = () => {
    navigate("/question8");
  };

  const navigateToQ10 = () => {
    navigate("/question10");
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
          <S.Title>
            평소와 같이 부소마고 생활 중.. 한 학생이 나에게 고백을 한다💌
          </S.Title>
          <S.Title>당신이 더 좋아하는 고백 멘트는?</S.Title>
          <S.Img src={Q9} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>며칠 전부터 너가 계속 신경쓰였고 </S.Q>
              <S.Q>지금은 내가 널 좋아한다는 게 </S.Q>
              <S.Q>확실해졌어 넌 나 어떻게 생각해?</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>야 나 너 좋아해 나랑 사귈래?</S.Q>
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
          <S.NextBtn onClick={navigateToQ8}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ10}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question9;
