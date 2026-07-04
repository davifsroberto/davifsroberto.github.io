import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Custom404Page from '../pages/404';
import CvPage from '../pages/cv';
import ExperiencePage from '../pages/experience';
import HomePage from '../pages';
import PortfolioPage from '../pages/portfolio';
import banner from '../locales/home/banner/index.json';
import cv from '../locales/cv/index.json';
import experience from '../locales/experience/index.json';
import portfolio from '../locales/portfolio/index.json';
import page404 from '../locales/404/index.json';
import { setMockRouter } from './mocks/next-router';

function expectHeaderLink(name: string, href: string) {
  expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
}

describe('pages smoke tests', () => {
  it('renders Home PT with localized content and main links', () => {
    setMockRouter({ asPath: '/', locale: 'pt' });

    render(<HomePage />);

    expect(screen.getAllByText(banner.pt.welcomeThree)[0]).toBeInTheDocument();
    expectHeaderLink('Sobre Mim', '#about');
    expectHeaderLink('CV', '/cv');
  });

  it('renders Home EN with localized content and main links', () => {
    setMockRouter({ asPath: '/en', locale: 'en' });

    render(<HomePage />);

    expect(screen.getByText(banner.en.welcomeOne)).toBeInTheDocument();
    expectHeaderLink('About Me', '#about');
    expectHeaderLink('CV', '/en/cv');
  });

  it('renders CV PT', () => {
    setMockRouter({ asPath: '/cv', locale: 'pt' });

    render(<CvPage />);

    expect(screen.getByText(cv.pt.title)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: cv.pt.name })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /baixar pdf/i })).toHaveAttribute(
      'href',
      '/Davi-Roberto_CV.pdf'
    );
  });

  it('renders CV EN', () => {
    setMockRouter({ asPath: '/en/cv', locale: 'en' });

    render(<CvPage />);

    expect(screen.getByText(cv.en.title)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: cv.en.name })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download pdf/i })).toHaveAttribute(
      'href',
      '/Davi-Roberto_Resume.pdf'
    );
  });

  it('renders Portfolio PT', () => {
    setMockRouter({ asPath: '/portfolio', locale: 'pt' });

    render(<PortfolioPage />);

    expect(screen.getByText(portfolio.pt.title)).toBeInTheDocument();
    expect(screen.getByText(portfolio.pt.posTitle)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: portfolio.pt.portfolio[0].titleBox })
    ).toBeInTheDocument();
  });

  it('renders Portfolio EN', () => {
    setMockRouter({ asPath: '/en/portfolio', locale: 'en' });

    render(<PortfolioPage />);

    expect(screen.getByText(portfolio.en.title)).toBeInTheDocument();
    expect(screen.getByText(portfolio.en.posTitle)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: portfolio.en.portfolio[0].titleBox })
    ).toBeInTheDocument();
  });

  it('renders Experience PT', () => {
    setMockRouter({ asPath: '/experience', locale: 'pt' });

    render(<ExperiencePage />);

    expect(screen.getByText(experience.pt.title)).toBeInTheDocument();
    expect(screen.getByText(experience.pt.posTitle)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: experience.pt.experiencies[0].title,
      })
    ).toBeInTheDocument();
  });

  it('renders Experience EN', () => {
    setMockRouter({ asPath: '/en/experience', locale: 'en' });

    render(<ExperiencePage />);

    expect(screen.getByText(experience.en.title)).toBeInTheDocument();
    expect(screen.getByText(experience.en.posTitle)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: experience.en.experiencies[0].title,
      })
    ).toBeInTheDocument();
  });

  it('renders 404 with localized fallback link', () => {
    setMockRouter({ asPath: '/404', locale: 'pt' });

    render(<Custom404Page />);

    expect(screen.getByText(page404.pt.title)).toBeInTheDocument();

    const fallback = screen.getByRole('link', { name: page404.pt.button });
    expect(within(fallback).getByText(page404.pt.button)).toBeInTheDocument();
    expect(fallback).toHaveAttribute('href', '/');
  });
});
