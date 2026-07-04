import { NavigationItem } from '../../../../types/navigation.type';

import { Container } from './styles';

type ItemMenuProps = {
  itemMenu: NavigationItem;
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
