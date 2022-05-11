import { Container, SubMenu } from './styles';
import { ItemMenu } from '../ItemMenu';
import { ItemMenuType } from '../ItemMenuType';

type menuProps = {
  menu?: ItemMenuType[];
};

export function Menu({ menu }: menuProps) {
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
    </Container>
  );
}
