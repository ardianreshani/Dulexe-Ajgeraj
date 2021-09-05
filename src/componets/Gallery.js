import React from "react";
import { Line } from "./Button";
import styled, { css } from "styled-components/macro";
import GalleryOne from "../images/GalleryOne.jpg";
import GalleryTwo from "../images/GalleryTwo.jpg";
import GalleryThree from "../images/GalleryThree.jpg";
import GalleryFour from "../images/GalleryFour.jpg";
import GalleryFive from "../images/ImageOne.jpg";
import GallerySix from "../images/ImageFive.jpg";
import { Link } from "react-router-dom";
const Gallery = () => {
  return (
    <GalleryBody>
      <Line />
      <h2>Galeri</h2>
      <GalleryWraper>
        <ImageOne>
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageOne>
        <ImageTwo>
          {" "}
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageTwo>
        <ImageThree>
          {" "}
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageThree>
        <ImageFore>
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageFore>
        <ImageFive>
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageFive>
        <ImageSix>
          <Overlay>
            <HoverLink to="/service">Mehr sehen</HoverLink>
          </Overlay>{" "}
        </ImageSix>
      </GalleryWraper>
    </GalleryBody>
  );
};

export default Gallery;

const GalleryBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 8rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const GalleryWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "one six four"
    "one six four"
    "two six five"
    "two three five"
    "two three five";
  gap: 20px;
  height: 100vh;
  padding: 2rem;
  @media (min-width: 40em) and (max-width: 70em) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    padding: 1rem;
    gap: 10px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.6);
`;
const HoverLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all ease 300;
  transform: translate(-50%, -50%);
  text-align: center;
  &:hover {
    font-size: 21px;
  }
`;
const ImageStyle = css`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  transition: all ease 300;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
  &:hover ${Overlay} {
    opacity: 1;
    transform: scale(1);
  }
  @media screen and (max-width: 968px) {
    width: 50%;
    height: 25vh;
    background-position: center;
    grid-area: unset;
  }
`;

const ImageOne = styled.div`
  ${ImageStyle}
  grid-area: one;
  background-image: url(${GalleryOne});
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageTwo = styled.div`
  ${ImageStyle}
  grid-area: two;
  background-image: url(${GalleryTwo});
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageThree = styled.div`
  ${ImageStyle}
  grid-area: six;
  background-image: url(${GallerySix});
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageFore = styled.div`
  ${ImageStyle}
  grid-area: three;
  background-image: url(${GalleryFour});
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageFive = styled.div`
  ${ImageStyle}
  grid-area: four;
  background-image: url(${GalleryFive});
  background-size: cover;
  background-repeat: no-repeat;
`;
const ImageSix = styled.div`
  ${ImageStyle}
  grid-area: five;
  background-image: url(${GalleryThree});
  background-size: cover;
  background-repeat: no-repeat;
`;
