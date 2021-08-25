import React from "react";
import Hero from "../componets/Hero";
import MobileMenu from "../componets/MobileMenu";
import NavBar from "../componets/NavBar";
import WhatWeAreOffering from "../componets/WhatWeAreOffering";

const Home = ({ toggle, isOpen, slides }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <Hero slides={slides} />
      <WhatWeAreOffering />
    </>
  );
};

export default Home;
