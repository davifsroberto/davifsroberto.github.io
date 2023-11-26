/* For use Jest commands with Cypress and Angular Testing Library */
import { expect } from '@jest/globals';

import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageService],
    });

    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial locale as "pt"', () => {
    let currentLocale: string | undefined;

    service.getLocale().subscribe((locale) => {
      currentLocale = locale;
    });

    expect(currentLocale).toBe('pt');
  });

  it('should set and get a different locale', () => {
    let currentLocale: string | undefined;

    service.getLocale().subscribe((locale) => {
      currentLocale = locale;
    });

    const newLocale = 'en';
    service.setLocale(newLocale);

    expect(currentLocale).toBe(newLocale);
  });

  it('should have initial locale as "pt" in currentLocale$', () => {
    let currentLocale: string | undefined;

    service.currentLocale$.subscribe((locale) => {
      currentLocale = locale;
    });

    expect(currentLocale).toBe('pt');
  });

  it('should notify observers when changing the locale', () => {
    let currentLocale: string | undefined;

    service.currentLocale$.subscribe((locale) => {
      currentLocale = locale;
    });

    service.setLocale('en');

    expect(currentLocale).toBe('en');
  });
});
