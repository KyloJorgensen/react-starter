module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'emotion'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  overrides: [
    {
      files: ['*.test.[j,t]s?(x)'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/all'],
      plugins: ['jest'],
    },
  ],
};
