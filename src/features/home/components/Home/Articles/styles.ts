import styled from 'styled-components';

import 'react-multi-carousel/lib/styles.css';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 5em !important;
  background-color: #222;
  color: var(--bs-gray-500);

  h4,
  h3 {
    color: var(--bs-gray-400);
  }

  .card {
    height: 22em;
    border-radius: 0.3em;

    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #222;
      border-bottom-right-radius: 0.3em;
      border-bottom-left-radius: 0.3em;

      h6 {
        font-size: 1.1em;
      }

      p {
        display: flex;
        justify-content: space-between;
      }
    }

    .bg-article {
      height: 10em;
      border-top-right-radius: 0.3em;
      border-top-left-radius: 0.3em;
      background: linear-gradient(135deg, #041822 0%, #46348a 100%);
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
    }
  }
`;
