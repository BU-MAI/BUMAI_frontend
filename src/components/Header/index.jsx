import * as S from "./style";

const Header = () => {
  return (
    <>
      <S.Container>
        <S.Logo>부마아이</S.Logo>
        <S.Font>
          <S.Login>로그인</S.Login>
          <S.Signup>회원가입</S.Signup>
        </S.Font>
      </S.Container>
    </>
  );
};

export default Header;
