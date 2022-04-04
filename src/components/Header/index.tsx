import { Menu } from './Menu';

import { Container, Logo } from './styles';

export function Header() {
  return (
    <Container id="home">
      <nav className="navbar">
        <div className="container">
          <Logo>Davi Roberto</Logo>

          <Menu />
        </div>
      </nav>
    </Container>
  );
}
