import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q7 from "../../assets/Q7.svg";
import { useState } from "react";

const Question7 = () => {
  const navigate = useNavigate();

  const navigateToQ6 = () => {
    navigate("/question6");
  };

  const navigateToQ8 = () => {
    navigate("/question8");
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
          <S.Title>오늘은 학교에서 저녁에 영화를 보러 가는 날~! </S.Title>
          <S.Title>당신의 생각은?</S.Title>
          <S.Img src={Q7} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>그냥 바로 기숙사에 들어가서 쉬면 안되나..</S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>헐~ 영화를 보러 간다니 재밌겠다😆</S.Q>
              <S.Q>무슨 영화볼려나?? 기대된다ㅎㅎ</S.Q>
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
          <S.NextBtn onClick={navigateToQ6}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToQ8}>다음</S.BackBtn>
        </S.QusetionBtn>
      </S.Question1Layout>
    </>
  );
};

export default Question7;
