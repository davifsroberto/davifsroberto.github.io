import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Seo } from './index';
import { defaultOgImage, siteUrl } from '../../../data/seo';

describe('Seo', () => {
  it('renders core, Open Graph and Twitter metadata for Portuguese pages', () => {
    render(
      <Seo
        title="Portfólio - Davi Roberto"
        description="Projetos de frontend."
        path="/portfolio"
      />
    );

    expect(document.head.querySelector('title')).toHaveTextContent(
      'Portfólio - Davi Roberto'
    );
    expect(
      document.head.querySelector('meta[name="description"]')
    ).toHaveAttribute('content', 'Projetos de frontend.');
    expect(
      document.head.querySelector('link[rel="canonical"]')
    ).toHaveAttribute('href', `${siteUrl}/portfolio/`);
    expect(
      document.head.querySelector('meta[property="og:title"]')
    ).toHaveAttribute('content', 'Portfólio - Davi Roberto');
    expect(
      document.head.querySelector('meta[property="og:url"]')
    ).toHaveAttribute('content', `${siteUrl}/portfolio/`);
    expect(
      document.head.querySelector('meta[property="og:image"]')
    ).toHaveAttribute('content', `${siteUrl}${defaultOgImage}`);
    expect(
      document.head.querySelector('meta[property="og:locale"]')
    ).toHaveAttribute('content', 'pt_BR');
    expect(
      document.head.querySelector('meta[name="twitter:card"]')
    ).toHaveAttribute('content', 'summary_large_image');
    expect(
      document.head.querySelector('meta[name="twitter:description"]')
    ).toHaveAttribute('content', 'Projetos de frontend.');
  });

  it('renders English locale and keeps absolute image URLs intact', () => {
    const image = 'https://cdn.example.com/thumbnail.png';
    render(
      <Seo
        title="Resume - Davi Roberto"
        description="Online resume."
        path="/en/cv"
        image={image}
      />
    );

    expect(
      document.head.querySelector('link[rel="canonical"]')
    ).toHaveAttribute('href', `${siteUrl}/en/cv/`);
    expect(
      document.head.querySelector('meta[property="og:locale"]')
    ).toHaveAttribute('content', 'en_US');
    expect(
      document.head.querySelector('meta[property="og:image"]')
    ).toHaveAttribute('content', image);
    expect(
      document.head.querySelector('meta[name="twitter:image"]')
    ).toHaveAttribute('content', image);
  });

  it('does not duplicate critical metadata in a single render', () => {
    render(<Seo title="Davi Roberto" description="Portfolio" path="/" />);

    expect(document.head.querySelectorAll('title')).toHaveLength(1);
    expect(
      document.head.querySelectorAll('meta[name="description"]')
    ).toHaveLength(1);
    expect(
      document.head.querySelectorAll('link[rel="canonical"]')
    ).toHaveLength(1);
    expect(
      document.head.querySelectorAll('meta[property="og:url"]')
    ).toHaveLength(1);
  });
});
