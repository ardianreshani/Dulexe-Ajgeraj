import { useState } from "react";
import Hero from "./componets/Hero";
import MobileMenu from "./componets/MobileMenu";
import NavBar from "./componets/NavBar";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
