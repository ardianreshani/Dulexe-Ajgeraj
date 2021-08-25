import React from "react";
import NavBar from "../componets/NavBar";
import MobileMenu from "../componets/MobileMenu";
const Contact = ({ toggle, isOpen }) => {
  return (
    <>
      <NavBar toggle={toggle} />
      <MobileMenu toggle={toggle} isOpen={isOpen} />
      <h1>Contact</h1>
    </>
  );
};

export default Contact;
