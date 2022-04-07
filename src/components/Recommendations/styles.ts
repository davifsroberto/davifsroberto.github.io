import styled from 'styled-components';

import 'react-multi-carousel/lib/styles.css';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 3.5em !important;
  color: var(--bs-gray);

  h3 {
    color: var(--bs-gray-dark);
    a {
      font-size: 1.2rem;
    }
  }

  .testimonial-1 {
    background: #fff;
    padding: 14px;
    color: #000;
    border: 2px solid #46348a;

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
    border: 2px solid #46348a;

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
