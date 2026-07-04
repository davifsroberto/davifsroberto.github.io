import styled from 'styled-components';

export const Container = styled.section`
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9;
    position: fixed;
    cursor: pointer;
    inset: 0;
    zoom: 1.2;

    span {
      position: absolute;
      text-align: center;
      color: #fff;
      width: 100%;
      bottom: 1em;
      font-weight: 200;
      font-size: 1.4rem;
    }

    .pac-man {
      position: absolute;
      top: 50%;
      left: 30%;
      font-size: 50px;
      color: white;
      border-radius: 50%;
      margin: 0 auto;
      border-radius: 100em 100em 0 0;
      transform-origin: bottom;
      animation: eating-top 0.5s infinite;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);

      &,
      &::before {
        width: 70px;
        height: calc(70px / 2);
        background: #fed75a;
      }

      &::before {
        content: '';
        display: block;
        margin-top: calc(70px / 2);
        position: absolute;
        transform-origin: top;
        border-radius: 0 0 100em 100em;
        transform: rotate(80deg);
        animation: eating-bottom 0.5s infinite;
      }

      &::after {
        position: absolute;
        border-radius: 100em;
        content: '';
        display: block;
        height: 20px;
        width: 20px;
        margin-top: calc((70px / 2) - 10px);
        margin-left: calc((70px / 2) - 10px);
        transform-origin: center;
        animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
      }
    }
  }

  @keyframes eating-top {
    0% {
      transform: rotate(-40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-40deg);
    }
  }

  @keyframes eating-bottom {
    0% {
      transform: rotate(80deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(80deg);
    }
  }

  @keyframes center {
    0% {
      transform: rotate(40deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(40deg);
    }
  }

  @keyframes ball {
    0% {
      opacity: 0.7;
      box-shadow: 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a, 170px 0 0 0 #fed75a,
        220px 0 0 0 #fed75a;
    }

    100% {
      box-shadow: 20px 0 0 0 #fed75a, 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a,
        170px 0 0 0 #fed75a;
    }
  }
`;
