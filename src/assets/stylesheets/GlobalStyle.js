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
  .steps {
    position: absolute;
  }
  .example-enter {
    opacity: 0.01;
    transform: translateY(8px)
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: all 500ms ease-in;
  }

  .example-exit {
    opacity: 1;
    transform: translateY(0px);
  }

  .example-exit.example-exit-active {
    opacity: 0.01;
    transform: translateY(8px);
    transition: all 300ms ease-in;
  }
`;
