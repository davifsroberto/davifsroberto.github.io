import styled from 'styled-components';

export const Container = styled.article`
  padding-bottom: 2em;
  text-align: center;
  color: #fff;

  .head {
    background-color: var(--bs-gray-900);
    padding: 4em 0 3em 0;

    h4 {
      font-size: 1.8rem;
    }

    .img {
      border-radius: 50%;
    }
  }

  .body {
    padding: 1.6em 0 1.3em 0;
    color: var(--bs-gray);
    border: 1px solid var(--bs-gray-900);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    a {
      display: block;
      margin: 0.5em 0;
      color: var(--bs-gray);

      &:hover {
        color: var(--bs-gray-dark);
      }
    }
  }
`;
