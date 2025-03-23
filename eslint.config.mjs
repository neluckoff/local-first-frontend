import antfu from '@antfu/eslint-config';

export default antfu(
    {
        toml: false,
        ignores: [
            'package.json',
            'eslint.config.mjs',
            'vite.config.mjs',
            '/dist',
            '/.quasar',
            '/.idea',
            '/node_modules'
        ],
        typescript: true,
        vue: true,
    },
    {
        rules: {
            'antfu/if-newline': 'off',
            'regexp/no-super-linear-backtracking': 'off',
            'array-callback-return': [
                'error',
                { allowImplicit: true },
            ],
            'curly': ['error', 'multi-line', 'consistent'],
            'style/quotes': ['error', 'single'],
            'style/semi': ['error', 'always'],
            'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'style/indent-binary-ops': ['error', 'tab'],
            'style/no-tabs': 'off',
            'style/indent': ['error', 'tab'],
            'jsonc/indent': ['error', 'tab'],
            'vue/script-indent': ['error', 'tab', {
                baseIndent: 0,
                switchCase: 1,
            }],
            'vue/html-indent': ['error', 'tab'],
            'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'vue/block-order': ['error', {
                order: ['template', 'script', 'style'],
            }],
            'vue/multi-word-component-names': ['error'],
            'vue/no-template-shadow': 'off',
            'ts/method-signature-style': ['warn', 'method'],
            'ts/no-unsafe-function-type': 'warn',
            'n/prefer-global/process': 'off',
            'no-useless-return': 'off',
            'style/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            }],
            'vue/component-name-in-template-casing': [
                'warn',
                'kebab-case',
                {
                    registeredComponentsOnly: true,
                },
            ],
            'vue/custom-event-name-casing': [
                'warn',
                'camelCase',
                {
                    ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
                }
            ],
            "unused-imports/no-unused-vars": [
                "error",
                {
                    vars: 'all',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_'
                }
            ],
            'no-console': 'warn',
        },
    },
    {
        files: ['**/*.md'],
        rules: {
            'style/no-trailing-spaces': 'off',
        },
    },
    {
        rules: {
            quotes: ['error', 'single'],
        },
    },
);
