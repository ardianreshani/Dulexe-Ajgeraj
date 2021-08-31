import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family:'Roboto' ,sans-serif ;
    }
    html, body{
        overflow-x: hidden; 
    }
    .copyright {
    background-color: #272726;
    color: White;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    a{
        font-weight: bold;
        font-family: "Cinzel Decorative", cursive;
        color: #fff;
        text-decoration: none;
    }
  }
`;

export default GlobalStyle;
