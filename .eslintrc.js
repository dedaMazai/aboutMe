module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'andreibread-plugin',
        'unused-imports',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/no-array-index-key': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-return-await': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: [
                'as',
                'role',
                'data-testid',
                'to', 'target',
                'justify',
                'align',
                'direction',
                'gap',
            ],
        }],
        'max-len': [
            'error', {
                ignoreComments: true,
                code: 120,
            },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'unused-imports/no-unused-imports': 'error',
        'andreibread-plugin/path-checker': [
            'error',
            {
                alias: '@',
            },
        ],
        'andreibread-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/ReduxDecorator.tsx'],
            },
        ],
        'andreibread-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/testing', '**/StoreProvider'],
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [// позволяет для определного типа файла переопределить правила
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
