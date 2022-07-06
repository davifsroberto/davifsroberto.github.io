import styled from 'styled-components';

import 'react-multi-carousel/lib/styles.css';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 5em !important;
  background-color: #000;
  color: var(--bs-gray-400);

  h4,
  h3 {
    color: var(--bs-gray-400);
  }

  h3 {
    a {
      font-size: 1.4rem;
      color: #fff;
    }
  }

  .testimonial-1 {
    background: #000;
    padding: 1.5em 0.5em;
    color: #fff;
    border: 1px solid;

    p {
      span {
        font: 8.8rem Georgia, serif;
        display: block;
        height: 0.5em;
        color: #46348a;
      }
    }

    .place {
      font-size: 13px;
      color: #988c8c;
    }
  }

  .testimonial-2 {
    .place {
      font-size: 13px;
      color: #fff;
    }

    background: #46348a;
    padding: 14px;
    color: #fff;

    p {
      span {
        font: 8.8rem Georgia, serif;
        display: block;
        height: 0.5em;
      }
    }
  }

  .name {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: -3px;
  }
`;
