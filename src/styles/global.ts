import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

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

    &:hover {
      background-color: #385a95;
    }
  }
  /* //custom scrollbar */

  /* remove arrows input number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
  /* //remove arrows input number */

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

  .bg-default {
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);
  }

  .btn-default {
    color: #fff;
    background: #6669b8;
    border-radius: 3px;

    &:hover {
      background: transparent;
      border: 1px solid #6669b8;
      color: #6669b8;
    }
  }
`;

export default GlobalStyles;
