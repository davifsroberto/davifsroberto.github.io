import { Container } from './styles';

export function Footer() {
  return (
    <Container className="pb-3 pt-4 text-center">
      <div className="container">
        <p className="my-2">
          © 2022 | davifsroberto <br />
          Desenvolvido por
          <a
            href="https://www.linkedin.com/in/davifsroberto"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Davi Roberto
          </a>
        </p>
      </div>
    </Container>
  );
}
