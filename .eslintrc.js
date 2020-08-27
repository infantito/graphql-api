// https://github.com/ddialar/typescript.service.boilerplate
module.exports = {
  root: true,
  parser: 'babel-eslint',
  ignorePatterns: ['node_modules', 'build'],
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    'no-console': 'warn',
    strict: 'off',
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'cjs-import' },
      { blankLine: 'never', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
    '@typescript-eslint/no-namespace': 'off',
  },
  overrides: [
    {
      files: '**/*.+(ts)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier/@typescript-eslint',
      ],
    },
  ],
  globals: {
    __DEV__: true,
  },
  settings: {},
}
