import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Header } from './index';
import { routerPushMock, setMockRouter } from '../../../test/mocks/next-router';

describe('Header', () => {
  it('renders the Portuguese primary navigation', () => {
    setMockRouter({ asPath: '/', locale: 'pt' });

    render(<Header />);

    expect(screen.getByLabelText('Davi Roberto')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Sobre Mim' })).toHaveAttribute(
      'href',
      '#about'
    );
    expect(
      screen.getByRole('link', { name: 'Experiência' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfólio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'href',
      '#contact'
    );
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute(
      'href',
      '/cv'
    );
  });

  it('renders English links on /en routes without crashing', () => {
    setMockRouter({ asPath: '/en/portfolio', locale: 'en' });

    render(<Header />);

    expect(screen.getByLabelText('Davi Roberto')).toHaveAttribute(
      'href',
      '/en'
    );
    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact'
    );
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute(
      'href',
      '/en/cv'
    );
  });

  it('opens and closes the mobile menu checkbox state', async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);

    const menuToggle =
      container.querySelector<HTMLInputElement>('#show-submenu');
    const menuLabel = container.querySelector<HTMLLabelElement>(
      'label[for="show-submenu"]'
    );

    expect(menuToggle).not.toBeNull();
    expect(menuLabel).not.toBeNull();
    expect(menuToggle).not.toBeChecked();

    await user.click(menuLabel as HTMLLabelElement);

    expect(menuToggle).toBeChecked();
  });

  it('navigates to the matching physical route when changing to Portuguese', async () => {
    const user = userEvent.setup();
    setMockRouter({
      asPath: '/en/cv',
      locale: 'en',
      query: { source: 'test' },
    });

    render(<Header />);

    await user.click(screen.getByText('PT'));

    expect(routerPushMock).toHaveBeenCalledWith('/cv');
  });

  it('navigates to the matching physical route when changing to English', async () => {
    const user = userEvent.setup();
    setMockRouter({
      asPath: '/portfolio?source=test#projects',
      locale: 'pt',
      query: { source: 'test' },
    });

    render(<Header />);

    await user.click(screen.getByText('EN'));

    expect(routerPushMock).toHaveBeenCalledWith(
      '/en/portfolio?source=test#projects'
    );
  });
});
