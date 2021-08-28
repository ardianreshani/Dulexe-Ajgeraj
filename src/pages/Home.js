import React from "react";
import Gallery from "../componets/Gallery";
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
      <Gallery />
    </>
  );
};

export default Home;
