import styled from 'styled-components';

export const Container = styled.section`
  .box {
    background: #fff;
    text-align: center;
    position: relative;
    padding: 2px;
    cursor: pointer;

    img {
      transition: all 0.35s ease 0s;
    }

    &:hover {
      img {
        opacity: 0.5;
        transition: all 0.35s ease 0s;
      }

      .box-content {
        top: 10px;
        left: 10px;
        bottom: 27px;
        right: 10px;
        opacity: 1;
      }
    }

    .box-content {
      padding: 30px 10px 30px 0;
      background: rgba(0, 0, 0, 0.65);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
    }

    .title {
      color: #fff;
      margin: -1em 0;
      position: absolute;
      bottom: 55%;
      font-size: 1.6rem;
    }
  }
`;
