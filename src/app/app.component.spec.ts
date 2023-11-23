import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render AppComponent', async () => {
    await render(AppComponent);
  });
});
