import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4210',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
});
