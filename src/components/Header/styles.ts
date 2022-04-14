import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  width: 100%;
  z-index: 2;

  .navbar {
    padding: 0.73em 2em;
    border-bottom: 1px solid rgba(243, 242, 242, 0.41);
  }
`;

export const Logo = styled.strong`
  @font-face {
    font-family: 'Firsta';
    src: url('/assets/fonts/Firsta.ttf');
  }

  color: #fff;
  font-size: 3rem;
  font-family: 'Firsta';
`;
