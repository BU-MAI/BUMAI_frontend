import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Signup from "./components/Signup/index";
import Login from "./components/Login/index";
import Question1 from "./pages/Question1/index";
import Question2 from "./pages/Question2/index";
import Question3 from "./pages/Question3/index";
import Question4 from "./pages/Question4/index";
import Question5 from "./pages/Question5/index";
import Question6 from "./pages/Question6/index";
import Question7 from "./pages/Question7/index";
import Question8 from "./pages/Question8/index";
import Question9 from "./pages/Question9/index";
import Question10 from "./pages/Question10/index";
import ResultPython from "./pages/Result/python";
import ResultJava from "./pages/Result/java";
import ResultC_Hash from "./pages/Result/c_hash";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/question4" element={<Question4 />} />
          <Route path="/question5" element={<Question5 />} />
          <Route path="/question6" element={<Question6 />} />
          <Route path="/question7" element={<Question7 />} />
          <Route path="/question8" element={<Question8 />} />
          <Route path="/question9" element={<Question9 />} />
          <Route path="/question10" element={<Question10 />} />
          <Route path="/resultpython" element={<ResultPython />} />
          <Route path="/resultjava" element={<ResultJava />} />
          <Route path="/resultc_hash" element={<ResultC_Hash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
