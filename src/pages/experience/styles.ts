import styled from 'styled-components';

export const Container = styled.main`
  color: #fff;

  h3 {
    color: var(--bs-gray);
  }

  h4,
  h3,
  p {
    animation: opacityDelay 3.5s;
    animation-iteration-count: 1;
  }
`;
