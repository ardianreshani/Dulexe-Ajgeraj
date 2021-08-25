import React from "react";
import NavBar from "../componets/NavBar";
import MobileMenu from "../componets/MobileMenu";
const About = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <h1>About</h1>
    </>
  );
};

export default About;
