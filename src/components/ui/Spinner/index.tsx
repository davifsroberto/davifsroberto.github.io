import { Container } from './styles';

type spinnerProps = {
  loading: boolean;
  text: string;
};

export default function Spinner({ loading, text }: spinnerProps) {
  return (
    <Container>
      {loading && (
        <div className="overlay">
          <h1 className="pac-man" />

          <span>{text}</span>
        </div>
      )}
    </Container>
  );
}
