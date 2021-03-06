Package.describe({
  name: 'elvishjerricco:subs-cache',
  summary: 'A package for caching Meteor subscriptions.',
  version: '0.1.0',
  git: 'https://github.com/ElvishJerricco/meteor-subs-cache'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1');

  api.use([
    'coffeescript',
    'underscore',
    'ejson',
    'tracker',
    'reactive-var'
  ], ['client', 'server']);

  api.addFiles([
    'src/subsCache.coffee',
    'src/global_variables.js'
  ], ['client', 'server']);


  api.export("SubsCache", ['client', 'server']);
});
