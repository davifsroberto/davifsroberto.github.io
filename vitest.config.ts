import { defineConfig } from 'vitest/config';
import type { CoverageOptions } from 'vitest/node';

const coverage = {
  provider: 'v8',
  reporter: ['text', 'lcov'],
  all: true,
  skipFull: false,
  include: [
    'src/lib/**/*.ts',
    'src/utils/**/*.ts',
    'src/components/utils/**/*.ts',
    'src/components/**/*.helper.ts',
    'src/pages/**/*.helper.ts',
    'src/pages/**/helper.*.ts',
    'src/data/**/*.ts',
  ],
  exclude: [
    'src/test/**',
    'src/**/*.test.ts',
    'src/**/*.test.tsx',
    'src/**/*.d.ts',
    'src/**/*.type.ts',
    'src/**/styles.ts',
    'src/**/style.ts',
    'next-env.d.ts',
    'vitest.config.ts',
    'next.config.js',
    'eslint.config.mjs',
  ],
  thresholds: {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100,
  },
} as unknown as CoverageOptions;

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['node_modules/**', '.next/**', 'out/**', 'coverage/**'],
    css: false,
    coverage,
  },
});
