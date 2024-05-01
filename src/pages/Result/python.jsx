import React from "react";
import * as S from "../../style";
import python from "../../assets/python.png";
import Header from "../../components/Header";

const ResultPython = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={python} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>다재다능한 파이썬</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              다양한 기술 스택과 언어를 능숙하게 다루며, 여러 프로젝트와 업무에
              높은
            </p>
            <p>
              적응성을 보입니다. 다양한 도메인에 대한 이해와 경험을 통해 팀
              내에서
            </p>
            <p>
              각종 역할을 유연하게 수행하며, 문제에 대한 종합적이고 창의적인
            </p>
            <p>
              해결책을 제시합니다. 새로운 도구나 기술에 대한 습득 능력이
              뛰어나며,
            </p>
            <p>팀의 다양한 요구 사항에 효과적으로 대응합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultPython;
