import styled from 'styled-components';

export const Container = styled.section<{ $bgBoxShadow: string }>`
  .box {
    position: relative;
    cursor: pointer;
    background: #fff;
    text-align: center;
    text-align: center;
    height: 12.5em;

    figure {
      background: url(${(props) => props.$bgBoxShadow}) no-repeat center center;
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

  .lightbox-overlay {
    align-items: center;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    inset: 0;
    justify-content: center;
    padding: 2rem;
    position: fixed;
    z-index: 1050;
  }

  .lightbox-content {
    height: min(82vh, 900px);
    max-width: 1100px;
    position: relative;
    width: min(92vw, 1100px);
  }

  .lightbox-image {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .lightbox-action {
    align-items: center;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 3px;
    color: #fff;
    display: flex;
    height: 44px;
    justify-content: center;
    position: absolute;
    transition: 0.2s;
    width: 44px;
    z-index: 1;

    &:hover {
      background: #041822;
    }
  }

  .lightbox-close {
    right: 0;
    top: -56px;
  }

  .lightbox-prev,
  .lightbox-next {
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox-prev {
    left: -58px;
  }

  .lightbox-next {
    right: -58px;
  }

  .lightbox-counter {
    bottom: -34px;
    color: #fff;
    font-size: 0.9rem;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
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

    .lightbox-overlay {
      padding: 1rem;
    }

    .lightbox-prev {
      left: 0.5rem;
    }

    .lightbox-next {
      right: 0.5rem;
    }
  }

  @media (max-width: 325px) {
    .box .box-content .title {
      font-size: 0.9rem;
    }
  }
`;
