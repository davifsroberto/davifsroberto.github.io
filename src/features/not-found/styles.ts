import styled from 'styled-components';

export const Container = styled.main`
  background: #42a5f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;

  h2 {
    animation: opacityDelay 3.5s;
    animation-iteration-count: 1;
    font-weight: 600;
    width: 100%;
    text-align: center;

    strong {
      color: #000;
      font-size: 2.26rem;
    }
  }
`;
