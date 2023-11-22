import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';

import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (): Promise<ApplicationRef> => {
  return bootstrapApplication(AppComponent, config);
};

export default bootstrap;
