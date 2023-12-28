import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import Question1 from "./pages/Question1/index";
import ResultPython from "./pages/ResultPython";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Question1" element={<Question1 />} />
          <Route path="/ResultPython" element={<ResultPython />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
