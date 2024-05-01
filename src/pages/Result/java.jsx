import React from "react";
import * as S from "../../resultstyle";
import java from "../../assets/result/java.svg";
import Header from "../../components/Header";

const ResultJava = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={java} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>신중하고 안정적인 자바</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              코드 작성 시 신중한 판단력을 발휘하며, 안정된 코드 아키텍처를
              설계합니다.
            </p>
            <p>
              프로젝트 일정을 정확히 예측하고, 책임감 있게 업무를 수행하여
              안정성과 신뢰성을 유지합니다.
            </p>
            <p>
              또한, 새로운 기술 도입 시 신중한 검토와 안정성 확보에 주의를
              기울입니다.
            </p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultJava;
