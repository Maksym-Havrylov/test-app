import React from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { NavBar } from "./Components/MainComponents/NavBar";
import { Main } from "./Components/MainComponents/Main";

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Main/>
    </>
  );
}

export default App;
