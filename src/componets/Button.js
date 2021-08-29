import styled from "styled-components";
import { Link } from "react-router-dom";
import phoneIcone from "../images/Phone.svg";
import ArrowIcone from "../images/arrow-right.svg";
export const Button = styled(Link)`
  background: #5e8016;
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
  border-radius: 10px;
  padding: 16px 60px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  @media screen and (max-width: 786px) {
    height: 50px;
    padding: 7px 40px;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
  &::active {
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

export const Line = styled.span`
  width: 200px;
  height: 8px;
  background-color: #5e8016;
  border-radius: 5px;
  margin: 3rem 0;
  @media screen and (max-width: 786px) {
    width: 150px;
    margin: 2rem 0;
  }
`;

export const BlueLink = styled(Link)`
  text-decoration: none;
  margin-left: 120px;
  color: #06538f;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5em;
  transition: all ease 300;
  &:hover {
    margin-left: 125px;
  }
  position: relative;
  &::after {
    content: "";
    width: 70%;
    height: 70%;
    background-image: url(${ArrowIcone});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 4px;
    right: -50px;
    &:hover {
      right: -55px;
    }
  }
`;
