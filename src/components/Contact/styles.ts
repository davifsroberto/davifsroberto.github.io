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
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
  }
`;
