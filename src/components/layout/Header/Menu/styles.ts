import styled from 'styled-components';

export const Container = styled.ul`
  margin: 0;
  color: #fff;
  z-index: 2;
  font-size: 29px;
  display: inline-flex;

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

  .language {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8em;
    padding-left: 0.2em;

    .en,
    .pt {
      border-bottom: 1px solid;
    }

    li {
      cursor: pointer;
      padding: 0 0.3em;
      font-weight: 200;

      &:hover {
        border-bottom: 1px solid;
      }

      a {
        color: inherit;
      }
    }

    span {
      font-weight: 200;
    }
  }
`;

export const SubMenu = styled.ul`
  max-height: 0;
  padding: 0;
  overflow: hidden;
  background: #021620;
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
