import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  );
}

export default App;
