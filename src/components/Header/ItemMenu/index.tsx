import { ItemMenuType } from '../ItemMenuType';

import { Container } from './styles';

type ItemMenuProps = {
  itemMenu: ItemMenuType;
};

export function ItemMenu({ itemMenu }: ItemMenuProps) {
  return (
    <Container>
      <a
        href={itemMenu.link}
        className={itemMenu.className}
        download={itemMenu.download}
      >
        {itemMenu.name}
      </a>
    </Container>
  );
}
