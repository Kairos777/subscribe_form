import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "./styles/index.css";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
