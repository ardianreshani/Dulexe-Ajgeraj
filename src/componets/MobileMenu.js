import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { PhoneNumber } from "./Button";
const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
  @media screen and (min-width: 786px) {
    display: none;
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
`;
const Mobilemenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
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
const MobileMenu = ({ toggle, isOpen }) => {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <ColseIcone />
      </Icon>
      <MobileMenuWrapper>
        <Mobilemenu>
          {menuData.map((item, index) => {
            return (
              <MenuLink to={item.link} key={index}>
                {item.title}
              </MenuLink>
            );
          })}
        </Mobilemenu>
        <BtnWraper>
          <PhoneNumber href="tel:0798020201">0798020201</PhoneNumber>
        </BtnWraper>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
