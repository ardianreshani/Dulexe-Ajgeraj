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
          <CardImg src={Asset1} alt="Logo" width="220px"></CardImg>
          <CardTitle>Renovation und Umbau </CardTitle>
          <BlueLink to="/services">Lern mehr</BlueLink>
        </Card>
        <Card>
          <CardImg src={Asset2} alt="Logo" width="180px"></CardImg>
          <CardTitle>Reinigung </CardTitle>
          <BlueLink to="/services">Lern mehr</BlueLink>
        </Card>
        <Card>
          <CardImg src={Asset3} alt="Logo" width="220px"></CardImg>
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
  @media (min-width: 10em) and (max-width: 70em) {
    padding: 1rem;
  }
`;
const CardWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

  &:hover {
    transform: scale(1.05);
  }
`;
const CardImg = styled.img``;
const CardTitle = styled.h3``;
