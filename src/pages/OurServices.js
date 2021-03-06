import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animate";
import { useState, useEffect } from "react";
import { ServisData } from "../data/ServisData";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../componets/Footer";

const OurServices = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(ServisData)
      : setFilteredImages(ServisData.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <ServicesStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div className="tags">
        <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />{" "}
        <TagButton
          name="Renovation"
          tagActive={tag === "Renovation" ? true : false}
          handleSetTag={setTag}
        />{" "}
        <TagButton
          name="Reinigung"
          tagActive={tag === "Reinigung" ? true : false}
          handleSetTag={setTag}
        />{" "}
        <TagButton
          name="Betriebsunterhaltung"
          tagActive={tag === "Betriebsunterhaltung" ? true : false}
          handleSetTag={setTag}
        />{" "}
      </div>
      <SRLWrapper>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id}>
              <a href={image.imageName}>
                <img
                  src={image.imageName}
                  alt={image.tag}
                  width="400px"
                  height="300px"
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
      <Footer />
    </ServicesStyle>
  );
};

export default OurServices;

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

const ServicesStyle = styled(motion.div)`
  padding-top: 5rem;
  text-align: center;
  .tags {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  h1 {
    padding-bottom: 1rem;
  }
  button {
    margin: 2rem 1rem;
    background: white;
    color: black;
    padding: 10px 40px;
    border-radius: 10px;
    outline: none;
    border: 0;
    cursor: pointer;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
    @media screen and (min-width: 300px) and (max-width: 767px) {
      margin: 1rem;
      padding: 10px 25px;
    }
  }
  .container {
    > * div {
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.16);
    }
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px) and (max-width: 1300px) {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 300px) and (max-width: 767px) {
      img {
        width: 300px;
        height: 200px;
        aspect-ratio: 16/9;
      }
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
`;
