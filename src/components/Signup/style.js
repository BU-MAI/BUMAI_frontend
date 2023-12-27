import styled from "styled-components";

export const SignupLayout = styled.div`
  max-width: 100%;
  display: flex;
  padding: 12% 35% 0 35%;
`;

export const SignupMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
`;

export const SignupTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const InputId = styled.input`
  width: 98%;
  height: 7vh;
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  font-size: 15px;
  padding-left: 8px;
`;

export const InputPw = styled.input`
  width: 98%;
  height: 7vh;
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  font-size: 15px;
  padding-left: 8px;
`;

export const InputName = styled.input`
  width: 98%;
  height: 7vh;
  border-radius: 5px;
  border-width: 1px;
  outline: none;
  font-size: 15px;
  padding-left: 8px;
`;

export const SignupBtn = styled.button`
  width: 100%;
  height: 7vh;
  font-size: 17px;
  border: none;
  background-color: #fc8cb4;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
