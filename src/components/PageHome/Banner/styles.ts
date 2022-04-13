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
    background: #50217f;
    background-size: cover;
    opacity: 0.9;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);
  }

  section {
    margin-top: 12em;
    margin-left: 4em;
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
    }

    h4,
    h6 {
      font-weight: 300;
    }

    .btn-go {
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
      }
    }
  }
`;
