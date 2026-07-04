import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  a {
    text-align: center;
    position: absolute;
    right: 1%;
    bottom: 0%;

    span {
      color: #fff;
      width: 40px;
      height: 40px;
      border: 2px solid #4d2b82;
      line-height: 2.3em;
      background: #4d2b82;
      border-radius: 50px;
      -webkit-border-radius: 50px;
      -o-border-radius: 50px;
      -moz-border-radius: 50px;
      -ms-border-radius: 50px;
      transition: all 0.3s ease 0s;

      &:hover {
        background: transparent;
        border: 2px solid #4d2b82;
        transition: all 0.3s ease 0s;
      }
    }
  }
`;
