import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierConfig from 'eslint-config-prettier'
import storybookPlugin from 'eslint-plugin-storybook'

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      'storybook-static/**',
      '**/*.config.js',
      '**/*.config.ts',
      '.storybook/**',
      'public/**',
    ],
  },
  ...tsPlugin.configs['flat/recommended'],
  ...storybookPlugin.configs['flat/recommended'],
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
]
