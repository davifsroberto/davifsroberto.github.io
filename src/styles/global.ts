import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyles = createGlobalStyle`
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #c4cad6;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #46348a;
    border-radius: 20px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #385a95;
  }
  /* //custom scrollbar */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .paragraph {
    color: #888;
    font-size: 16px;
    position: relative;
    margin-left: 60px;

    &:after {
      position: absolute;
      content: '';
      width: 50px;
      height: 2px;
      background: #888;
      left: -60px;
      top: 50%;
    }
  }
`;

export default GlobalStyles;
