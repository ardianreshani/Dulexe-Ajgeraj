import React from "react";
import { Line } from "./Button";
import styled, { css } from "styled-components/macro";
import GalleryOne from "../images/GalleryOne.jpg";
import GalleryTwo from "../images/GalleryTwo.jpg";
import GalleryThree from "../images/GalleryThree.jpg";
import GalleryFour from "../images/GalleryFour.png";
import GalleryFive from "../images/ImageOne.jpg";
import GallerySix from "../images/ImageFive.jpg";
const Gallery = () => {
  return (
    <GalleryBody>
      <Line />
      <h2>Galeri</h2>
      <GalleryWraper>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
        <ImageFore />
        <ImageFive />
        <ImageSix />
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
    height: 150vh;
    padding: 1rem;
    gap: 10px;
  }
`;
const ImageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 968px) {
    width: 50%;
    height: 33vh;
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
