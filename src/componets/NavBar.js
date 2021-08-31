import React from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import LogoSrc from "../images/Logo120.png";
import bars from "../images/Bars.svg";
import phoneIcone from "../images/Phone.svg";
import { motion } from "framer-motion";

const NavBar = ({ toggle }) => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <Link to="/">
        <Logo src={LogoSrc} width="100px" />
      </Link>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <div className="navContainer">
          <NavMenuLinks to="/">Home</NavMenuLinks>
          <NavLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </div>
        <div className="navContainer">
          <NavMenuLinks to="/about">Über Uns</NavMenuLinks>
          <NavLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "50%" : "0%" }}
          />
        </div>
        <div className="navContainer">
          <NavMenuLinks to="/services">Referenzen</NavMenuLinks>
          <NavLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/services" ? "50%" : "0%" }}
          />
        </div>
        <div className="navContainer">
          <NavMenuLinks to="/contact">Kontakt</NavMenuLinks>
          <NavLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </div>

        <PhoneNumber href="tel:0798020201">0798020201</PhoneNumber>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: #fff;
  @media (min-width: 10em) and (max-width: 70em) {
    padding: 1rem;
  }
`;
const NavLinkStyle = css`
  color: black;
  padding: 1rem 2rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 17px;
`;
const Logo = styled.img``;

const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${bars});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  .navContainer {
    position: relative;
  }
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
export const NavLine = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background-color: #5e8016;
  border-radius: 5px;
  position: absolute;
  bottom: -50%;
  left: 15%;
`;
const NavMenuLinks = styled(Link)`
  ${NavLinkStyle}
`;
const PhoneNumber = styled.a`
  ${NavLinkStyle}
  margin-left: 350px;
  padding: 1rem;
  color: #5e8016;
  position: relative;
  @media (min-width: 10em) and (max-width: 70em) {
    display: none;
  }
  &::before {
    content: "";
    width: 50%;
    height: 50%;
    background-image: url(${phoneIcone});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 15px;
    right: 100px;
  }
`;
