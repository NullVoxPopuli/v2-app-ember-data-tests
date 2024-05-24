'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { maybeEmbroider } = require('@embroider/test-setup');

module.exports = async function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-build': {
      enableTypeScriptTransform: true,
    },
  });

  const { setConfig } = await import('@warp-drive/build-config');

  setConfig(app, __dirname, {
    deprecations: {
      // To be addressed
      // DEPRECATE_ARRAY_LIKE: false,
      // DEPRECATE_A_USAGE: false,
      // DEPRECATE_MODEL_REOPEN: false,
      // DEPRECATE_EARLY_STATIC: false,
      // DEPRECATE_PROMISE_MANY_ARRAY_BEHAVIORS: false,
      DEPRECATE_PROMISE_PROXIES: false,
      DEPRECATE_SAVE_PROMISE_ACCESS: false,
      DEPRECATE_INSTANTIATE_RECORD_ARGS: false,
      DEPRECATE_V1CACHE_STORE_APIS: false,
      DEPRECATE_STRING_ARG_SCHEMAS: false,
      DEPRECATE_V1_RECORD_DATA: false,
      DEPRECATE_HELPERS: false,
      DEPRECATE_HAS_RECORD: false,
      DEPRECATE_JSON_API_FALLBACK: false,
      DEPRECATE_NON_EXPLICIT_POLYMORPHISM: false,
      DEPRECATE_RELATIONSHIPS_WITHOUT_ASYNC: false,
      DEPRECATE_RELATIONSHIPS_WITHOUT_INVERSE: false,
      DEPRECATE_RELATIONSHIPS_WITHOUT_TYPE: false,
      DEPRECATE_RSVP_PROMISE: false,
      DEPRECATE_SNAPSHOT_MODEL_CLASS_ACCESS: false,
      DEPRECATE_STORE_FIND: false,
    },
    debug: {
      LOG_PAYLOADS: false, // data store received to update cache with
      LOG_OPERATIONS: false, // updates to cache remote state
      LOG_MUTATIONS: false, // updates to cache local state
      LOG_NOTIFICATIONS: false,
      LOG_REQUESTS: false,
      LOG_REQUEST_STATUS: false,
      LOG_IDENTIFIERS: false,
      LOG_GRAPH: false,
      LOG_INSTANCE_CACHE: false,
    },
  });

  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
