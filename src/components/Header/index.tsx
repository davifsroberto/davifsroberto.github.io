import Link from 'next/link';

import { Container, Logo } from './styles';
import { Menu } from './Menu';
import { mountMenuHelper } from './header.helper';
import { ItemMenuType } from './ItemMenuType';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../../utils/language.utils';

type headerProps = {
  menuCustom?: ItemMenuType[];
};

export function Header({ menuCustom }: headerProps) {
  const selectedLanguage = language();

  return (
    <Container id="home">
      <nav className="navbar">
        <div className="container">
          <Link
            href={getLocalizedPath('/', selectedLanguage)}
            aria-label="Davi Roberto"
          >
            <Logo />
          </Link>

          <Menu menu={menuCustom ? menuCustom : mountMenuHelper()} />
        </div>
      </nav>
    </Container>
  );
}
