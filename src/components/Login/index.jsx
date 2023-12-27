import * as S from "./style";
import Header from "../Header";

const Login = () => {
  return (
    <>
      <Header />
      <S.LoginLayout>
        <S.LoginMain>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.InputId type="text" placeholder="id"></S.InputId>
          <S.InputPw type="password" placeholder="password"></S.InputPw>
          <S.LoginBtn>로그인</S.LoginBtn>
        </S.LoginMain>
      </S.LoginLayout>
    </>
  );
};

export default Login;
