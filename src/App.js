import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import Question1 from "./pages/Question2";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Question1" element={<Question1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
`;

export default App;
