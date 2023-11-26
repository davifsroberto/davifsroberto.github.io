/* For use Jest commands with Cypress and Angular Testing Library */
import { expect } from '@jest/globals';

import { TestBed } from '@angular/core/testing';
import { CoreModuleCounterService } from './core-module-counter.service';

describe('CoreModuleCounterService', () => {
  let service: CoreModuleCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreModuleCounterService],
    });

    service = TestBed.inject(CoreModuleCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with import count 0', () => {
    expect(service.getImportCount()).toBe(false);
  });

  it('should increment import count', () => {
    service.incrementImportCount();
    expect(service.getImportCount()).toBe(false);
  });

  it('should return true after incrementing count more than 2 times', () => {
    service.incrementImportCount();
    service.incrementImportCount();
    service.incrementImportCount();

    expect(service.getImportCount()).toBe(true);
  });

  it('should not return true after incrementing count exactly 2 times', () => {
    service.incrementImportCount();
    service.incrementImportCount();

    expect(service.getImportCount()).toBe(false);
  });
});
