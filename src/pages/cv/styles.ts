import styled from 'styled-components';

export const Container = styled.main`
  background-color: var(--bs-gray-300);
  color: var(--bs-gray);

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
  }

  .cover-bg {
    border-radius: 10px 10px 0 0;
    opacity: 0.9;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);

    .avatar {
      max-width: 216px;
      max-height: 216px;
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
    padding-top: 3.8em;

    .link {
      text-decoration: underline;
    }
  }
`;
