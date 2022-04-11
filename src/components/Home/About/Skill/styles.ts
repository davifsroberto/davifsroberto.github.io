import styled from 'styled-components';

export const Container = styled.article`
  color: var(--bs-gray);

  h4 {
    font-size: 1rem;
    letter-spacing: 1px;
    line-height: inherit;
  }

  .progress {
    font-size: 0.75em;
    line-height: 8em;
    text-align: center;
    background-color: var(--bs-gray-400);
    border-radius: 0.25rem;
    margin-bottom: 1em;
    height: 0.5em;
    animation-fill-mode: both;
  }
`;
