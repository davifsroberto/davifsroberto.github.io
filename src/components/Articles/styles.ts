import styled from 'styled-components';

import 'react-multi-carousel/lib/styles.css';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 3.5em !important;
  background-color: var(--bs-gray-200);
  color: var(--bs-gray);

  h3 {
    color: var(--bs-gray-dark);
  }

  .card {
    height: 22em;
    border-radius: 0.3em;

    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h6 {
        font-size: 1.1em;
      }

      p {
        display: flex;
        justify-content: space-between;
      }

      a {
        color: #fff;
        background: #6669b8;
        border-radius: 3px;

        &:hover {
          background: transparent;
          border: 1px solid #6669b8;
          color: #6669b8;
        }
      }
    }

    .bg-article {
      height: 12em;
      height: 10em;
      border-top-right-radius: 0.3em;
      border-top-left-radius: 0.3em;
      background-size: cover !important;
    }
  }
`;
