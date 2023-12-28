import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Q10 from "../../assets/Q10.svg";
import Loading from "../../assets/Loading.svg";
import { useState, useEffect } from "react";

const Question10 = () => {
  const navigate = useNavigate();

  const navigateToQ9 = () => {
    navigate("/question8");
  };

  const navigateToResult = () => {
    setLoading(true);
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
        navigate("/resultPython");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [loading, navigate]);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <Header />
      <S.Question1Layout>
        <S.Question1Title>
          <S.Title>친구가 0.1점 차이로 B를 맞아서 슬퍼하고 있다😢</S.Title>
          <S.Title>당신이 친구한테 할 말은?</S.Title>
          <S.Img src={Q10} />
        </S.Question1Title>
        <S.QusetionContainer>
          <S.LeftQuestion>
            <S.Question>
              <S.Q>이미 지나가서 되돌릴 수 없는 일에 너무</S.Q>
              <S.Q>후회하지 말고 이제부터는 저런 일 없도록 </S.Q>
              <S.Q>더 열심히 해 </S.Q>
            </S.Question>
          </S.LeftQuestion>
          <S.RightQuestion>
            <S.Question>
              <S.Q>헐ㄹ.. 0.1점차이?? 진짜 아쉽겠다..</S.Q>
              <S.Q>나였어도 진짜 아쉬웠을 듯.. </S.Q>
              <S.Q>다음에 더 노력해서 꼭 A 받을 수 있길 바래!</S.Q>
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
          <S.NextBtn onClick={navigateToQ9}>이전</S.NextBtn>
          <S.BackBtn onClick={navigateToResult}>다음</S.BackBtn>
        </S.QusetionBtn>

        {loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Loading} />
          </div>
        )}
      </S.Question1Layout>
    </>
  );
};

export default Question10;
