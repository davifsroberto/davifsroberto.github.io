import styled from 'styled-components';

export const Container = styled.ul`
  padding-left: 0;

  li {
    display: inline-block;
  }

  a {
    margin-right: 4px;
    width: 40px;
    height: 40px;
    display: block;
    background: #3b5fa1;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transition-duration: 0.4s;
    transition-property: transform;

    &:hover {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }

    span.fa {
      color: #fff;
      font-size: 13.5px;
      line-height: 40px;
    }
  }
`;
