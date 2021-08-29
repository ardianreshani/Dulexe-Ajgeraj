import React from "react";
import Gallery from "../componets/Gallery";
import Hero from "../componets/Hero";
import MobileMenu from "../componets/MobileMenu";
import NavBar from "../componets/NavBar";
import WhatWeAreOffering from "../componets/WhatWeAreOffering";
import Whyus from "../componets/Whyus";

const Home = ({ toggle, isOpen, slides }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <Hero slides={slides} />
      <WhatWeAreOffering />
      <Whyus />
      <Gallery />
    </>
  );
};

export default Home;
