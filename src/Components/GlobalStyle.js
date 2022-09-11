import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #FFE6E6;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    width: 4px;
    background: #8B98C6;
    border-radius: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decottion: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;