import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  body {
    align-items: center;
    background-color: #ECECEC;
    color: #000000;
    font-family: "Montserrat", sans-serif;
    flex-direction: column;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
  }
`;