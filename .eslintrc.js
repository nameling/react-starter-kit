module.exports = {
  root: true, // 停止在父级目录中寻找
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: { // ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:
      impliedStrict: true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      jsx: true, // 启用jsx
    },
    ecmaVersion: 2018,
    sourceType: 'module', // ECMAScript
  },
  plugins: [
    'react',
  ],
  rules: {
    '@typescript-eslint/camelcase': [
      'error',
      {
        allow: [
          '^UNSAFE_',
          'child_process',
          'drop_debugger',
          'drop_console',
          'keep_classnames',
          'keep_fnames',
        ],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',

    'class-methods-use-this': 'warn',
    'consistent-return': 'warn',
    eqeqeq: 'warn',
    'guard-for-in': 'warn',

    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-cycle': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // 1. node "builtin" modules
          'external', // 2. "external" modules(node_modules)
          'internal', // 3. "internal" modules(webpack alias)
          'parent', // 4. modules from a "parent" directory
          'sibling', // 5. "sibling" modules from the same or a sibling's directory
          'index', // 6. "index" of the current directory
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'no-bitwise': 'warn',
    'no-cond-assign': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-loop-func': 'warn',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'warn',
    'no-prototype-builtins': 'warn',
    'no-restricted-globals': 'warn',
    'no-restricted-syntax': 'warn',
    'no-return-assign': 'warn',
    'no-script-url': 'warn',
    'no-shadow': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'no-useless-constructor': 'warn',

    'one-var': 'warn',

    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-promise-reject-errors': 'warn',
    radix: 'warn',

    'react/button-has-type': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-no-bind': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/prefer-stateless-function': 'off',
    // 使用 TS 无需使用 prop-types
    'react/prop-types': 'off',
    'react/sort-comp': 'warn',

    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};
