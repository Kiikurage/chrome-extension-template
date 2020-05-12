module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    env: {
        'es6': true,
        'node': true
    },
    rules: {
        'semi': 'error',
        'space-infix-ops': 'error'
    }
};
