import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components/macro";
import { PhoneNumber } from "./Button";
import { motion } from "framer-motion";
import { NavLine } from "./NavBar";

const MobileMenu = ({ toggle, isOpen }) => {
  const { pathname } = useLocation();
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <ColseIcone />
      </Icon>
      <MobileMenuWrapper>
        <Mobilemenu>
          <div className="navContainer">
            <MenuLink to="/" isOpen={isOpen} onClick={toggle}>
              Home
            </MenuLink>
            <MobileNavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "70%" : "0%" }}
            />
          </div>
          <div className="navContainer">
            <MenuLink to="/about" isOpen={isOpen} onClick={toggle}>
              Über Uns
            </MenuLink>
            <MobileNavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/about" ? "70%" : "0%" }}
            />
          </div>
          <div className="navContainer">
            <MenuLink to="/services" isOpen={isOpen} onClick={toggle}>
              Referenzen
            </MenuLink>
            <MobileNavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/services" ? "70%" : "0%" }}
            />
          </div>
          <div className="navContainer">
            <MenuLink to="/contact" isOpen={isOpen} onClick={toggle}>
              Kontakt
            </MenuLink>
            <MobileNavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "70%" : "0%" }}
            />
          </div>
        </Mobilemenu>
        <BtnWraper>
          <PhoneNumber href="tel:0798020201">0798020201</PhoneNumber>
        </BtnWraper>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};
const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
  @media screen and (min-width: 786px) {
    display: none;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const ColseIcone = styled(FaTimes)`
  color: #000d1a;
`;
const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Mobilemenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  .navContainer {
    position: relative;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
`;
const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MobileNavLine = styled(NavLine)`
  bottom: 50%;
  left: 20%;
`;
export default MobileMenu;
