module.exports = {
  'extends': [
    'eslint-config-tyrchen/rules/best-practices',
    'eslint-config-tyrchen/rules/errors',
    'eslint-config-tyrchen/rules/legacy',
    'eslint-config-tyrchen/rules/node',
    'eslint-config-tyrchen/rules/strict',
    'eslint-config-tyrchen/rules/style',
    'eslint-config-tyrchen/rules/variables'
  ],
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
