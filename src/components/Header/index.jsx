import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/Login");
  };
  const navigateToSignup = () => {
    navigate("/Signup");
  };
  return (
    <>
      <S.Container>
        <S.Logo onClick={navigateToMain}>부마아이</S.Logo>
        <S.Font>
          <S.Login onClick={navigateToLogin}>로그인</S.Login>
          <S.Signup onClick={navigateToSignup}>회원가입</S.Signup>
        </S.Font>
      </S.Container>
    </>
  );
};

export default Header;
