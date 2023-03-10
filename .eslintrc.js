module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/interface-name-prefix': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-useless-catch': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': 'off',
    indent: 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {},
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
}
