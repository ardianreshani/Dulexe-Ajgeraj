import styled from "styled-components";
import { Link } from "react-router-dom";
import phoneIcone from "../images/Phone.svg";
export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "cd853f")};
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000dia")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  &:hover {
    transform: translateY(-2px);
  }
`;

export const PhoneNumber = styled.a`
  padding: 1rem 2rem;
  font-weight: 500;
  text-decoration: none;
  font-size: 17px;
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
  /* @media screen and (max-width: 786px) {
    display: none;
  } */
`;
