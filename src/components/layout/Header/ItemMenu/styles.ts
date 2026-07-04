import styled from 'styled-components';

export const Container = styled.li`
  a {
    display: block;
    padding: 9px;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 500;

    &:hover,
    .active {
      color: #2a5298;
    }
  }
`;
