import styled from 'styled-components';

export const Container = styled.main`
  color: var(--bs-gray-400);

  h4,
  h3 {
    color: var(--bs-gray-400);
  }

  h4,
  h3,
  p {
    animation: opacityDelay 3.5s;
    animation-iteration-count: 1;
  }

  .header {
    top: 3.8em;
    position: relative;

    a {
      font-size: 1.2em;
      transition: all 0.3s;

      i {
        transition: all 0.7s;
      }
    }

    figure {
      background: url('/assets/images/general/perfil_davifsroberto.jpg')
        no-repeat;
      background-size: contain;
      height: 16em;
      border: 0.5em solid #fff;
      -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    }
  }

  .cover-bg {
    border-radius: 10px 10px 0 0;
    opacity: 0.9;
    background: #1e3c72;
    background: -webkit-linear-gradient(135deg, #50217f 1%, #366895);
    background: linear-gradient(135deg, #50217f 1%, #366895);

    .avatar {
      max-width: 16em;
      max-height: 16em;
      margin-top: 20px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .bg-page {
    background-color: #222;
    border-radius: 0.6em;
  }

  .about {
    padding-top: 4em;

    .about-summary {
      max-width: 780px;

      h2 {
        align-items: center;
        display: flex;
        gap: 0.8rem;
        margin-bottom: 1.35rem !important;

        &:after {
          background: linear-gradient(90deg, #6f5bd8, #31b7b7);
          content: '';
          display: block;
          height: 2px;
          max-width: 8rem;
          width: 18%;
        }
      }
    }

    p {
      line-height: 1.65;
      margin-bottom: 1.05rem;

      &:first-of-type {
        border-left: 3px solid #31b7b7;
        color: var(--bs-gray-300);
        font-size: 1.08rem;
        line-height: 1.58;
        padding-left: 1rem;
      }
    }

    .about-item {
      align-self: flex-start;
      background: linear-gradient(#252525, #252525) padding-box,
        linear-gradient(
            135deg,
            rgba(111, 91, 216, 0.7),
            rgba(49, 183, 183, 0.7)
          )
          border-box;
      border: 1px solid transparent;
      border-radius: 0.7rem;
      box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.18);
      padding: 1.35rem;
      position: relative;

      &:before {
        background: linear-gradient(180deg, #6f5bd8, #31b7b7);
        border-radius: 999px;
        content: '';
        height: 3.6rem;
        position: absolute;
        right: 1rem;
        top: -1.1rem;
        width: 0.35rem;
      }
    }

    .contact-item {
      display: grid;
      gap: 0.25rem;
      margin-bottom: 1.1rem;

      &:last-child {
        margin-bottom: 0;
      }

      strong {
        color: #8fd8d7;
        font-size: 0.82rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      span,
      a {
        color: var(--bs-gray-300);
        overflow-wrap: anywhere;
      }
    }

    .link {
      text-decoration: underline;
    }
  }

  .skill-groups {
    row-gap: 0.65rem;

    .skill-group {
      position: relative;
    }

    .skill-group > h4,
    .skill-group > ul {
      margin-left: 1.1rem;
    }

    .skill-group:before {
      background: #6f5bd8;
      border-radius: 999px;
      content: '';
      height: calc(100% - 0.5rem);
      left: 0;
      position: absolute;
      top: 0.25rem;
      width: 0.2rem;
    }

    .skill-group-2:before {
      background: #31b7b7;
    }

    .skill-group-3:before {
      background: #d8a85b;
    }

    .skill-group-4:before {
      background: #7fc46c;
    }

    h4 {
      color: var(--bs-gray-200);
      font-size: 1rem;
      margin-bottom: 0.55rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem 0.9rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      color: var(--bs-gray-500);
      line-height: 1.4;
      position: relative;

      &:not(:last-child):after {
        color: rgba(143, 216, 215, 0.75);
        content: '\\2022';
        margin-left: 0.85rem;
      }
    }
  }

  @media (max-width: 767px) {
    .header {
      a {
        color: #6669b8;
      }
    }

    .about {
      .about-item {
        margin-top: 0.5rem;
      }
    }
  }

  @media (max-width: 375px) {
    .about-item {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 350px) {
    .about-item {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 340px) {
    .about-item {
      font-size: 0.8rem;
    }
  }

  @page {
    margin: 12mm;
    size: A4;
  }

  @media print {
    color: #222;
    font-size: 10pt;

    .bg-header-default,
    .container-xl > section:first-child,
    button,
    hr {
      display: none !important;
    }

    .container-xl {
      max-width: none;
      padding: 0 !important;
      width: 100%;
    }

    .bg-page {
      background: #fff;
      border-radius: 0;
    }

    .cover-bg {
      background: #fff;
      border-bottom: 1px solid #ddd;
      border-radius: 0;
      color: #222;
      opacity: 1;
      padding: 0 0 0.75rem !important;
    }

    .cover-bg .avatar {
      display: none;
    }

    .header {
      top: 0;
    }

    .header .text-white,
    h2,
    h3,
    h4,
    p,
    a,
    .about-item,
    .timeline-card,
    .text-muted {
      color: #222 !important;
    }

    .about {
      padding-top: 1rem;
    }

    article {
      padding: 0.8rem 0 !important;
    }

    .about .about-summary h2:after,
    .about .about-item:before,
    .skill-groups .skill-group:before {
      display: none;
    }

    .about p:first-of-type {
      border-left: 0;
      font-size: inherit;
      padding-left: 0;
    }

    .about .about-item {
      background: #fff;
      border: 1px solid #ddd;
      box-shadow: none;
    }

    .about .contact-item strong,
    .about .contact-item span,
    .about .contact-item a,
    .skill-groups li {
      color: #222;
    }

    .skill-groups .skill-group > h4,
    .skill-groups .skill-group > ul {
      margin-left: 0;
    }

    .skill-groups li:after {
      color: #222 !important;
    }

    .timeline-card {
      border-left-color: #ddd !important;
      box-shadow: none !important;
      margin-bottom: 1rem;
      page-break-inside: avoid;
    }

    .timeline-card:before {
      border-color: #ddd !important;
    }

    .timeline-card:after {
      background-color: #ddd !important;
    }

    .timeline-card .card-body {
      background: #fff !important;
      padding: 0.75rem 1rem;
    }
  }
`;
