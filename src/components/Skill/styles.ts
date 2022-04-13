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

  @media (max-width: 845px) {
    h4 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 780px) {
    h4 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 767px) {
    h4 {
      padding-top: 0.5em;
      margin-bottom: 0.1em;
      font-size: 1rem;
    }
  }
`;
