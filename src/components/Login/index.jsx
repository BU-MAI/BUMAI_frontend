import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setId("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <S.LoginLayout>
        <S.LoginMain>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.InputId
            type="text"
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></S.InputId>
          <S.InputPw
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></S.InputPw>
          <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
        </S.LoginMain>
      </S.LoginLayout>
    </>
  );
};

export default Login;
