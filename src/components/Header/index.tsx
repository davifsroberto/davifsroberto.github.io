import { Container, Logo } from './styles';
import { Menu } from './Menu';
import { mountMenu } from './header.helper';
import { ItemMenuType } from './ItemMenuType';

type headerProps = {
  menuCustom?: ItemMenuType[];
  custom?: boolean;
};

export function Header({ menuCustom, custom }: headerProps) {
  return (
    <Container id="home">
      <nav className="navbar">
        <div className="container">
          <Logo>Davi Roberto</Logo>

          <Menu menu={custom ? menuCustom : mountMenu()} />
        </div>
      </nav>
    </Container>
  );
}
