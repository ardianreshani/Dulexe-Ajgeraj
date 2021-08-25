import React from "react";
import NavBar from "../componets/NavBar";
import MobileMenu from "../componets/MobileMenu";
const OurServices = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <h1>OurServices</h1>
    </>
  );
};

export default OurServices;
