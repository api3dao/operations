export const PRETTIER_CONFIG = {
  bracketSpacing: true,
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'always',
      },
    },
  ],
} as any;
