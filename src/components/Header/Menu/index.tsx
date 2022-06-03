import { useRouter } from 'next/router';

import { Container, SubMenu } from './styles';
import { ItemMenu } from '../ItemMenu';
import { ItemMenuType } from '../ItemMenuType';

type menuProps = {
  menu?: ItemMenuType[];
};

enum Lang {
  pt = 'pt',
  en = 'en',
}

export function Menu({ menu }: menuProps) {
  const router = useRouter();

  function setLanguage(language: string) {
    router.push(
      {
        query: router.query,
      },
      router.asPath,
      { locale: language }
    );
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
          className={router.locale === Lang.en ? Lang.en : ''}
          onClick={() => setLanguage(Lang.en)}
        >
          EN
        </li>

        <li
          className={router.locale === Lang.pt ? Lang.pt : ''}
          onClick={() => setLanguage(Lang.pt)}
        >
          PT
        </li>
      </ul>
    </Container>
  );
}
