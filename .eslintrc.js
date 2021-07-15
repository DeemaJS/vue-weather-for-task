module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'comma-dangle': [2, 'always-multiline'],
    'comma-style': [2, 'last'],
    curly: [2, 'multi-line'],
    'eol-last': [2, 'always'],
    eqeqeq: [2, 'allow-null'],
    'func-call-spacing': 2,
    indent: [2, 2],
    'max-len': [1, 5999, 2],
    'no-cond-assign': [2, 'always'],
    'no-return-assign': [2, 'always'],
    'no-restricted-properties': [2, {
      object: 'disallowedObjectName',
      property: 'disallowedPropertyName',
    }],
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 1,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'prefer-const': 2,
    quotes: [2, 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true,
    }],
    semi: [2, 'always'],
    'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['~', './src/js'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
