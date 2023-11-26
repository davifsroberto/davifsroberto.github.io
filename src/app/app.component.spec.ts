/* For use Jest commands with Cypress and Angular Testing Library */
import { expect } from '@jest/globals';

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { render } from '@testing-library/angular';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule],
})
class FakeModule {}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FakeModule],
    });
  });

  it('should render AppComponent', async () => {
    const { container } = await render(AppComponent, {
      imports: [FakeModule],
    });

    expect(container).toBeDefined();
  });
});
