import React from "react";
import * as S from "../../resultstyle";
import js from "../../assets/result/js.svg";
import Header from "../../components/Header";

const ResultJs = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={js} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>활발하고 리더쉽있는 자바스크립트</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              팀원들과 적극적으로 소통하며 협업을 촉진합니다. 도전적인
              프로젝트에 적극
            </p>
            <p>
              적으로 참여하며, 팀을 이끄는 데 있어서 창의성과 동기부여를
              제공합니다.
            </p>
            <p>
              문제 발생 시 대처 능력이 뛰어나며, 팀원들을 긍정적으로 이끌어
              나가는 데
            </p>
            <p>기여합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultJs;
