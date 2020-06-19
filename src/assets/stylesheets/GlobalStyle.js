import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    position: relative;
    cursor: default;
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
    background-color: #fdfdfd;
    color: #333;
  }

  [hidden] {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a,
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    outline: none;
  }

  button,
  button:focus {
    outline: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    min-width: 1px !important ;
    min-height: 1px !important ;
  }
`;
