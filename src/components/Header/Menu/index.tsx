import { ItemMenu } from '../ItemMenu';

import { Container, SubMenu } from './styles';

import { mountMenu } from '../header.helper';

export function Menu() {
  return (
    <Container>
      <li>
        <input id="show-submenu" type="checkbox" />

        <label htmlFor="show-submenu">
          <span className="fa fa-bars" aria-hidden="true"></span>
        </label>

        <SubMenu className="submenu">
          {mountMenu().map((item) => (
            <ItemMenu key={item.name} itemMenu={item} />
          ))}
        </SubMenu>
      </li>
    </Container>
  );
}
