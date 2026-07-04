import { useRouter } from 'next/router';

import { Container, SubMenu } from './styles';
import { ItemMenu } from '../ItemMenu';
import { NavigationItem } from '../../../../types/navigation.type';
import {
  getPathForLanguage,
  SetLanguageUtils as language,
} from '../../../../utils/language.utils';

type menuProps = {
  menu?: NavigationItem[];
};

enum Lang {
  pt = 'pt',
  en = 'en',
}

export function Menu({ menu }: menuProps) {
  const router = useRouter();
  const selectedLanguage = language();

  function setLanguage(nextLanguage: Lang): void {
    router.push(getPathForLanguage(router.asPath, nextLanguage));
  }

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
        <li
          className={selectedLanguage === Lang.pt ? Lang.pt : ''}
          onClick={() => setLanguage(Lang.pt)}
        >
          PT
        </li>

        <li
          className={selectedLanguage === Lang.en ? Lang.en : ''}
          onClick={() => setLanguage(Lang.en)}
        >
          EN
        </li>
      </ul>
    </Container>
  );
}
