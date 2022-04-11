import LoadingOverlay from 'react-loading-overlay-ts';

import { Container } from './styles';

type spinnerProps = {
  loading: boolean;
  text: string;
};

// TODO: Add pacman spinner
export default function Spinner({ loading, text }: spinnerProps) {
  return (
    <Container>
      <LoadingOverlay active={loading} spinner text={text}></LoadingOverlay>
    </Container>
  );
}
