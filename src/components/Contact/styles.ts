import styled from 'styled-components';

export const Container = styled.article`
  padding-top: 3.5em !important;
  padding-bottom: 3.5em !important;
  background-color: #222;
  color: var(--bs-gray-500);

  h4,
  h3 {
    color: var(--bs-gray-400);
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
        color: #fff;

        & {
          ::-webkit-input-placeholder,
          ::-webkit-input-placeholder {
            color: var(--bs-gray-500);
          }
        }
      }

      textarea {
        min-height: 139.1px;
        border-radius: 0;
      }
    }
  }

  button {
    width: 10em;
    height: 2.6em;
    margin: 0 auto;
    display: block;
    font-size: 1.2rem;
  }
`;
