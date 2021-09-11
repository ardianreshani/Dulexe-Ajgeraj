import React from "react";
import styled from "styled-components";
import imageError from "../images/error404.svg";
import Footer from "./Footer";
import { Button } from "./Button";
const Error404 = () => {
  return (
    <>
      <Error404Styled>
        <img src={imageError} alt="Error404" width="150px" height="200px" />
        <h1>
          <span className="error404">Error 404</span> - Looks like you're lost.
        </h1>
        <p>
          Maybe this page used to exist or you just spelled something wrong.
        </p>
        <p>
          Chances are you spelled something wrong, so can you double check the
          URL?
        </p>
        <Error404Button to="/">Return Home</Error404Button>
      </Error404Styled>
      <Footer />
    </>
  );
};

export default Error404;

const Error404Styled = styled.div`
  width: 100%;
  height: calc(90vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    margin-top: 5rem;
  }
  .error404 {
    color: #5e8016;
  }
  h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    padding: 1rem 0;
  }
  p {
    font-size: 1.2rem;
    padding-bottom: 0.3rem;
  }
  @media screen and (max-width: 425px) {
    text-align: center;
    img {
      margin-top: 3.5rem;
      width: 100px;
      height: 155px;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
const Error404Button = styled(Button)`
  margin-top: 1rem;
  padding: 16px 40px;
  margin-bottom: 6rem;
  @media screen and (max-width: 425px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;
