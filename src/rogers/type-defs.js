/**
 * Arguments for Webpack config that we use.
 * These are passed via `--env` flag, i.e. `--env.branch=master`
 * @typedef {Object} IWebpackArgs
 * @property {string} env - i.e. 'development' or 'production'
 * @property {string} branch - i.e. 'master' or 'hotfix-123'
 * @property {boolean} [analyze = false] - Optional: if BundleAnalyzerPlugin should run
 * @property {boolean} [measure = false] - Optional: if SpeedMeasurePlugin should run
 */

/**
 * @typedef {'development'|'production'|'local'|'mockProd'|'demo'|'staging'|'test'} TEnvironment
 */

/**
 * @typedef {Object} IAuthZeroConfig
 * @property {string} audience
 * @property {string} clientId
 * @property {string} domain
 */

/**
 * @typedef {Object} IFirebaseConfig
 * @property {string} [apiKey] - Optional
 * @property {string} authDomain
 * @property {string} databaseURL
 * @property {string} projectId
 * @property {string} storageBucket
 * @property {string} messagingSenderId
 * @property {string} appId
 * @property {string} measurementId
 */

/**
 * @typedef {Object} IEnvVars
 * @property {string} apiBase
 * @property {string} mapbox
 * @property {string} netsuite
 * @property {string} stark
 * @property {string} mixpanel
 * @property {string} rootURL
 * @property {string} [datadog] - Optional
 * @property {string} [intercom] - Optional
 * @property {string} [tmsApi] - Optional
 * @property {string} [fpApi] - Optional
 * @property {IFirebaseConfig} [firebase] - Optional
 * @property {string} [fullstory] - Optional
 * @property {string} [marketingRootUrl] - Optional
 */

/**
 * @typedef {Object} IGlobals
 * @property {string} __ENV__
 * @property {boolean} __DEV__
 * @property {boolean} __STAGE__
 * @property {boolean} __STAGING_NEW__
 * @property {boolean} __PROD__
 * @property {boolean} __TEST__
 * @property {string} __GRAPHQL_ENDPOINT__
 * @property {string} __API__
 * @property {string} __TMS_API__
 * @property {string} __FP_API__
 * @property {string} __MAPBOX_TOKEN__
 * @property {string} __DATADOG_TOKEN__
 * @property {string} __INTERCOM_APP_ID__
 * @property {string} __NETSUITE_DOMAIN__
 * @property {string} __STARK__
 * @property {string} __MIXPANEL_TOKEN__
 * @property {string} __GIT_BRANCH__
 * @property {string} __ROOT__
 * @property {string} __ASSETS__
 * @property {string} __FS_ORG__
 * @property {string} __MARKETING_ROOT_URL__
 * @property {string} __FIREBASE__
 */

/**
 * @typedef {(...params: string[]) => string} PathsFunc
 */

/**
 * @typedef {Object} IPaths
 * @property {PathsFunc} base
 * @property {PathsFunc} src
 * @property {PathsFunc} dist
 * @property {PathsFunc} tests
 * @property {PathsFunc} node
 */

/**
 * @typedef {Object} IConfig
 * @property {IPaths} paths
 * @property {IGlobals} globals
 */
