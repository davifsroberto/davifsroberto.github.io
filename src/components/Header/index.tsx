import Link from 'next/link';

import { Container, Logo } from './styles';
import { Menu } from './Menu';
import { mountMenu } from './header.helper';
import { ItemMenuType } from './ItemMenuType';

type headerProps = {
  menuCustom?: ItemMenuType[];
};

export function Header({ menuCustom }: headerProps) {
  return (
    <Container id="home">
      <nav className="navbar">
        <div className="container">
          <Link href="/" passHref>
            <Logo />
          </Link>

          <Menu menu={menuCustom ? menuCustom : mountMenu()} />
        </div>
      </nav>
    </Container>
  );
}
