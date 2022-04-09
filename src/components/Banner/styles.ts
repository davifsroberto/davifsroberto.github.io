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
    margin: 12em 0 9em;
    color: #fff;
    position: relative;

    h6 {
      margin-bottom: 30px;
      position: relative;
      font-weight: 300;

      &:after {
        position: absolute;
        content: '';
        width: 8%;
        height: 1px;
        background: #fff;
        left: 0;
        bottom: -70%;
      }
    }

    h2 {
      font-size: 3.6rem;
    }

    .btn-go {
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      padding: 10px 25px;
      display: inline-block;
      margin-top: 2em;
      letter-spacing: 1px;
      font-size: 1.2rem;
      font-weight: 600;
      width: 7em;
      text-align: center;
    }
  }
`;
