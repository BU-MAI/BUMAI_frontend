import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const MainLayout = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10% 30% 0 30%;
  gap: 15px;
`;

export const StartBtn = styled.button`
  width: 40%;
  height: 8vh;
  font-size: 19px;
  background-color: #ff7da5;
  border: none;
  color: white;
  border-radius: 7px;
  cursor: pointer;
`;
