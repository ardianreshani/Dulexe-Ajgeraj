import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import LogoSrc from "../images/Logo120.png";
import bars from "../images/Bars.svg";
import phoneIcone from "../images/Phone.svg";
// import { Button } from "./Button";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <Link path="/">
        <Logo src={LogoSrc} width="100px" />
      </Link>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {" "}
            {item.title}
          </NavMenuLinks>
        ))}
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 786px) {
    display: none;
  }
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
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
