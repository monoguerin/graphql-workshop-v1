const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'react-hooks', 'prettier'],
  extends: [
    'airbnb', // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'prettier/prettier': ERROR,
    camelcase: ERROR,
    semi: [ERROR, 'never'],
    '@typescript-eslint/array-type': [ERROR, { default: 'array' }],
    '@typescript-eslint/member-delimiter-style': [
      ERROR,
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    'no-alert': OFF,
    'class-methods-use-this': OFF,
    'global-require': OFF,
    'no-underscore-dangle': OFF,
    'no-unreachable': ERROR,
    'no-restricted-syntax': ['off', 'ForInStatement'],
    'comma-dangle': OFF,
    'import/prefer-default-export': OFF,
    'import/no-anonymous-default-export': [
      ERROR,
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        /**
         * This is enabled to allow Storybook stories
         * to use export default syntax
         */
        allowObject: true,
      },
    ],
    'import/no-unresolved': OFF,
    'import/extensions': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-param-reassign': OFF,
    'no-console': ERROR,
    'no-confusing-arrow': OFF,
    'prefer-destructuring': [
      ERROR,
      {
        object: true,
        array: false,
      },
    ],
    'react/no-unknown-property': ERROR,
    'react/prop-types': OFF,
    'react/no-multi-comp': [OFF, { ignoreStateless: true }],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', '.jsx'] }],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'jsx-a11y/label-has-for': [
      ERROR,
      {
        required: { every: ['id'] },
        allowChildren: false,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        components: [],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        assert: 'either',
        allowChildren: false,
        level: 3,
      },
    ],
    'react/sort-comp': OFF,
    'eol-last': ERROR,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'react/jsx-one-expression-per-line': OFF,
    'import/order': [
      ERROR,
      {
        groups: ['external', 'builtin', 'parent', 'sibling', 'index'],
      },
    ],
    'no-else-return': ERROR,
    'react/jsx-indent-props': [ERROR, 2],
    // Added based on Typescript eslint docs
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR],
    'no-unused-vars': OFF,
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    // DEREK THINKS WE SHOULD ENABLE EVERYTHING AFTER THIS COMMENT
    // -----------------------------------------------------------
    // -----------------------------------------------------------
    'import/no-cycle': OFF, // this one is super important and should be enabled as soon as possible
    'operator-linebreak': OFF,
    // this is my preference, but should be enabled along with the FOUR after it or it won't work
    // 'operator-linebreak': [ERROR, "before", { "overrides": { "=": "after" } }],
    'react/jsx-curly-newline': OFF,
    'implicit-arrow-linebreak': OFF,
    'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
    // ^^^^^^^^^^^^^^^^^operator-linebreak buddies^^^^^^^^^^^^^^^^^
    'prefer-object-spread': ERROR,
    'react/jsx-props-no-spreading': OFF,
    'react/forbid-foreign-prop-types': OFF,
    'react/destructuring-assignment': [ERROR, 'always', { ignoreClassFields: true }],
    'react/button-has-type': OFF,
    'react/static-property-placement': ERROR,
    'react/no-access-state-in-setstate': ERROR,
    'react/jsx-fragments': ERROR,
    'react/state-in-constructor': [ERROR, 'always'],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-key': WARN,
    'lines-between-class-members': ERROR,
    'import/no-useless-path-segments': ERROR,
    'unused-imports/no-unused-imports': ERROR,
    'unused-imports/no-unused-vars': WARN,
    'react/jsx-pascal-case': OFF,
    'react/no-unused-prop-types': WARN,
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': OFF,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': OFF,
        'react/require-default-props': OFF,
        'no-dupe-class-members': OFF, // this gets raised for method overloads and anyway is a type-error
        'no-extra-boolean-cast': ERROR,
        'no-undef': OFF,
        'no-shadow': OFF,
        'no-redeclare': OFF,
      },
    },
    {
      files: ['*.graphql'],
      plugins: ['@graphql-eslint'],
      extends: 'plugin:@graphql-eslint/operations-recommended',
      rules: {
        'prettier/prettier': ERROR,
        'spaced-comment': OFF,
      },
      parserOptions: {
        operations: './src/**/*.graphql',
        schema: './schema.graphql',
      },
    },
    {
      files: ['*Fragment.graphql'],
      rules: {
        '@graphql-eslint/no-unused-fragments': OFF,
      },
    },
  ],
  globals: {
    __ENV__: false,
    __DEV__: false,
    __STAGE__: false,
    __STAGING_NEW__: false,
    __PROD__: false,
    __TEST__: false,
    __COVERAGE__: false,
    __APP_NAME__: false,
    __BASENAME__: false,
    __API__: false,
    __GRAPHQL_ENDPOINT__: false,
    __ACTIONCABLE_ENDPOINT__: false,
    __TMS_API__: false,
    __FP_API__: false,
    __STARK__: false,
    __MAPBOX_TOKEN__: false,
    __MIXPANEL_TOKEN__: false,
    __INTERCOM_APP_ID__: false,
    __GIT_BRANCH__: false,
    __ROOT__: false,
    __FS_ORG__: false,
    __MARKETING_ROOT_URL__: false,
    __FIREBASE__: false,
    cy: false,
    Cypress: false,
    context: false,
    before: false,
    fetch: false,
  },
}
