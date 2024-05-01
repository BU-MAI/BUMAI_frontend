import React from "react";
import * as S from "../../style";
import swift from "../../assets/result/swift.svg";
import Header from "../../components/Header";

const ResultSwift = () => {
  return (
    <>
      <Header />
      <S.ResultMain>
        <img src={swift} style={{ width: "300px" }} />
        <S.ResultText>
          <S.ResultTitle>
            <p>당신은</p>
            <S.BigText>트렌디하고 적극적인 Swift</S.BigText>
          </S.ResultTitle>
          <S.ResultDes>
            <p>
              최신 기술과 트렌드에 대한 열정을 갖고 있으며, 신속한 적응력으로
              새로운 도
            </p>
            <p>
              구와 프레임워크를 효과적으로 사용합니다. 열린 의사소통으로 팀의
              상호작용
            </p>
            <p>
              을 촉진하고, 새로운 아이디어를 적극적으로 제안하여 프로젝트에
              창의성을
            </p>
            <p>
              불어넣습니다. 도전적인 과제에 대한 열정과 긍정적인 태도로 팀을
              이끄는 데
            </p>
            <p>기여합니다.</p>
          </S.ResultDes>
        </S.ResultText>
      </S.ResultMain>
    </>
  );
};

export default ResultSwift;
