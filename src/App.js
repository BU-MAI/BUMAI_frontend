import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import Main from "./pages/Main/index";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
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
