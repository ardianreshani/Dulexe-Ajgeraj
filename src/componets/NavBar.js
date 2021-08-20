import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import LogoSrc from "../images/Logo120.png";
import { Button } from "./Button";
const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLinkStyle = css`
  color: black;
  padding: 1rem 2rem;
  text-decoration: none;
`;
const Logo = styled.img``;
const MenuBars = styled.i`
  display: none;
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLinkStyle}
`;
const PhoneNumber = styled.a`
  ${NavLinkStyle}
`;
const NavBar = () => {
  return (
    <Nav>
      <Link path="/">
        <Logo src={LogoSrc} width="120px" />
      </Link>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {" "}
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <PhoneNumber href="tel:0798020201">0798020201</PhoneNumber>
    </Nav>
  );
};

export default NavBar;
