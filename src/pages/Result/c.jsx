import React from "react";
import * as S from "../../style";
import c from "../../assets/result/c.svg";
import Header from "../../components/Header";

const ResultC = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={c} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>베이직한 C언어</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              기본적이고 안정적인 기술 스택을 중심으로 일을 수행하며, 실용적이고
              효율
            </p>
            <p>
              적인 솔루션을 선호합니다. 코드 작성 시에는 간결하면서도 가독성을
              중시하
            </p>
            <p>
              며, 주어진 업무에 신속하게 대응하여 실질적인 결과를 도출합니다.
              실무 경험
            </p>
            <p>을 통해 안정성 있는 개발 업무를 수행합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultC;
