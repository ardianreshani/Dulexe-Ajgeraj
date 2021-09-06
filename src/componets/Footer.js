import React from "react";
import { menuData } from "../data/MenuData";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import LogoFooter from "../images/Logo120.png";
import Map from "../images/placeholder.png";
import Phone from "../images/phone-call.png";
import Email from "../images/envelope.png";
import FbIcone from "../images/facebook.png";
import InstagramICon from "../images/instagram.png";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <FooterStyle>
        <div className="logofooter">
          <img src={LogoFooter} alt="Logo Footer" width="150px" height="80px" />
        </div>
        <div className="menu">
          <nav>
            <h3>Menu</h3>
            {menuData.map((item, i) => (
              <NavLinkStyles to={item.link} key={i}>
                {item.title}
              </NavLinkStyles>
            ))}
          </nav>
        </div>
        <div className="contact">
          <h3>Kontakt</h3>
          <div className="contact-items">
            <img src={Map} alt="Maplogo" width="34px" height="34px" />
            <p>
              Deluxe Ajgeraj
              <br /> Ländlistrasse 10, <br />
              3047 Bremgarten bei Bern
            </p>
          </div>
          <div className="contact-items">
            <img src={Phone} alt="Phonelogo" width="34px" height="34px" />
            <p>0798020201</p>
          </div>
          <div className="contact-items">
            <img src={Email} alt="Emaillogo" width="34px" height="34px" />
            <p>info@deluxeajgeraj.ch</p>
          </div>
          <div className="contact-items">
            <Link to="https://www.facebook.com/Deluxe-Ajgeraj-107207164985989">
              <img src={FbIcone} alt="FbIcone" width="34px" />
            </Link>
            <Link to="#">
              <img src={InstagramICon} alt="InstagramICon" width="34px" />
            </Link>
          </div>
        </div>
      </FooterStyle>
      <div className="copyright">
        <p>
          &copy; Copyright <span id="year">{getYear()}</span> | by{" "}
          <Link to="www.ardian.io">Ardian</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
const NavLinkStyles = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.35rem 0;
  color: #262626;
`;
const FooterStyle = styled.div`
  background-color: #d7dfc5;
  color: #262626;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  @media (min-width: 10em) and (max-width: 70em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logofooter {
      padding-bottom: 2rem;
    }
    .menu {
      padding-bottom: 2rem;
    }
    .contact {
      text-align: center;
    }
    .contact-items {
      justify-content: center;
      text-align: left;
      @media (min-width: 10em) and (max-width: 70em) {
        p {
          font-size: 1.1rem;
        }
      }
    }
    .contact-items:nth-child(3) {
      p {
        padding-right: 100px;
      }
    }
    .contact-items:nth-child(4) {
      p {
        padding-right: 20px;
      }
    }
  }
  .logofooter {
    flex: 1;
  }
  .menu {
    flex: 1;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  .contact {
    flex: 1;
    h3 {
      padding-bottom: 0.35rem;
    }
  }
  .contact-items {
    display: flex;
    align-items: center;
    padding: 0.6rem 0;
    p {
      font-size: 1.1rem;
    }
    img {
      margin-right: 0.7rem;
      object-fit: cover;
    }
  }
`;
