import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

import Container from "./Components/Container/Container.jsx";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
