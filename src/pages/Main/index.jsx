import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Header from "../../components/Header/index";
import MainImg from "../../assets/Main.svg";

const Main = () => {
  const navigate = useNavigate();

  const navigateToQ1 = () => {
    navigate("/question1");
  };

  return (
    <>
      <Header />
      <S.MainLayout>
        <>
          <img src={MainImg} />
        </>
        <S.StartBtn onClick={navigateToQ1}>검사하기</S.StartBtn>
      </S.MainLayout>
    </>
  );
};

export default Main;
