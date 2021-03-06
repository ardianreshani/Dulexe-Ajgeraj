import React from "react";
import { Line } from "./Button";
import styled from "styled-components";
import Asset1 from "../images/Asset 1.png";
import Asset2 from "../images/Asset 2.png";
import Asset3 from "../images/Asset 3.png";
import { BlueLink } from "./Button";

const WhatWeAreOffering = () => {
  return (
    <WhatWeAre>
      <Line />
      <h2>Unsere Leistungen</h2>
      <CardWraper>
        <Card>
          <CardImg
            src={Asset1}
            alt="Logo"
            width="220px"
            height="auto"
          ></CardImg>
          <CardTitle>Renovation und Umbau </CardTitle>
          <BlueLink to="/services">Lern mehr</BlueLink>
        </Card>
        <Card className="middel">
          <CardImg
            src={Asset2}
            alt="Logo"
            width="180px"
            height="auto"
          ></CardImg>
          <CardTitle>Reinigung </CardTitle>
          <BlueLink to="/services">Lern mehr</BlueLink>
        </Card>
        <Card>
          <CardImg
            src={Asset3}
            alt="Logo"
            width="220px"
            height="auto"
          ></CardImg>
          <CardTitle>Betriebsunterhaltung</CardTitle>
          <BlueLink to="/services">Lern mehr</BlueLink>
        </Card>
      </CardWraper>
    </WhatWeAre>
  );
};

export default WhatWeAreOffering;
export const WhatWeAre = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 8rem;
  @media (min-width: 300px) and (max-width: 786px) {
    padding: 1rem 2rem;
  }
`;
const CardWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .middel {
    @media (min-width: 300px) and (max-width: 550px) {
      img {
        width: 220px;
      }
    }
  }
`;
const Card = styled.div`
  flex: 1;
  max-width: 325px;
  width: 325px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  padding: 2rem;
  margin: 2rem auto;
  transition: all ease 300;

  @media (min-width: 1100px) and (max-width: 1300px) {
    margin: 1rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
const CardImg = styled.img``;
const CardTitle = styled.h3``;
