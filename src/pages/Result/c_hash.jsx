import React from "react";
import * as S from "../../resultstyle";
import c_hash from "../../assets/result/c_hash.svg";
import Header from "../../components/Header";

const ResultC_Hash = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={c_hash} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>다재다능하면서 엄격한 C#</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              다양한 기술 스택을 능숙하게 다루며, 다양한 업무에 적응성을
              보입니다. 코드
            </p>
            <p>
              작성 시에는 엄격한 품질 기준을 유지하며, 코드 리뷰와 테스트 주도
              개발을 통
            </p>
            <p>
              해 품질을 최우선으로 합니다. 프로젝트 일정과 목표에 대해 엄격한
              기준을 적
            </p>
            <p>용하여 팀의 생산성과 품질을 높입니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultC_Hash;
