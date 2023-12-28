import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    setId("");
    setPassword("");
    setName("");
  };

  return (
    <>
      <Header />
      <S.SignupLayout>
        <S.SignupMain>
          <S.SignupTitle>회원가입</S.SignupTitle>
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
          <S.InputName
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></S.InputName>
          <S.SignupBtn onClick={handleSignup}>회원가입</S.SignupBtn>
        </S.SignupMain>
      </S.SignupLayout>
    </>
  );
};

export default Signup;
