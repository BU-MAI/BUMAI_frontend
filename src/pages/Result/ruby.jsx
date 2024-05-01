import React from "react";
import * as S from "../../style";
import ruby from "../../assets/result/ruby.svg";
import Header from "../../components/Header";

const ResultRuby = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={ruby} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>
              <p>자신의 의견이 확실, 팩트 중심</p>
              <p>논리적 ruby</p>
            </S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              기술적인 토론에서 강한 입장을 취하며, 논리적으로 설득력 있는
              주장을 구성
            </p>
            <p>
              합니다. 정확하고 확고한 의사 표현으로 팀 내에서 의사소통에 있어
              신뢰를 얻
            </p>
            <p>
              으며, 프로젝트에 대한 결정에 있어 합리적인 의견을 제시합니다.
              토론과 논의
            </p>
            <p>를 통해 최선의 솔루션을 찾아내는 데 기여합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultRuby;
