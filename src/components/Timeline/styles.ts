import styled from 'styled-components';

export const Container = styled.article.attrs(
  (props: { border: number }) => props
)`
  border-left: ${(props) => props.border + 'px'} solid #e6e9ed;
  padding: 1rem 0;

  .timeline-card {
    position: relative;
    margin-left: 31px;
    border-left: 2px solid;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 1rem;
    }

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: #fff;
      border-radius: 10px;
      width: 12px;
      height: 12px;
      top: 20px;
      left: -41px;
      border: 2px solid;
      z-index: 2;
    }

    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      background-color: currentColor;
      width: 29px;
      height: 2px;
      top: 25px;
      left: -29px;
      z-index: 1;
    }
  }

  .timeline-card {
    border-left-color: #5b4b92;

    &:before {
      border-color: #5b4b92;
    }

    &:after {
      background-color: #5b4b92;
    }
  }
`;
