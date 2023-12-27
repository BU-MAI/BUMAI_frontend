import * as S from "./style";
import Header from "../Header";

const Signup = () => {
  return (
    <>
      <Header />
      <S.SignupLayout>
        <S.SignupMain>
          <S.SignupTitle>회원가입</S.SignupTitle>
          <S.InputId type="text" placeholder="id"></S.InputId>
          <S.InputPw type="password" placeholder="password"></S.InputPw>
          <S.InputName type="text" placeholder="이름"></S.InputName>
          <S.SignupBtn>회원가입</S.SignupBtn>
        </S.SignupMain>
      </S.SignupLayout>
    </>
  );
};

export default Signup;
