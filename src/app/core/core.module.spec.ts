/* For use Jest comands with Cypress and Angular Testing Library  */
import { expect } from '@jest/globals';

import { TestBed } from '@angular/core/testing';
import { LOCALE_ID } from '@angular/core';

import { CoreModule } from './core.module';
import { LanguageService } from './services/language.service';
import { CoreModuleCounterService } from './services/core-module-counter.service';

describe('CoreModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
  });

  it('should provide LanguageService', () => {
    const service = TestBed.inject(LanguageService);
    expect(service).toBeTruthy();
  });

  it('should provide CoreModuleCounterService', () => {
    const service = TestBed.inject(CoreModuleCounterService);
    expect(service).toBeTruthy();
  });

  it('should configure LOCALE_ID correctly', () => {
    const localeId = TestBed.inject(LOCALE_ID);
    expect(localeId).toBeDefined();
  });

  it('should provide LanguageService', () => {
    const service = TestBed.inject(CoreModuleCounterService);
    expect(service).toBeTruthy();
  });
});
