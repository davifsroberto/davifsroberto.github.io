import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';

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
    background-color: #000;
  }

  html {
	scroll-behavior: smooth;
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

  .bg-header-default {
    height: 6em;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #000 1%, #1d1a35b5);
    background: linear-gradient(135deg, #000 1%, #1d1a35b5);
  }

  .btn-default {
    color: #fff;
    background: #041822;
    border-radius: 3px;

    &:hover {
      background: transparent;
      border: 1px solid #6669b8;
      color: #6669b8;
    }
  }

  .btn-default-reverse {
    color: #fff;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #041822;
    transition: all 0.9s;


    &:hover {
      background: #041822;
      border: 2px solid #fff;
      color: #fff;
      transition: all 0.9s;
    }
  }

  .btn-default-big {
    font-size: 1.2rem;
    padding: 0.5em 1.2em;
    transition: all 0.5s;

    i {
      transition: all 0.7s;
    }
  }

  @keyframes opacityDelay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  @media (max-width: 340px) {
    .btn-default-big{
     font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
