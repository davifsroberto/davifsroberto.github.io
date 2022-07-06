import styled from 'styled-components';

export const Container = styled.main`
  color: var(--bs-gray);
  background-color: #000;

  h3 {
    color: var(--bs-gray-dark);
  }

  h4,
  h3,
  p {
    animation: opacityDelay 3.5s;
    animation-iteration-count: 1;
  }
`;
