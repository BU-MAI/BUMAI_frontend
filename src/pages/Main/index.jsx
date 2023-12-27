import * as S from "./style";
import Header from "../../components/Header/index";
import MainImg from "../../assets/Main.svg";

const Main = () => {
  return (
    <>
      <Header />
      <S.MainLayout>
        <>
          <img src={MainImg} />
        </>
        <S.StartBtn>검사하기</S.StartBtn>
      </S.MainLayout>
    </>
  );
};

export default Main;
