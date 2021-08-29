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
              <h3>Quality</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing.But I must explain to you how all this mistaken idea
                of denouncing.
              </p>
            </div>
          </div>

          <div className="itemTwo">
            <img src={IntegrityImg} alt="Integrity Logo" width="120px" />
            <div className="content">
              <h3>Integrity</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing.But I must explain to you how all this mistaken idea
                of denouncing.
              </p>
            </div>
          </div>
          <div className="itemThree">
            <img src={ReliabilityImg} alt="Reliability Logo" width="120px" />
            <div className="content">
              <h3>Reliability</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing.But I must explain to you how all this mistaken idea
                of denouncing.
              </p>
            </div>
          </div>
          <div className="itemFour">
            <img src={MastersImg} alt="Masters Logo" width="120px" />
            <div className="content">
              <h3>Masters</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing.But I must explain to you how all this mistaken idea
                of denouncing.
              </p>
            </div>
          </div>
        </div>
      </WhyUsContainer>
    </WhyusStyle>
  );
};

export default Whyus;

const WhyusStyle = styled(WhatWeAre)``;
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
    align-items: center;
    text-align: center;
  }
  .content {
    h3 {
      padding: 1rem;
    }
  }
`;
