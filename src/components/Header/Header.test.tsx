import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

import { Header } from './index';
import { setMockRouter } from '../../test/mocks/next-router';

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

  it('links to the English version of the current Portuguese page', () => {
    setMockRouter({
      asPath: '/cv?source=test#experience',
      locale: 'pt',
    });

    render(<Header />);

    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute(
      'href',
      '/en/cv?source=test#experience'
    );
    expect(screen.getByRole('link', { name: 'PT' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('links back to Portuguese and selects English based on the path', () => {
    setMockRouter({
      asPath: '/en/cv?source=test#experience',
      locale: 'pt',
    });

    render(<Header />);

    expect(screen.getByRole('link', { name: 'PT' })).toHaveAttribute(
      'href',
      '/cv?source=test#experience'
    );
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('hydrates language links with the current query and hash', () => {
    setMockRouter({ pathname: '/cv', asPath: '/cv/' });
    const container = document.createElement('div');
    container.innerHTML = renderToString(<Header />);
    document.body.appendChild(container);
    setMockRouter({
      pathname: '/cv',
      asPath: '/cv/?source=test#experience',
    });
    const consoleError = vi.spyOn(console, 'error');

    const { unmount } = render(<Header />, { container, hydrate: true });

    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute(
      'href',
      '/en/cv/?source=test#experience'
    );
    expect(consoleError).not.toHaveBeenCalled();

    unmount();
    container.remove();
    consoleError.mockRestore();
  });
});
