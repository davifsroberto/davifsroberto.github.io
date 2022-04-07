import { PortfolioGallery } from './PortfolioGallery';

export function mountPortfolio(): PortfolioGallery[] {
  // TODO: otimizar imagens
  return [
    {
      id: 1,
      bgBox: '/assets/images/portfolio/mottu/totem/00_bg.png',
      titleBox: 'Mottu - Totem de Autoatendimento',
      images: [
        '/assets/images/portfolio/mottu/totem/01.png',
        '/assets/images/portfolio/mottu/totem/02.png',
        '/assets/images/portfolio/mottu/totem/03.png',
        '/assets/images/portfolio/mottu/totem/04.png',
        '/assets/images/portfolio/mottu/totem/05.png',
        '/assets/images/portfolio/mottu/totem/06.png',
        '/assets/images/portfolio/mottu/totem/07.png',
      ],
    },
    {
      id: 2,
      bgBox: '/assets/images/portfolio/mottu/mottu-entregas/00_bg.png',
      titleBox: 'Mottu Delivery - Integração Meli',
      images: [
        '/assets/images/portfolio/mottu/mottu-entregas/01.png',
        '/assets/images/portfolio/mottu/mottu-entregas/02.png',
        '/assets/images/portfolio/mottu/mottu-entregas/03.png',
        '/assets/images/portfolio/mottu/mottu-entregas/04.png',
      ],
    },
    {
      id: 3,
      bgBox: '/assets/images/portfolio/fast/oi/00_bg.png',
      titleBox: 'Oi - Gerenciamento de Fatura',
      images: [
        '/assets/images/portfolio/fast/oi/01.png',
        '/assets/images/portfolio/fast/oi/02.png',
        '/assets/images/portfolio/fast/oi/03.png',
        '/assets/images/portfolio/fast/oi/04.png',
        '/assets/images/portfolio/fast/oi/05.png',
        '/assets/images/portfolio/fast/oi/06.png',
        '/assets/images/portfolio/fast/oi/07.png',
      ],
    },
    {
      id: 4,
      bgBox: '/assets/images/portfolio/rommanel/mmr/00_bg.png',
      titleBox: 'Meu Mundo Rommanel',
      images: [
        '/assets/images/portfolio/rommanel/mmr/01.png',
        '/assets/images/portfolio/rommanel/mmr/02.png',
        '/assets/images/portfolio/rommanel/mmr/03.png',
        '/assets/images/portfolio/rommanel/mmr/04.png',
        '/assets/images/portfolio/rommanel/mmr/05.png',
        '/assets/images/portfolio/rommanel/mmr/06.png',
      ],
    },
    {
      id: 5,
      bgBox: '/assets/images/portfolio/rommanel/cadastro_mmr/00_bg.png',
      titleBox: 'Cadastro Consultora Rommanel',
      images: [
        '/assets/images/portfolio/rommanel/cadastro_mmr/01.png',
        '/assets/images/portfolio/rommanel/cadastro_mmr/02.png',
        '/assets/images/portfolio/rommanel/cadastro_mmr/03.png',
        '/assets/images/portfolio/rommanel/cadastro_mmr/04.png',
      ],
    },
    {
      id: 6,
      bgBox: '/assets/images/portfolio/rommanel/mensageria_mmr/00_bg.png',
      titleBox: 'Menssageria Rommanel',
      images: [
        '/assets/images/portfolio/rommanel/mensageria_mmr/01.png',
        '/assets/images/portfolio/rommanel/mensageria_mmr/02.png',
        '/assets/images/portfolio/rommanel/mensageria_mmr/03.png',
        '/assets/images/portfolio/rommanel/mensageria_mmr/04.png',
      ],
    },
  ];
}
