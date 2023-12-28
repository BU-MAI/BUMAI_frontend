import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q6 from "../../assets/Q6.svg";
import { useState } from "react";

const Question6 = () => {
  const navigate = useNavigate();

  const navigateToQ5 = () => {
    navigate("/question5");
  };

  const navigateToQ7 = () => {
    navigate("/question7");
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
          <S.Title>동아리 팀원이 마감시간이 얼마 남지 않았는데 구현을 </S.Title>
          <S.Title>다 하지 못 하였다 이때 당신의 행동은?</S.Title>
          <S.Img src={Q6} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>계속 찾아가서 독촉하며 어떻게든</S.Q>
              <S.Q>마감시간까지 구현되게 한다</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>마감시간을 좀 더 늘려주고 늘려준</S.Q>
              <S.Q>시간 안에는 하라고 한다</S.Q>
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
          <S.NextBtn onClick={navigateToQ5}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ7}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question6;
