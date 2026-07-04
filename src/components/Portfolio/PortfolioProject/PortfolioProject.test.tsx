import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import PortfolioProject from './index';
import { PortfolioGallery } from '../PortfolioGallery';

const gallery: PortfolioGallery = {
  id: 1,
  bgBox: '/assets/images/portfolio/project/00_bg.png',
  titleBox: 'Project Gallery',
  images: [
    '/assets/images/portfolio/project/01.png',
    '/assets/images/portfolio/project/02.png',
    '/assets/images/portfolio/project/03.png',
  ],
};

describe('PortfolioProject', () => {
  it('opens and closes the lightbox by click and Escape', async () => {
    const user = userEvent.setup();
    render(<PortfolioProject gallery={gallery} />);

    await user.click(screen.getByRole('button', { name: 'Project Gallery' }));

    expect(screen.getByAltText('Project Gallery - 1')).toHaveAttribute(
      'src',
      gallery.images[0]
    );
    expect(screen.getByText('1 / 3')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(
      screen.queryByAltText('Project Gallery - 1')
    ).not.toBeInTheDocument();
  });

  it('navigates to next and previous images', async () => {
    const user = userEvent.setup();
    render(<PortfolioProject gallery={gallery} />);

    await user.click(screen.getByRole('button', { name: 'Project Gallery' }));
    await user.click(screen.getByRole('button', { name: 'Next image' }));

    expect(screen.getByAltText('Project Gallery - 2')).toHaveAttribute(
      'src',
      gallery.images[1]
    );

    await user.click(screen.getByRole('button', { name: 'Previous image' }));

    expect(screen.getByAltText('Project Gallery - 1')).toHaveAttribute(
      'src',
      gallery.images[0]
    );
  });

  it('wraps image navigation at the gallery boundaries', async () => {
    const user = userEvent.setup();
    render(<PortfolioProject gallery={gallery} />);

    await user.click(screen.getByRole('button', { name: 'Project Gallery' }));
    await user.click(screen.getByRole('button', { name: 'Previous image' }));

    expect(screen.getByAltText('Project Gallery - 3')).toHaveAttribute(
      'src',
      gallery.images[2]
    );

    await user.keyboard('{ArrowRight}');

    expect(screen.getByAltText('Project Gallery - 1')).toHaveAttribute(
      'src',
      gallery.images[0]
    );
  });

  it('hides navigation controls when there is a single image', async () => {
    const user = userEvent.setup();
    const singleImageGallery = {
      ...gallery,
      images: [gallery.images[0]],
    };

    render(<PortfolioProject gallery={singleImageGallery} />);

    await user.click(screen.getByRole('button', { name: 'Project Gallery' }));

    expect(screen.queryByRole('button', { name: 'Next image' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Previous image' })).toBeNull();

    await user.click(
      screen.getByRole('button', { name: 'Close image gallery' })
    );

    expect(
      screen.queryByAltText('Project Gallery - 1')
    ).not.toBeInTheDocument();
  });
});
