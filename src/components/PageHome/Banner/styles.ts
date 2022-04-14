import styled from 'styled-components';

export const Container = styled.section`
  background: url('/assets/images/general/banner.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0.9;
    background: #50217f;
    background-size: cover;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);
  }

  section {
    margin-top: 12em;
    color: #fff;
    position: relative;

    .desc {
      display: block;
      position: relative;
      font-weight: 300;

      &:after {
        position: absolute;
        content: '';
        width: 2em;
        height: 1px;
        background: #fff;
        left: 0;
        top: 1.3em;
      }
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 100;
      animation: opacity 3.5s;
      animation-iteration-count: 1;
    }

    h4,
    h6 {
      font-weight: 300;
    }

    .btn-next {
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      padding: 10px 25px;
      display: inline-block;
      letter-spacing: 1px;
      font-size: 1.2rem;
      font-weight: 200;
      text-align: center;
      width: 10em;

      i {
        font-size: 1.7rem;
        top: 3px;
        position: relative;
        animation: opacity 2.5s;
        animation-iteration-count: infinite;
      }
    }
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-device-height: 640px) {
    section {
      margin-top: 7em;
    }
  }

  @media (max-device-height: 425px) {
    height: 120vh;
    &:before {
      height: 120vh;
    }

    section {
      h2 {
        font-size: 2.5rem;
      }
    }

    .social-media-box {
      margin-top: 1em !important;
    }
  }

  @media (max-device-height: 360px) {
    height: 130vh;
    &:before {
      height: 130vh;
    }
  }

  @media (max-device-width: 375px) {
    section {
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;
