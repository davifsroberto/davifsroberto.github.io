import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--bs-gray-300);
  color: var(--bs-gray);

  h4,
  h3,
  p {
    animation: opacityDelay 3.5s;
    animation-iteration-count: 1;
  }

  h3,
  h2 {
    color: var(--bs-gray-dark);
  }

  .header {
    top: 3.8em;
    position: relative;

    a {
      font-size: 1.2em;
      transition: all 0.3s;

      i {
        transition: all 0.7s;
      }
    }

    figure {
      background: url('/assets/images/general/perfil_davifsroberto.jpg')
        no-repeat;
      background-size: contain;
      height: 16em;
      border: 0.5em solid #fff;
      -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    }
  }

  .cover-bg {
    border-radius: 10px 10px 0 0;
    opacity: 0.9;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);

    .avatar {
      max-width: 16em;
      max-height: 16em;
      margin-top: 20px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .bg-page {
    background-color: #fff;
    border-radius: 0.6em;
  }

  .about {
    padding-top: 4em;

    .link {
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    .header {
      a {
        color: #6669b8;
      }
    }
  }

  @media (max-width: 375px) {
    .about-item {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 350px) {
    .about-item {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 340px) {
    .about-item {
      font-size: 0.8rem;
    }
  }
`;
