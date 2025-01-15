import globals from 'globals'
import js from '@eslint/js';

export default [
  js.configs.all,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      // https://eslint.org/docs/latest/rules/capitalized-comments
      'capitalized-comments': 'off',

      // https://eslint.org/docs/latest/rules/id-length
      'id-length': ['error', { 'min': 1 }],

      // https://eslint.org/docs/latest/rules/no-inline-comments
      'no-inline-comments': 'off',

      // https://eslint.org/docs/latest/rules/no-magic-numbers
      'no-magic-numbers': [
        'error', {
          'detectObjects': false,
          'enforceConst': true,
          'ignore': [1],
          'ignoreArrayIndexes': true,
          'ignoreClassFieldInitialValues': true,
        }
      ],

      // https://eslint.org/docs/latest/rules/one-var
      'one-var': ['error', 'never'],

      // https://github.com/airbnb/javascript?tab=readme-ov-file#strings--quotes
      // https://eslint.org/docs/latest/rules/quotes
      'quotes': ['error', 'single']
    }
  },
  {
    files: ['test/**', 'src/__tests__/*.test.js'],
    rules: {
      // Magic numbers are frequently used in tests, so disable this rule
      // https://eslint.org/docs/latest/rules/no-magic-numbers
      'no-magic-numbers': 'off',
    },
  },
];
