import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSyncExternalStore } from 'react';

import { Container, SubMenu } from './styles';
import { ItemMenu } from '../ItemMenu';
import { ItemMenuType } from '../ItemMenuType';
import {
  getLanguageSwitchPath,
  SetLanguageUtils,
} from '../../../utils/language.utils';

type menuProps = {
  menu?: ItemMenuType[];
};

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Menu({ menu }: menuProps) {
  const router = useRouter();
  const selectedLanguage = SetLanguageUtils();
  const isHydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );
  // Query strings and hashes can differ between the server and initial client render.
  const currentPath = isHydrated ? router.asPath : router.pathname;

  return (
    <Container>
      <li>
        <input id="show-submenu" type="checkbox" />

        <label htmlFor="show-submenu">
          <span className="fa fa-bars"></span>
        </label>

        <SubMenu className="submenu">
          {menu?.map((item) => (
            <ItemMenu key={item.name} itemMenu={item} />
          ))}
        </SubMenu>
      </li>

      <ul className="language">
        <li className={selectedLanguage === 'pt' ? 'pt' : ''}>
          <Link
            href={getLanguageSwitchPath(currentPath, 'pt')}
            aria-current={selectedLanguage === 'pt' ? 'page' : undefined}
            lang="pt"
          >
            PT
          </Link>
        </li>

        <li className={selectedLanguage === 'en' ? 'en' : ''}>
          <Link
            href={getLanguageSwitchPath(currentPath, 'en')}
            aria-current={selectedLanguage === 'en' ? 'page' : undefined}
            lang="en"
          >
            EN
          </Link>
        </li>
      </ul>
    </Container>
  );
}
