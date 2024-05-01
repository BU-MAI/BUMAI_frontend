import React from "react";
import * as S from "../../resultstyle";
import c_plus from "../../assets/result/c_plus.svg";
import Header from "../../components/Header";

const ResultC_Plus = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={c_plus} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>뛰어난 능력을 가진 C++</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              기술적인 업무에서 높은 숙련도를 보이며, 복잡한 문제에 대한 탁월한
              해결 능
            </p>
            <p>
              력을 갖춥니다. 팀 내에서 지도력을 발휘하며 동료들을 영감시키고,
              효과적인
            </p>
            <p>
              커뮤니케이션으로 프로젝트의 전체적인 성과를 높이는 데 기여합니다.
            </p>
            <p>
              지속적인 학습과 업무에 대한 열정으로 업계의 동향을 선도하며
              혁신적인
            </p>
            <p>솔루션을 제시합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultC_Plus;
