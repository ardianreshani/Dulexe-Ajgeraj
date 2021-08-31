import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button, Line } from "./Button";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <Line />
                    <HeroTitle>
                      Delu<span className="x">x</span>e <br></br>
                      <span className="small">Ajgeraj</span>
                    </HeroTitle>
                    <HeroSubTitle>{slide.subtitle}</HeroSubTitle>
                    <BtnWraper>
                      <Button to="/contact">Contact </Button>
                    </BtnWraper>
                    <Arrow />
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
const HeroSection = styled.section`
  padding-top: 60px;
  height: calc(90vh - 60px);
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 786px) {
    height: calc(80vh - 70px);
  }
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 8rem;
  @media (min-width: 10em) and (max-width: 70em) {
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background-color: rgba(0, 0, 0, 9);
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% -100px);
  color: #fff;
  h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;
const Arrow = styled.div``;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
  @media screen and (max-width: 786px) {
    bottom: 30px;
    right: 20px;
  }
`;

const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #000;
  border-radius: 50%;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  @media screen and (max-width: 786px) {
    width: 40px;
    height: 40px;
  }
  &:hover {
    background-color: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${ArrowButtons}
`;
const NextArrow = styled(IoArrowForward)`
  ${ArrowButtons}
`;
const BtnWraper = styled.div`
  display: flex;
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  font-family: "Cinzel Decorative", cursive;
  line-height: 1em;

  .x {
    font-family: "Cinzel Decorative", cursive;
    color: #5e8016;
  }
  .small {
    margin-left: 3.5rem;
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 786px) {
    font-size: 2rem;
    padding-bottom: 1rem;
    letter-spacing: 0.1;
    .small {
      font-size: 1.5rem;
      margin: 1.5rem;
    }
  }
`;
const HeroSubTitle = styled.h4`
  font-size: 1.3rem;
  line-height: 1.4em;
  width: 50%;
  font-weight: 400;
  padding-bottom: 2rem;
  @media screen and (max-width: 786px) {
    font-size: 0.9rem;
    width: 80%;
    padding-bottom: 2.5rem;
  }
`;
