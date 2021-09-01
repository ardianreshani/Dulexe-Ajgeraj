import React from "react";
import styled from "styled-components";
import { Line } from "./Button";
import { WhatWeAre } from "./WhatWeAreOffering";
import QualityImg from "../images/winner.svg";
import IntegrityImg from "../images/home-decor.svg";
import ReliabilityImg from "../images/badge.svg";
import MastersImg from "../images/carpenter.svg";
const Whyus = () => {
  return (
    <WhyusStyle>
      <Line />
      <h2>Warum uns wählen</h2>
      <WhyUsContainer>
        <div className="title">
          <h2>
            Wir sind ein Familienunternehmen mit über 10 Jahren Erfahrung.
          </h2>
          <p>Wir führen unsere Arbeit mit Qualität und mit Herz aus.</p>
        </div>
        <div className="items">
          <div className="itemOne">
            <img src={QualityImg} alt="Quality Logo" width="120px" />
            <div className="content">
              <h3>Qualität</h3>
              <p>
                Bei der Ausführung der Arbeiten verwenden wir hochwertige
                Naturmaterialien mit nachgewiesener Herkunft. Alle gelieferten
                Pflanzen sind Schweiz Ursprungs, ebenso der Boden, dessen
                Zusammensetzung dem Verwendungszweck angepasst wird.
              </p>
            </div>
          </div>

          <div className="itemTwo">
            <img src={IntegrityImg} alt="Integrity Logo" width="120px" />
            <div className="content">
              <h3>Integrität</h3>
              <p>
                Wir bieten verschiedene Arten von Dienstleistungen an, die Ihnen
                die Pflege erleichtern Renovation,Umbau,Reinigung,
                Fugenbedichtung,Silikon,Betriebsunterhaltung
              </p>
            </div>
          </div>
          <div className="itemThree">
            <img src={ReliabilityImg} alt="Reliability Logo" width="120px" />
            <div className="content">
              <h3>Zuverlässigkeit</h3>
              <p>
                Die Umsetzung jedes Projekts wird von den vertrauensvollen
                Händen und den akribischen Augen des Unternehmers sorgfältig
                überwacht.
              </p>
            </div>
          </div>
          <div className="itemFour">
            <img src={MastersImg} alt="Masters Logo" width="120px" />
            <div className="content">
              <h3>Meister</h3>
              <p>
                {" "}
                Wir streben nach Perfektion in jeder Arbeit, die wir tun.
                Basierend auf 10 Jahren Erfahrung vertrauen sowohl Stammkunden
                als auch Neukunden jedes Jahr der Umgebung ihrer Häuser.
              </p>
            </div>
          </div>
        </div>
      </WhyUsContainer>
    </WhyusStyle>
  );
};

export default Whyus;

const WhyusStyle = styled(WhatWeAre)`
  background-color: #d7dfc5;
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  margin: 0 2rem;
  color: #262626;
`;
const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  .title {
    padding: 1.5rem;
    text-align: center;
    h2 {
      padding: 0.5rem 0;
    }
  }
  .items {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    .itemOne,
    .itemTwo,
    .itemThree,
    .itemFour {
      flex: 1;
      margin-left: 1rem;
    }
    @media (min-width: 10em) and (max-width: 70em) {
      flex-direction: column;
      flex-wrap: wrap;
      width: 70%;
    }
  }
  .content {
    padding-bottom: 1.5rem;
    h3 {
      padding: 1rem;
    }
    p {
      padding: 1rem 0;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;
