import Link from 'next/link';

import { Container, Logo } from './styles';
import { Menu } from './Menu';
import { mountMenuHelper } from './header.helper';
import { ItemMenuType } from './ItemMenuType';
import { useRouter } from 'next/router';

type headerProps = {
  menuCustom?: ItemMenuType[];
};

export function Header({ menuCustom }: headerProps) {
  const router = useRouter();

  return (
    <Container id="home">
      <nav className="navbar">
        <div className="container">
          <Link href="/" passHref>
            <Logo />
          </Link>

          <Menu
            menu={
              menuCustom ? menuCustom : mountMenuHelper(String(router.locale))
            }
          />
        </div>
      </nav>
    </Container>
  );
}
