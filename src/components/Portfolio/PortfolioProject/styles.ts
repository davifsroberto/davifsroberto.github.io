import styled from 'styled-components';

export const Container = styled.section<{ bgBoxShadow: string }>`
  .box {
    position: relative;
    cursor: pointer;
    background: #fff;
    text-align: center;
    text-align: center;
    height: 12.5em;

    figure {
      background: url(${(props) => props.bgBoxShadow}) no-repeat center center;
      background-size: cover;
      width: 100%;
      height: 12.5em;
    }

    .box-content {
      background: rgba(0, 0, 0, 0.85);
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: 0.5s;

      &:hover {
        opacity: 1;
        transition: 0.5s;
      }

      .title {
        color: #fff;
        position: absolute;
        margin: -2em 0;
        bottom: 55%;
        font-size: 1.6rem;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .box .box-content .title {
      top: 3em;
    }
  }

  @media (max-width: 545px) {
    .box .box-content .title {
      font-size: 1rem;
    }
  }

  @media (max-width: 325px) {
    .box .box-content .title {
      font-size: 0.9rem;
    }
  }
`;
