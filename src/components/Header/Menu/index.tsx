import { useRouter } from 'next/router';

import { Container, SubMenu } from './styles';
import { ItemMenu } from '../ItemMenu';
import { ItemMenuType } from '../ItemMenuType';

type menuProps = {
  menu?: ItemMenuType[];
};

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
        <li onClick={() => setLanguage('en')}>EN</li>

        <li onClick={() => setLanguage('pt')}>PT</li>
      </ul>
    </Container>
  );
}
