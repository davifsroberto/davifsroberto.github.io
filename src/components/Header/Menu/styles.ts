import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0;
  color: #fff;
  z-index: 2;
  font-size: 29px;

  > li {
    float: left;
    position: relative;
    width: 100%;
  }

  label {
    position: relative;
    display: block;
    cursor: pointer;
    text-align: center;
    margin: 0;

    span {
      line-height: 1em;
    }
  }

  input {
    display: none;

    &:checked ~ .submenu {
      max-height: 360px;
      padding: 0.4em 0;
      transition: max-height 0.5s ease-in;
    }
  }
`;

export const SubMenu = styled.ul`
  max-height: 0;
  padding: 0;
  overflow: hidden;
  background: #f7f7f7;
  transition: max-height 0.5s ease-out;
  position: absolute;
  min-width: 8em;
  right: 0;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -o-border-radius: 4px;
  -ms-border-radius: 4px;
  -moz-border-radius: 4px;
  box-shadow: 0 1px 8px rgba(20, 21, 21, 0.37);
  -webkit-box-shadow: 0 1px 8px rgba(20, 21, 21, 0.37);
  -moz-box-shadow: 0 1px 8px rgba(20, 21, 21, 0.37);
`;
