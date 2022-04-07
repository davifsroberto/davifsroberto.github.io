import styled from 'styled-components';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 3.5em !important;
  background-color: var(--bs-gray-200);
  color: var(--bs-gray);

  h3 {
    color: var(--bs-gray-dark);
  }

  form {
    .inputBox {
      box-sizing: border-box;
      margin-bottom: 50px;

      input,
      textarea {
        width: 100%;
        height: 49px;
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid var(--bs-gray-500);

        & {
          ::-webkit-input-placeholder,
          ::-webkit-input-placeholder {
            color: var(--bs-gray-500);
          }
        }
      }

      textarea {
        min-height: 100px;
        border-radius: 0;
      }
    }

    .button {
      width: 10em;
      height: 2.6em;
      border: none;
      outline: none;
      color: #fff;
      margin: 0 auto;
      display: block;
      background: #385a95;
      transition: 0.5s;
      border-radius: 3px;
      font-size: 1.2rem;

      &:hover {
        background: #46348a;
        transition: 0.5s;
      }
    }

    .profile {
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
          color: var(--bs-gray);
          :hover {
            color: var(--bs-gray-dark);
          }
        }
      }
    }
  }
`;
