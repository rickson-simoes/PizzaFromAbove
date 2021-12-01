module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'warn',
    'max-len': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'warn',
    'no-unused-vars': 'warn'
  },
};
