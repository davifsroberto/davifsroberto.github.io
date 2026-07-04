import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  width: 100%;
  z-index: 2;

  .navbar {
    padding: 1.03em 2em;
    border-bottom: 1px solid rgba(243, 242, 242, 0.41);
  }
`;

export const Logo = styled.h1`
  background: url('/assets/images/general/davifsroberto-logo.png') no-repeat
    center;
  background-size: contain;
  cursor: pointer;
  height: 2em;
  width: 2.8em;
  margin-bottom: 0;
  font-size: 2em;
`;
