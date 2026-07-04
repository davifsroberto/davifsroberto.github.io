import styled from 'styled-components';

export const Container = styled.section`
  /* TODO: create new banner */
  background: url('/assets/images/general/banner-cta.jpg') 0px 0px;
  background-size: cover;
  position: relative;
  color: var(--bs-gray-300);

  p {
    line-height: 45px;
    font-weight: 300;
    font-size: 1.4rem;
  }

  strong {
    letter-spacing: 1px;
  }

  @media (max-width: 600px) {
    background: url('/assets/images/general/banner-cta.jpg') center;
    background-size: cover;
  }
`;
